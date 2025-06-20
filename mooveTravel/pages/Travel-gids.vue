<template>
  <div>
    <div class="travel-body container">
      <div class="travel-gid">
        <div class="travel-tittle">TRAVEL-ГИДЫ</div>
        <div class="travel-border"></div>
      </div>
      <div class="travel-text">Дополнительный текст<br/> в несколько строчек</div>
      <div class="travel-tittle" style="color: #C75454; margin-bottom: 80px">Лучшие предложения</div>
      <div class="travel-grid">
        <div v-for="a in 3" :key="a">
          <best-variant/>
        </div>
      </div>
      <div class="travel-tittle" style="color: #C75454; margin-bottom: 80px">Страны</div>
      <div class="travel-grid">
        <div v-for="a in 9" :key="a">
          <tub-country/>
        </div>
      </div>
      <popup-application/>
    </div>
  </div>
</template>

<script setup>
import BestVariant from '~/components/BestVariant.vue';
import TubCountry from '~/components/tubCountry.vue';
import PopupApplication from '~/components/popupApplication.vue';
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.travel-body {
  margin: 90px auto 180px;
}

.travel-tittle {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 84px;
  line-height: 120%;
}

.travel-border {
  border-bottom: 6px solid #C75454;
  width: 294px;
  margin: 16px 0 80px;
}

.travel-text {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 36px;
  line-height: 120%;
  vertical-align: middle;
  margin-bottom: 180px;
}

.travel-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 75px;
  margin: 80px auto 110px;
}

@media (max-width: 1200px) {
  .travel-tittle {
    font-size: 64px;
  }

  .travel-text {
    font-size: 28px;
  }

  .travel-grid {
    gap: 40px;
  }

  .travel-body {
    margin: 60px auto 120px;
  }
}

@media (max-width: 768px) {
  .travel-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .travel-tittle {
    font-size: 48px;
  }

  .travel-text {
    font-size: 24px;
  }

  .travel-border {
    width: 200px;
    margin: 12px 0 40px;
  }

  .travel-body {
    margin: 40px auto 80px;
  }
}
</style> 