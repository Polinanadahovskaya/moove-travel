<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Импортируем CSS файл
import './src/assets/css/main.css'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: calc(100% - 360px);
  margin: 0 auto;
}

@media (max-width: 768px) {
  .main-content {
    width: calc(100vw - 40px);
    margin: 0 20px;
    padding: 0;
  }
}

* {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
</style>
