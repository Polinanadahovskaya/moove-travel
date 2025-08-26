<template>
  <div>
    <div class="travel-body container">
      <div class="travel-gid">
        <h1 class="travel-tittle">TRAVEL-ГИДЫ</h1>
        <div class="travel-border"></div>
      </div>
      <div class="travel-text">{{guidePage?.description}}</div>
      <h2 class="travel-tittle travel-country">Лучшие предложения</h2>
      <div class="travel-grid">
        <div v-for="arr in guidePage?.bestGuides" :key="arr?.id">
          <best-variant :info="arr?.travel_guide"/>
        </div>
      </div>
      <h2 class="travel-country">Страны</h2>
      <div class="travel-grid gid-trav">
        <div v-for="arr in popularCountry.slice(0, 9)" :key="arr?.id" @click="goToCountryGid(arr?.link)">
          <tub-country :country="arr" id="gid"/>
        </div>
      </div>
      <popupTravelGid class="none-art"/>
      <popup-application class="none-desk"/>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted, computed} from 'vue';
import bestVariant from "~/components/bestVariant.vue";
import tubCountry from "~/components/tubCountry.vue";
import PopupTravelGid from '~/components/popupTravelGid.vue';
import PopupApplication from "~/components/popupApplication.vue";
import { storeToRefs } from 'pinia'
import { usePagesStore } from '@/src/store/pages'
import { useCountriesStore } from '../src/store/countries'
import {useRouter} from "#app";
import { useHead } from '#imports'

const router = useRouter()
const countriesStore = useCountriesStore()
const pagesStore = usePagesStore()
const { guidePage, loading, error } = storeToRefs(pagesStore)

const isMobile = ref(false);
const isTablet = ref(false);
const countryCount = ref(9);

// SEO-friendly загрузка данных на сервере
await useAsyncData('countries', () => countriesStore.fetchCountries())
await useAsyncData('guidePage', () => pagesStore.fetchGuidePage())

function handleResize() {
  isMobile.value = window.innerWidth <= 576;
  isTablet.value = window.innerWidth > 576 && window.innerWidth <= 1200;
  countryCount.value = isMobile.value || isTablet.value ? 6 : 9;
}

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const popularCountry = computed(() => countriesStore.getCountries)

function goToCountryGid(link) {
  router.push(`/country-guide/${link}`)
}
defineOptions({
  name: 'Travel-Gids',
})

useHead({
  title: 'Travel-гиды | Moov Travel',
  meta: [
    { name: 'description', content: 'Полезные travel-гиды по разным странам от команды Moov Travel.' },
    { property: 'og:title', content: 'Travel-гиды | Moov Travel' },
    { property: 'og:description', content: 'Полезные travel-гиды по разным странам от команды Moov Travel.' },
    { property: 'og:image', content: '/src/assets/images/logoMoov.svg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://moov-travel.ru/Travel-gids' },
  ],
  link: [
    { rel: 'canonical', href: 'https://moov-travel.ru/Travel-gids' }
  ]
})

</script>

<style scoped>
.travel-tittle {
  text-transform: uppercase;
}
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
  @media (max-width: 1700px) and (min-width: 900px) {
    margin: 16px 0 60px;
  }
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
  width: 90%;
  @media (max-width: 1700px) and (min-width: 900px) {
    margin-bottom: 60px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
    margin-bottom: 40px;
    width: 70%;
  }
}

.travel-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 75px;
  margin: 80px auto 110px;
  @media (max-width: 1650px) {
    gap: 20px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (max-width: 768px) {
    gap: 30px;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 18px;
    margin: 17px auto 40px;
  }
}

.gid-trav{
  @media (max-width: 1200px) {
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
  margin-top: 80px;
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