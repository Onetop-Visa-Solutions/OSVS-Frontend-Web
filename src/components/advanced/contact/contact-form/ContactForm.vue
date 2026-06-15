<script setup lang="ts">
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  company: '',
})

const isSubmitting = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')
const statusMessage = ref('')

async function submitContactForm() {
  status.value = 'idle'
  statusMessage.value = ''
  isSubmitting.value = true

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const result = await response.json().catch(() => ({}))

    if (!response.ok) {
      throw new Error(result.error || 'Unable to send your message right now.')
    }

    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.message = ''
    form.company = ''
    status.value = 'success'
    statusMessage.value = 'Your message has been sent.'
  } catch (error) {
    status.value = 'error'
    statusMessage.value =
      error instanceof Error ? error.message : 'Unable to send your message right now.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact-form">
    <form @submit.prevent="submitContactForm">
      <div class="columns is-multiline">
        <div
          class="column is-12 honeypot"
          aria-hidden="true"
        >
          <Field>
            <FieldLabel label="Company">
              Company
            </FieldLabel>
            <Control>
              <VInput
                v-model="form.company"
                tabindex="-1"
                autocomplete="off"
                placeholder="Company"
              />
            </Control>
          </Field>
        </div>
        <div class="column is-6">
          <Field>
            <FieldLabel label="First Name">
              First Name
            </FieldLabel>
            <Control icon="feather:user">
              <VInput
                v-model="form.firstName"
                placeholder="Your first name"
              />
            </Control>
          </Field>
        </div>
        <div class="column is-6">
          <Field>
            <FieldLabel label="Last Name">
              Last Name
            </FieldLabel>
            <Control icon="feather:user">
              <VInput
                v-model="form.lastName"
                placeholder="Your last name"
              />
            </Control>
          </Field>
        </div>
        <div class="column is-12">
          <Field>
            <FieldLabel label="First Name">
              Email Address
            </FieldLabel>
            <Control icon="feather:mail">
              <VInput
                v-model="form.email"
                type="email"
                placeholder="Your mail address"
              />
            </Control>
          </Field>
        </div>
        <div class="column is-12">
          <Field>
            <FieldLabel label="First Name">
              Message
            </FieldLabel>
            <Control>
              <VTextarea
                v-model="form.message"
                :rows="4"
                placeholder="Write your message..."
              />
            </Control>
          </Field>
        </div>
        <div
          v-if="statusMessage"
          class="column is-12"
        >
          <p
            class="status-message"
            :class="status"
            role="status"
          >
            {{ statusMessage }}
          </p>
        </div>
        <div class="column is-12">
          <Control>
            <Button
              color="primary"
              bold
              raised
              fullwidth
              :loading="isSubmitting"
              :disabled="isSubmitting"
            >
              <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
            </Button>
          </Control>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.contact-form {
  position: relative;

  .column {
    padding: 0.4rem;
  }

  .honeypot {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .status-message {
    font-family: var(--font);
    font-size: 0.9rem;
    font-weight: 500;

    &.success {
      color: var(--success);
    }

    &.error {
      color: var(--danger);
    }
  }
}
</style>
