<template>
  <div>
    <div>
      <div class="gid-header">
        <div class="gid_back" @click="router.back()">← Назад</div>
        <div class="gid_tittle">{{ country?.name || 'Страна' }}</div>
      </div>
      <div class="gid-tabs">
        <template v-if="currentGuides.length > 0">
          <div v-for="guid in currentGuides.slice(0, 3)">
            <gid-coutry-tab :guid="guid"/>
          </div>
        </template>
        <template v-else>
          <div class="no-guides-message">
            Путеводителей по этой стране пока нет, но мы обязательно подготовим для вас полезные советы и интересные маршруты!
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import gidCoutryTab from '~/components/gidCoutryTab.vue'
import { useRouter, useRoute, useHead } from '#app'
import { useTravelGuidesStore } from "~/src/store/travelGuides.js";
import { useCountriesStore } from '~/src/store/countries';
import { onMounted, computed } from 'vue'
import { useAsyncData } from 'nuxt/app'

const router = useRouter()
const route = useRoute()
const travelGuidesStore = useTravelGuidesStore()
const countriesStore = useCountriesStore()

const link = route.params.link

const currentGuides = computed(() => travelGuidesStore.getGuides)
const country = computed(() => countriesStore.getCurrentCountry)

useHead(() => ({
  title: country.value?.name ? `Гайды ${country.value.name} | Moov Travel` : `Гайды по ${link} | Moov Travel`,
  meta: [
    { name: 'description', content: `Все гиды и полезные советы по направлению ${country.value?.name || link} от Moov Travel.` },
    { property: 'og:title', content: country.value?.name ? `Гайды по ${country.value.name} | Moov Travel` : `Гайды по ${link} | Moov Travel` },
    { property: 'og:description', content: `Все гиды и полезные советы по направлению ${country.value?.name || link} от Moov Travel.` },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://moov-travel.ru/country-guide/${link}` },
  ],
  link: [
    { rel: 'canonical', href: `https://moov-travel.ru/country-guide/${link}` }
  ]
}))

await useAsyncData('countryGuides', () => travelGuidesStore.fetchGuidesByCountrySlug(link))
await useAsyncData('country', () => countriesStore.fetchCountryByLink(link))

</script>
<style scoped lang="scss">
.gid-header {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-left: 182px;
  padding-right: 182px;
  height: 245px;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  background: linear-gradient(273.87deg, #D27A00 3.64%, #F89C1D 76.11%);
@media (max-width: 1200px) {
  height: 182px;
}
@media (max-width: 768px) {
  height: 82px;
  padding: 20px 20px 30px;
}
}

.gid_tittle {
  font-weight: 700;
  font-size: 66px;
  line-height: 100%;
  color: white;
  display: flex;
  align-items: center;
  flex: 1;
  text-transform: uppercase;
@media (max-width: 1200px) {
  font-size: 38px;
}
@media (max-width: 768px) {
  font-size: 18px;
}
}

.gid_back {
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-top: 30px;
@media (max-width: 768px) {
  font-size: 12px;
  margin-top: 0;
}
}

.gid-tabs {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 70px auto 160px;
@media (max-width: 900px) {
  gap: 25px;
}
@media (max-width: 768px) {
  gap: 21px;
}
}
.no-guides-message {
  font-weight: bold;
  color: #C75454;
  text-align: center;
  margin-top: 10%;
  font-size: 20px;
}
</style>