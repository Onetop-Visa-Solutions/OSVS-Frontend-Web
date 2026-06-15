# Contact Bot Setup

This website uses a Cloudflare Pages Function at `/api/contact` for the Contact Us form.
The function stores submissions in D1 and sends each submission to configured Telegram chats.

## 1. Create the Telegram bot

1. Open Telegram and message `@BotFather`.
2. Run `/newbot`.
3. Use a display name like `Onestop Telegram Bot`.
4. Pick a unique username ending in `bot`.
5. Save the bot token from BotFather.

## 2. Get recipient chat IDs

For a direct recipient, have that person start the bot by opening it and pressing Start.
Then open this URL with the bot token:

```text
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getUpdates
```

Use the returned `message.chat.id`.

For a Telegram group, add the bot to the group, send a test message in the group, then call
the same `getUpdates` URL and use the group's `chat.id`.

## 3. Create D1 and apply the migration

From the `website` directory:

```bash
npx wrangler d1 create onestop-contact-submissions
npx wrangler d1 execute onestop-contact-submissions --remote --file=./migrations/0001_contact_submissions.sql
```

## 4. Configure Cloudflare Pages

In Cloudflare Pages, open the website project:

1. Go to `Settings > Functions > D1 database bindings`.
2. Add a binding named `CONTACT_DB`.
3. Select the `onestop-contact-submissions` D1 database.
4. Go to `Settings > Environment variables`.
5. Add `TELEGRAM_BOT_TOKEN` as a secret.
6. Add `TELEGRAM_CHAT_IDS` as a comma-separated list, for example:

```text
123456789,-1001234567890
```

Optional:

```text
ALLOWED_ORIGINS=https://your-domain.com,https://www.your-domain.com
```

Redeploy the Pages project after changing bindings or environment variables.
