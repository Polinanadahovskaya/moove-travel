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
  width: clamp(60px, 8vw, 123px);
  height: clamp(50px, 7vw, 107px);
  background: url('/src/assets/images/logoMoov.svg') no-repeat center;
  background-size: contain;
  transition: all 0.3s ease;
  
  @media (max-width: 1300px) {
    display: none;
  }
}

.logo-text {
  width: clamp(80px, 12vw, 166px);
  height: clamp(35px, 5vw, 68px);
  background: url('/src/assets/images/mooveTravel.svg') no-repeat center;
  background-size: contain;
  margin-top: clamp(10px, 1.5vw, 20px);
  transition: all 0.3s ease;
  
  @media (max-width: 1300px) {
    display: none;
  }
}

.logo-link{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  transition: all 0.3s ease;
  
  @media (max-width: 1300px) {
    display: none;
  }
}


.footer {
  background-color: #3E3E3E;
  color: #ffffff;
  padding: clamp(20px, 8vw, 97px) 0 clamp(12px, 6vw, 76px);
  margin-top: auto;
  height: clamp(200px, 25vw, 337px);
  transition: all 0.3s ease;
  
  @media (max-width: 1300px) {
    padding: clamp(15px, 2vw, 20px) clamp(15px, 2vw, 20px) clamp(8px, 1vw, 12px);
  }
}

.container {
  width: calc(100% - clamp(200px, 20vw, 360px));
  margin: 0 auto;
  transition: all 0.3s ease;
  
  @media (max-width: 1400px) {
      width: calc(100vw - clamp(40px, 5vw, 80px));
      margin: 0 clamp(20px, 3vw, 40px);
      padding: 0;
  }
  
  @media (max-width: 768px) {
      width: calc(100vw - clamp(20px, 3vw, 40px));
      margin: 0 clamp(10px, 2vw, 20px);
      padding: 0;
  }
}

.footer-content {
  display: flex;
  margin-bottom: clamp(1rem, 2vw, 2rem);
  width: 100%;
  justify-content: space-between;
  transition: all 0.3s ease;
  
  @media (max-width: 1650px) {
    gap: clamp(3%, 4vw, 5%);
  }
  
  @media (max-width: 900px) {
    padding-right: clamp(15px, 2vw, 20px);
  }
  
  @media (min-width: 1650px) {
    gap: clamp(8%, 9vw, 10%);
  }
}

.footer-section h4 {
  font-weight: 700;
  font-size: clamp(16px, 2vw, 24px);
  line-height: 100%;
  color: #FFFFFF;
  transition: all 0.3s ease;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: clamp(8px, 1vw, 12px);
  flex-direction: column;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    gap: clamp(4px, 0.8vw, 6px);
  }
}

.footer-section li {
  font-family: Rubik;
  font-weight: 400;
  font-size: clamp(14px, 1.5vw, 18px);
  line-height: 100%;
  transition: all 0.3s ease;
}

.footer-link {
  color: #FFFFFF;
  text-decoration: none;
  transition: all 0.3s ease;
  text-wrap: nowrap;
  
  @media (max-width: 768px) {
    font-weight: 400;
    font-style: Regular;
    font-size: clamp(6px, 1vw, 8px);
    leading-trim: NONE;
  }
}

.footer-link_ur {
  color: #d1d5db;
  font-weight: 400;
  font-style: italic;
  font-size: clamp(12px, 1.5vw, 18px);
  line-height: 100%;
  transition: all 0.3s ease;
}

.wrap-text{
  text-wrap: nowrap;
}

.footer-link:hover {
  color: #0070f3;
}

.footer-section p {
  color: #FFFFFF;
  margin-bottom: clamp(0.3rem, 0.5vw, 0.5rem);
  transition: all 0.3s ease;
}

.social-media{
  display: flex;
  gap: clamp(16px, 2vw, 24px);
  transition: all 0.3s ease;
  
  @media (max-width: 1300px) {
    margin-bottom: clamp(15px, 2vw, 20px);
  }
}

h4{
  margin-bottom: clamp(12px, 1.5vw, 16px);
  font-weight: 700;
  font-style: Bold;
  font-size: clamp(16px, 2vw, 24px);
  leading-trim: NONE;
  line-height: 100%;
  text-wrap: nowrap;
  transition: all 0.3s ease;
  
  @media (min-width: 1200px) {
    font-size: clamp(16px, 1.8vw, 20px);
  }
  
  @media (min-width: 900px) {
    font-size: clamp(12px, 1.5vw, 16px);
  }
  
  @media (min-width: 768px) {
    font-size: clamp(10px, 1.2vw, 12px);
  }
  
  @media (min-width: 576px) {
    font-size: clamp(6px, 1vw, 8px);
  }
}

.loy-inform{
  font-weight: 400;
  font-style: Italic;
  font-size: clamp(8px, 1.2vw, 12px);
  leading-trim: NONE;
  line-height: 100%;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-weight: 400;
    font-style: Regular;
    font-size: clamp(6px, 1vw, 8px);
    leading-trim: NONE;
  }
}

.mobile-none{
  transition: all 0.3s ease;
  
  @media (max-width: 1300px) {
    display: none;
  }
}

.footer-mask{
  width: clamp(25px, 3vw, 40px);
  height: clamp(25px, 3vw, 40px);
  mask-size: clamp(20px, 2.5vw, 32px) clamp(20px, 2.5vw, 32px);
  -webkit-mask-size: clamp(20px, 2.5vw, 32px) clamp(20px, 2.5vw, 32px);
  text-decoration: none;
  color: #FFFFFF;
  background: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    mask-size: clamp(18px, 2vw, 25px) clamp(18px, 2vw, 25px);
    -webkit-mask-size: clamp(18px, 2vw, 25px) clamp(18px, 2vw, 25px);
    width: clamp(18px, 2vw, 25px);
    height: clamp(18px, 2vw, 25px);
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