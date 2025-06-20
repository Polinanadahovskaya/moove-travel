<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/" class="logo-link">
          <div class="logo-moove"/>
          <div class="logo-text"/>
        </NuxtLink>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li>
            <NuxtLink to="/" class="nav-link">Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="nav-link">О нас</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" class="nav-link">Блог</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/Travel-gids" class="nav-link">Travel-гиды</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Логика для header
</script>

<style scoped>
.header {
  background-color: #3E3E3E;
  border-bottom: 1px solid #e5e7eb;
  padding: 13px 182px 32px;
}

.container {
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
}

.nav-link {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-link:hover {

}

.nav-link.router-link-active {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  border-bottom: 3px solid #C75454;
}

.logo-moove {
  width: 123px;
  height: 107px;
  background: url('/src/assets/images/logoMoov.svg') no-repeat center;
  background-size: contain;
}

.logo-text {
  width: 166px;
  height: 68px;
  background: url('/src/assets/images/mooveTravel.svg') no-repeat center;
  background-size: contain;
  margin-top: 20px;
}
</style> 