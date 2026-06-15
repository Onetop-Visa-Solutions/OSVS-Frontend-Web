interface Env {
  CONTACT_DB: D1Database
  TELEGRAM_BOT_TOKEN?: string
  TELEGRAM_CHAT_IDS?: string
  ALLOWED_ORIGINS?: string
}

interface ContactPayload {
  firstName?: unknown
  lastName?: unknown
  email?: unknown
  message?: unknown
  company?: unknown
}

type ContactSubmission = {
  firstName: string
  lastName: string
  email: string
  message: string
}

const jsonHeaders = {
  'content-type': 'application/json; charset=utf-8',
}

export const onRequestOptions: PagesFunction<Env> = async ({ request, env }) => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request, env),
  })
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const headers = {
    ...jsonHeaders,
    ...corsHeaders(request, env),
  }

  try {
    return await handleContactRequest(request, env, headers)
  } catch (error) {
    console.error('Unhandled contact form error', error)

    return json({ error: 'Unable to send your message right now.' }, 500, headers)
  }
}

async function handleContactRequest(request: Request, env: Env, headers: HeadersInit) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return json({ error: 'Invalid JSON payload.' }, 400, headers)
  }

  if (typeof payload.company === 'string' && payload.company.trim()) {
    return json({ ok: true }, 200, headers)
  }

  const validation = validatePayload(payload)

  if ('error' in validation) {
    return json({ error: validation.error }, 400, headers)
  }

  if (!env.CONTACT_DB) {
    return json({ error: 'Contact database is not configured.' }, 500, headers)
  }

  const chatIds = parseChatIds(env.TELEGRAM_CHAT_IDS)

  if (!env.TELEGRAM_BOT_TOKEN || chatIds.length === 0) {
    return json({ error: 'Contact notification is not configured.' }, 500, headers)
  }

  const submission = validation.value
  const now = new Date().toISOString()
  const metadata = getRequestMetadata(request)

  let insert: { id: number } | null

  try {
    insert = await env.CONTACT_DB.prepare(
      `INSERT INTO contact_submissions (
        first_name,
        last_name,
        email,
        message,
        source,
        user_agent,
        ip_address,
        telegram_status,
        created_at,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING id`,
    )
      .bind(
        submission.firstName,
        submission.lastName,
        submission.email,
        submission.message,
        'website_contact_form',
        metadata.userAgent,
        metadata.ipAddress,
        'pending',
        now,
        now,
      )
      .first<{ id: number }>()
  } catch (error) {
    console.error('Contact database insert failed', error)

    return json({ error: 'Contact database is not ready.' }, 500, headers)
  }

  if (!insert?.id) {
    return json({ error: 'Unable to save contact submission.' }, 500, headers)
  }

  const telegramMessage = formatTelegramMessage(submission, insert.id)

  try {
    await notifyTelegram(env.TELEGRAM_BOT_TOKEN, chatIds, telegramMessage)

    await updateTelegramStatus(env, insert.id, 'sent')

    return json({ ok: true, id: insert.id }, 200, headers)
  } catch (error) {
    await updateTelegramStatus(
      env,
      insert.id,
      'failed',
      error instanceof Error ? error.message : 'Unknown Telegram delivery error',
    )

    return json(
      { error: 'Submission was saved, but Telegram notification failed.' },
      502,
      headers,
    )
  }
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  return new Response('Method Not Allowed', {
    status: 405,
    headers: {
      allow: 'POST, OPTIONS',
      ...corsHeaders(request, env),
    },
  })
}

function validatePayload(payload: ContactPayload): { value: ContactSubmission } | { error: string } {
  const firstName = cleanString(payload.firstName)
  const lastName = cleanString(payload.lastName)
  const email = cleanString(payload.email)
  const message = cleanString(payload.message)

  if (!firstName || !lastName || !email || !message) {
    return { error: 'First name, last name, email, and message are required.' }
  }

  if (firstName.length > 80 || lastName.length > 80) {
    return { error: 'Name fields must be 80 characters or fewer.' }
  }

  if (email.length > 160 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Enter a valid email address.' }
  }

  if (message.length > 4000) {
    return { error: 'Message must be 4000 characters or fewer.' }
  }

  return {
    value: {
      firstName,
      lastName,
      email,
      message,
    },
  }
}

function cleanString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function parseChatIds(value?: string) {
  return (value ?? '')
    .split(',')
    .map((chatId) => chatId.trim())
    .filter(Boolean)
}

function formatTelegramMessage(submission: ContactSubmission, id: number) {
  const name = `${submission.firstName} ${submission.lastName}`

  return [
    `New website contact #${id}`,
    '',
    `Name: ${name}`,
    `Email: ${submission.email}`,
    '',
    submission.message,
  ].join('\n')
}

async function notifyTelegram(token: string, chatIds: string[], text: string) {
  const responses = await Promise.all(
    chatIds.map(async (chatId) => {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: jsonHeaders,
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      })

      if (!response.ok) {
        const errorBody = await response.text()
        throw new Error(`Telegram send failed for ${chatId}: ${errorBody}`)
      }

      return response.json()
    }),
  )

  return responses
}

async function updateTelegramStatus(
  env: Env,
  id: number,
  status: 'sent' | 'failed',
  error?: string,
) {
  await env.CONTACT_DB.prepare(
    `UPDATE contact_submissions
     SET telegram_status = ?, telegram_error = ?, updated_at = ?
     WHERE id = ?`,
  )
    .bind(status, error ?? null, new Date().toISOString(), id)
    .run()
}

function getRequestMetadata(request: Request) {
  return {
    userAgent: request.headers.get('user-agent') ?? null,
    ipAddress:
      request.headers.get('cf-connecting-ip') ??
      request.headers.get('x-forwarded-for') ??
      null,
  }
}

function corsHeaders(request: Request, env: Env) {
  const origin = request.headers.get('origin')
  const allowedOrigins = (env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((allowedOrigin) => allowedOrigin.trim())
    .filter(Boolean)

  if (!origin || (allowedOrigins.length > 0 && !allowedOrigins.includes(origin))) {
    return {}
  }

  return {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type',
  }
}

function json(body: unknown, status: number, headers: HeadersInit) {
  return new Response(JSON.stringify(body), {
    status,
    headers,
  })
}
