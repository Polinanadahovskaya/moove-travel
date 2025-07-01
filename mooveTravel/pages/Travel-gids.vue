<template>
  <div>
    <div class="travel-body container">
      <div class="travel-gid">
        <h1 class="travel-tittle">TRAVEL-ГИДЫ</h1>
        <div class="travel-border"></div>
      </div>
      <div class="travel-text">Путеводители, которые сэкономят вам <br/> нервы, деньги и время</div>
      <h2 class="travel-tittle travel-country">Лучшие предложения</h2>
      <div class="travel-grid">
        <div v-for="a in 3" :key="a">
          <best-variant/>
        </div>
      </div>
      <h2 class="travel-country">Страны</h2>
      <div class="travel-grid gid-trav">
        <div v-for="a in countryCount" :key="a">
          <tub-country/>
        </div>
      </div>
      <popupTravelGid class="none-art"/>
      <popup-application class="none-desk"/>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import BestVariant from '~/components/BestVariant.vue';
import TubCountry from '~/components/tubCountry.vue';
import PopupTravelGid from '~/components/popupTravelGid.vue';
import PopupApplication from "~/components/PopupApplication";

const isMobile = ref(false);
const countryCount = ref(9);

function handleResize() {
  isMobile.value = window.innerWidth <= 576;
  countryCount.value = isMobile.value ? 6 : 9;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

defineOptions({
  name: 'Travel-Gids',
})
</script>

<style scoped>
.travel-country{
  color: #C75454;
  margin-bottom: 80px;
  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.travel-body {
  margin: 90px auto 180px;
}

.travel-border {
  border-bottom: 6px solid #C75454;
  width: 294px;
  margin: 16px 0 80px;
  @media (max-width: 576px) {
    width: 103px;
    border-width: 2px;
    margin: 7px 0 17px;
  }
}

.travel-text {
  font-weight: 400;
  font-size: 36px;
  line-height: 120%;
  vertical-align: middle;
  margin-bottom: 180px;
  @media (max-width: 576px) {
    font-size: 8px;
    margin-bottom: 40px;
  }
}

.travel-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 75px;
  margin: 80px auto 110px;
  @media (max-width: 1200px) {
    gap: 40px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 18px;
    margin: 17px auto 40px;
  }
}

.gid-trav{
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  margin: 0 auto 50px;
}

@media (max-width: 1200px) {
  .travel-body {
    margin: 60px auto 120px;
  }
}

@media (max-width: 768px) {
  .travel-body {
    margin: 20px auto 40px;
    padding: 0;
  }
}

@media (max-width: 576px) {
  .travel-border {
    width: 103px;
    border-width: 2px;
    margin: 7px 0 17px;
  }

  .travel-text {
    font-size: 8px;
    margin-bottom: 40px;
  }
}

.none-art{
  @media (max-width: 1200px) {
    display: none;
  }
}
.none-desk{
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
}
</style> 