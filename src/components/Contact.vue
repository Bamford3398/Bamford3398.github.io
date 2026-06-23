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
  // Create mailto link with form data
  const subject = encodeURIComponent(formData.value.subject || 'Contact Form Submission')
  const body = encodeURIComponent(
    `Name: ${formData.value.name}\n` +
    `Email: ${formData.value.email}\n` +
    `Phone: ${formData.value.phone || 'Not provided'}\n\n` +
    `Message:\n${formData.value.message}`
  )
  
  // Open email client
  window.location.href = `mailto:dave@wasp-eng.com?subject=${subject}&body=${body}`
  
  // Reset form after a short delay
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
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.contact-content {
  width: 100%;
}

.contact-title {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 3rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem;
  background-color: #ffffff;
  color: #0a0a0a;
  border: 2px solid transparent;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #888888;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #D4AF37;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  background-color: #D4AF37;
  color: #0a0a0a;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  font-family: 'Inter', sans-serif;
  margin-top: 0.5rem;
}

.submit-button:hover {
  background-color: #E5C158;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
}

.submit-button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .contact-container {
    padding: 3rem 1rem;
  }
  
  .contact-title {
    font-size: 2rem;
  }
  
  .contact-subtitle {
    font-size: 1rem;
  }
  
  .form-input,
  .form-textarea {
    padding: 0.875rem;
  }
  
  .submit-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}
</style>
