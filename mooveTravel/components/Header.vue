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
      <div class="burger" @click="isMenuOpen = true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div v-if="isMenuOpen" class="mobile-menu-overlay" @click.self="isMenuOpen = false">
        <div class="mobile-menu">
          <button class="close-btn" @click="isMenuOpen = false">&times;</button>
          <ul class="mobile-nav-list">
            <li>
              <NuxtLink to="/" class="nav-link" @click="isMenuOpen = false">Главная</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="nav-link" @click="isMenuOpen = false">О нас</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="nav-link" @click="isMenuOpen = false">Блог</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/Travel-gids" class="nav-link" @click="isMenuOpen = false">Travel-гиды</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style scoped lang="scss">
.header {
  background-color: #3E3E3E;
  border-bottom: 1px solid #e5e7eb;
  padding: 30px 20px;
  @media (min-width: 1300px) {
    padding: 13px 182px 32px;
  }
}

.container {
  max-width: 1920px;
  width: 100%;
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
  @media (max-width: 870px) {
    flex-direction: column;
    justify-content: center;
  }
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
  @media (max-width: 870px) {
    flex-direction: column;
    gap: 13px;
    align-items: flex-end;
  }
}

.nav-link {
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.2s;
  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.nav-link.router-link-active {
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #FFFFFF;
  border-bottom: 3px solid #C75454;
  @media (max-width: 768px) {
    border: none;
    font-size: 12px;
  }
}

.logo-moove {
  width: 123px;
  height: 107px;
  background: url('/src/assets/images/logoMoov.svg') no-repeat center;
  background-size: contain;
  @media (max-width: 768px) {
    width: 62px;
    height: 55px;
  }
}

.logo-text {
  width: 166px;
  height: 68px;
  background: url('/src/assets/images/mooveTravel.svg') no-repeat center;
  background-size: contain;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 85px;
    height: 35px;
    margin-top: 5px;
  }
}

.burger {
  display: none;
  width: 32px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 870px) {
    display: flex;
  }
  span {
    display: block;
    width: 28px;
    height: 3px;
    background: #FFFFFF;
    margin: 4px 0;
    border-radius: 2px;
    transition: 0.3s;
  }
}

.nav {
  @media (max-width: 870px) {
    display: none;
  }
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  z-index: 1200;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu {
  background: #fff;
  width: 80vw;
  max-width: 320px;
  height: 100%;
  padding: 32px 24px 24px 24px;
  box-shadow: -2px 0 8px rgba(0,0,0,0.08);
  position: relative;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.2s;
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 48px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-nav-list .nav-link {
  font-size: 20px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
}
</style> 