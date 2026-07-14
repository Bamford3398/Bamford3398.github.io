<template>
  <div class="contact-page">
    <div class="contact-container">
      <div class="contact-content">
        <h1 class="contact-title">Get in Touch</h1>
        <p class="contact-subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <input type="checkbox" name="botcheck" class="botcheck" tabindex="-1" autocomplete="off" />

          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="form-input"
              placeholder="Enter your name"
              required
              :disabled="submitting"
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="form-input"
              placeholder="Enter your email address"
              required
              :disabled="submitting"
            />
          </div>

          <div class="form-group">
            <label for="phone" class="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              class="form-input"
              placeholder="Enter your phone number"
              :disabled="submitting"
            />
          </div>

          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="formData.subject"
              class="form-input"
              placeholder="Enter the subject"
              required
              :disabled="submitting"
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              class="form-textarea"
              rows="6"
              placeholder="Enter your message"
              required
              :disabled="submitting"
            ></textarea>
          </div>

          <button type="submit" class="submit-button" :disabled="submitting">
            {{ submitting ? 'Sending…' : 'Send Message' }}
          </button>

          <p v-if="success" class="form-success" role="status">
            Success, your message has been sent. Please allow up to 48 hours for a response.
          </p>
          <p v-if="error" class="form-error" role="alert">
            {{ error }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const WEB3FORMS_ACCESS_KEY = 'a35c4a8b-a92e-41e2-b9cb-b90178d2e5a0'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const success = ref(false)
const error = ref('')

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}

const handleSubmit = async () => {
  success.value = false
  error.value = ''
  submitting.value = true

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone || 'Not provided',
        subject: formData.value.subject || 'Contact Form Submission',
        message: formData.value.message,
        from_name: 'WASP Website Contact Form'
      })
    })

    const result = await response.json()

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Unable to send your message. Please try again.')
    }

    success.value = true
    resetForm()
  } catch (err) {
    error.value =
      err instanceof Error
        ? err.message
        : 'Unable to send your message. Please email info@wasp-eng.com instead.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background-color: #0a0a0a;
  padding-top: 80px;
}

.contact-container {
  padding-block: 64px;
}

.contact-content {
  width: 100%;
}

.contact-title {
  color: #ffffff;
  margin-bottom: 16px;
}

.contact-subtitle {
  color: var(--color-text-body);
  margin-bottom: 48px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.botcheck {
  position: absolute;
  left: -9999px;
  opacity: 0;
  height: 0;
  width: 0;
  pointer-events: none;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  color: #ffffff;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 16px;
  background-color: #ffffff;
  color: #0a0a0a;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #888888;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #e7c73a;
  box-shadow: 0 0 0 3px rgba(231, 199, 58, 0.1);
}

.form-input:disabled,
.form-textarea:disabled,
.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  margin-top: 8px;
}

.form-success {
  margin: 0;
  color: #e7c73a;
  font-style: italic;
  line-height: 1.5;
}

.form-error {
  margin: 0;
  color: #ff8e8e;
  font-style: italic;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .contact-container {
    padding-block: 48px;
  }

  .form-input,
  .form-textarea {
    padding: 14px;
  }

  .submit-button {
    padding: 14px 32px;
  }
}
</style>
