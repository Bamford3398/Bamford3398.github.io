<template>
  <div class="app">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
.app {
  min-height: 100vh;
  background-color: #0a0a0a;
}
</style>
