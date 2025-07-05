<template>
  <footer class="footer">
    <div class="container">
      <div class="social-media" v-if="isMobile || isTablet">
        <a href="https://ru.pinterest.com/MOOVTRAVEL/?invite_code=b18aaee1b8564aba8c9e2e7a941e5ca3&sender=1101693265004231226" class="footer-mask pinterest"></a>
        <a href="https://www.instagram.com/moov.travel" class="footer-mask instagram"></a>
        <a href="https://t.me/moovtravel" class="footer-mask tg"></a>
      </div>
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
          <p class="footer-link">+7 903 173-77-88</p>
          <p class="footer-link">Sputnik@moov-travel.ru</p>
          <p class="footer-link">Moscow, Russia</p>
        </div>
        <div class="footer-section mobile-none">
          <h4>Социальные сети</h4>
          <div class="social-media">
            <a href="https://ru.pinterest.com/MOOVTRAVEL/?invite_code=b18aaee1b8564aba8c9e2e7a941e5ca3&sender=1101693265004231226" class="footer-mask pinterest"></a>
            <a href="https://www.instagram.com/moov.travel" class="footer-mask instagram"></a>
            <a href="https://t.me/moovtravel" class="footer-mask tg"></a>
          </div>
        </div>
        <div class="footer-section">
          <p class="footer-link wrap-text">ОГРН 1257700185412</p>
          <p class="footer-link wrap-text">Правовая информация</p>
          <p class="footer-link_ur loy-inform">Представленная на сайте<br v-if="isMobile || isTablet"/>
            информация носит<br v-if="isMobile || isTablet"/>
            справочный характер<br v-if="isMobile || isTablet"/>
            и не является<br v-if="isMobile || isTablet"/>
            публичной офертой</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

import {computed, onMounted, onUnmounted, ref} from "vue";

const windowWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : 1201 // desktop по умолчанию для SSR
);

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth;
  }
};

const isMobile = computed(() => windowWidth.value <= 576);
const isTablet = computed(() => windowWidth.value > 576 && windowWidth.value <= 1300);

onMounted(() => {
  updateWindowWidth();
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowWidth);
  }
})
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowWidth);
  }
})
</script>

<style scoped lang="scss">
.logo-moove {
  width: 123px;
  height: 107px;
  background: url('/src/assets/images/logoMoov.svg') no-repeat center;
  background-size: contain;
  @media (max-width: 1300px) {
    display: none;
  }
}

.logo-text {
  width: 166px;
  height: 68px;
  background: url('/src/assets/images/mooveTravel.svg') no-repeat center;
  background-size: contain;
  margin-top: 20px;
  @media (max-width: 1300px) {
    display: none;
  }
}

.logo-link{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  @media (max-width: 1300px) {
    display: none;
  }
}


.footer {
  background-color: #1f2937;
  color: #ffffff;
  padding: 97px 0 76px;
  margin-top: auto;
  height: 337px;
  @media (max-width: 1300px) {
    padding: 20px 20px 12px;
  }
}

.container {
  width: calc(100% - 360px);
  margin: 0 auto;
  @media (max-width: 1400px) {
      width: calc(100vw - 80px);
      margin: 0 40px;
      padding: 0;
  }
  @media (max-width: 768px) {
      width: calc(100vw - 40px);
      margin: 0 20px;
      padding: 0;
  }
}

.footer-content {
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1650px) {
    gap: 5%;
  }
  @media (max-width: 900px) {
    padding-right: 20px;
  }
  @media (min-width: 1650px) {
    gap: 10%;
  }
}

.footer-section h4 {
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
  @media (max-width: 768px) {
    gap: 6px;
  }
}

.footer-section li {
  font-family: Rubik;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
}

.footer-link {
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.2s;
  text-wrap: nowrap;
  @media (max-width: 768px) {
    font-weight: 400;
    font-style: Regular;
    font-size: 8px;
    leading-trim: NONE;
  }
}

.footer-link_ur {
  color: #d1d5db;
  font-weight: 400;
  font-style: italic;
  font-size: 18px;
  line-height: 100%;
}

.wrap-text{
  text-wrap: nowrap;
}

.footer-link:hover {
  color: #0070f3;
}

.footer-section p {
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.social-media{
  display: flex;
  gap: 24px;
  @media (max-width: 1300px) {
    margin-bottom: 20px;
  }
}

h4{
  margin-bottom: 16px;
  font-weight: 700;
  font-style: Bold;
  font-size: 24px;
  leading-trim: NONE;
  line-height: 100%;
  text-wrap: nowrap;
  @media (min-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 900px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 576px) {
    font-size: 8px;
  }
}

.loy-inform{
  font-weight: 400;
  font-style: Italic;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  @media (max-width: 768px) {
    font-weight: 400;
    font-style: Regular;
    font-size: 8px;
    leading-trim: NONE;
  }
}

.mobile-none{
  @media (max-width: 1300px) {
    display: none;
  }
}

.footer-mask{
  width: 40px;
  height: 40px;
  mask-size: 32px 32px;
  -webkit-mask-size: 32px 32px;
  text-decoration: none;
  color: #FFFFFF;
  background: #FFFFFF;
  cursor: pointer;
  @media (max-width: 768px) {
    mask-size: 25px 25px;
    -webkit-mask-size: 25px 25px;
    width: 25px;
    height: 25px;
  }
}

.pinterest{
  mask: url(/src/assets/images/icons/pinterest.svg) no-repeat center/contain;
  -webkit-mask: url(/src/assets/images/icons/pinterest.svg) no-repeat center/contain;
}

.instagram{
  mask: url(/src/assets/images/icons/instagram.svg) no-repeat center/contain;
  -webkit-mask: url(/src/assets/images/icons/instagram.svg) no-repeat center/contain;
}

.tg{
  mask: url(/src/assets/images/icons/tg.svg) no-repeat center/contain;
  -webkit-mask: url(/src/assets/images/icons/tg.svg) no-repeat center/contain;
}
</style> 