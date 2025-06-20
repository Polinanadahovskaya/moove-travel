<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <NuxtLink to="/" class="logo-link">
          <div class="logo-moove"/>
          <div class="logo-text"/>
        </NuxtLink>
        <div class="footer-section">
          <h4>Меню</h4>
          <ul>
            <li><NuxtLink to="/" class="footer-link">Главная</NuxtLink></li>
            <li><NuxtLink to="/about" class="footer-link">О нас</NuxtLink></li>
            <li><NuxtLink to="/blog" class="footer-link">Блог</NuxtLink></li>
            <li>
              <NuxtLink to="/Travel-gids" class="footer-link">Travel-гиды</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Контакты</h4>
          <p class="footer-link">Email: info@moovetravel.com</p>
          <p class="footer-link">Телефон: +7 (999) 123-45-67</p>
          <p class="footer-link">1245, Moscow, Russia</p>
        </div>

        <div class="footer-section">
          <p class="footer-link_ur">ИП</p>
          <p class="footer-link_ur">ОГРН</p>
          <p class="footer-link_ur">Другая юридическая ифнормация</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Логика для footer
</script>

<style scoped>
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

.logo-link{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
}


.footer {
  background-color: #1f2937;
  color: #ffffff;
  padding: 97px 0 76px;
  margin-top: auto;
  height: 337px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: #0070f3;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.footer-section h4 {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #FFFFFF;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 12px;
  flex-direction: column;
}

.footer-section li {
  font-family: Rubik;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
}

.footer-link {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link_ur {
  color: #d1d5db;
  font-family: Montserrat;
  font-weight: 400;
  font-style: italic;
  font-size: 18px;
  line-height: 100%;
}

.footer-link:hover {
  color: #0070f3;
}

.footer-section p {
  color: #d1d5db;
  margin-bottom: 0.5rem;
}


</style> 