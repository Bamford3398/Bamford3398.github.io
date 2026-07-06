<template>
  <div class="contact-page">
    <div class="contact-container">
      <div class="contact-content">
        <h1 class="contact-title">Get in Touch</h1>
        <p class="contact-subtitle">Fill out the form below and we'll get back to you as soon as possible.</p>
        
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="form-input"
              placeholder="Enter your name"
              required
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
            ></textarea>
          </div>

          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  const subject = encodeURIComponent(formData.value.subject || 'Contact Form Submission')
  const body = encodeURIComponent(
    `Name: ${formData.value.name}\n` +
    `Email: ${formData.value.email}\n` +
    `Phone: ${formData.value.phone || 'Not provided'}\n\n` +
    `Message:\n${formData.value.message}`
  )
  
  window.location.href = `mailto:dave@wasp-eng.com?subject=${subject}&body=${body}`
  
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  }, 1000)
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
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 48px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
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

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  margin-top: 8px;
}

.contact-container {
  padding-block: 64px;
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
