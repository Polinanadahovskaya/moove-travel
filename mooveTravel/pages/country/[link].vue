<template>
  <div>
    <div class="country-block">
      <div class="back-country">
        <div class="header-content">
          <h1>{{ country?.name || '...' }}</h1>
          <button class="back-btn" @click="router.back()">← Назад</button>
        </div>
      </div>
      <div v-for="art in articles" @click="goToArticle(art.link)">
        <tub-article
            :article="art"
        />
      </div>
      <div v-if="!articles.length" class="no-articles-message">
        Похоже, для этой страны пока нет статей. Мы уже работаем над тем, чтобы поделиться с вами интересной информацией и советами по путешествиям!
      </div>
    </div>
  </div>
</template>
<script setup>
import TubArticle from "~/components/tubArticle.vue";
import { useArticlesStore } from '~/src/store/articles'
import { useCountriesStore } from '~/src/store/countries'
import { computed } from 'vue'
import { useRoute, useRouter, useHead, useNuxtApp } from '#app'
import { useAsyncData } from 'nuxt/app'

const { $getImageUrl } = useNuxtApp()
const articlesStore = useArticlesStore()
const countriesStore = useCountriesStore()
const route = useRoute()
const router = useRouter()

const countryLink = computed(() => route.params.link)
const articles = computed(() => articlesStore.getArticles)
const country = computed(() => countriesStore.getCurrentCountry)

useHead(() => ({
  title: country.value?.name ? `Туры в ${country.value.name} | Moov Travel` : 'Направления | Moov Travel',
  meta: [
    { name: 'description', content: country.value?.description || `Лучшие туры и предложения по направлению. Узнайте больше о путешествиях с Moov Travel.` },
    { property: 'og:title', content: country.value?.name ? `Туры в ${country.value.name} | Moov Travel` : 'Направления | Moov Travel' },
    { property: 'og:description', content: country.value?.description || `Лучшие туры и предложения по направлению. Узнайте больше о путешествиях с Moov Travel.` },
    { property: 'og:image', content: $getImageUrl(country.value?.mainPhoto?.url) },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://moov-travel.ru/country/${countryLink.value}` },
  ],
  link: [
    { rel: 'canonical', href: `https://moov-travel.ru/country/${countryLink.value}` }
  ]
}))

function goToArticle(link) {
  router.push({ path: `/article/${link}` })
}
await countriesStore.fetchCountryByLink(countryLink.value)
await articlesStore.fetchArticlesByCountryLink(countryLink.value)
// await useAsyncData('country', () => countriesStore.fetchCountryByLink(countryLink.value))
// await useAsyncData('countryArticles', () => articlesStore.fetchArticlesByCountryLink(countryLink.value))

</script>
<style scoped>
.country-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 81px;
}

.back-country {
  background: linear-gradient(90deg, #FFB651 0%, #FFC472 25%, rgba(255, 196, 114, 0) 70%),
  url("/src/assets/images/countryArticle.jpg");
  background-size: 100% 100%, cover;
  background-repeat: no-repeat;
  background-position: 0 0, center;
  background-blend-mode: normal;
  height: 420px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  @media (max-width: 1650px) {
    background-position-y: -237px;
  }
  @media (max-width: 1900px) {
    background-size: 100% 160%, cover;
  }
  @media (min-width: 768px) {
    margin-bottom: -10%;
  }
  @media (min-width: 900px) {
    margin-bottom: -17%;
  }
  @media (min-width: 1200px) {
    margin-bottom: -12%;
  }
  @media (min-width: 1700px) {
    margin-bottom: -10%;
  }
  @media (min-width: 2000px) {
    margin-bottom: -7%;
  }
  @media (max-width: 900px) {
    height: 50vh;
  }
  @media (max-width: 768px) {
    height: 82px;
    background-size: cover;
    width: 100vw;
    position: relative;
    margin-left: -20px;
    margin-right: 0;
    left: unset;
    right: unset;
    background-position-y: center;
    box-sizing: border-box;
  }
}

.back-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;
  text-shadow: 0 2px 8px #0006;
  position: relative;
  right: 10%;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 0;
    right: 0;
    padding: 4px 8px;
  }
}

.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding: 40px 48px 0 48px;
  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 12px 16px 0 16px;
    gap: 8px;
  }
}

.header-content h1 {
  @media (min-width: 768px) {
    font-size: 64px;
    font-weight: bold;
    color: #222;
    margin: 0;
    left: 7.4%;
    position: relative;
    bottom: -38%;
  }
  @media (max-width: 576px) {
    font-size: 22px;
    bottom: 0;
    left: 0;
    margin-bottom: 4px;
    align-self: center;
  }
}

.tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}
.tab {
  padding: 8px 16px;
  border-radius: 8px;
  background: #eee;
  cursor: pointer;
  transition: background 0.2s;
}
.tab.active {
  background: #ffc472;
  font-weight: bold;
}
.no-articles-message {
  font-weight: bold;
  color: #C75454;
  text-align: center;
  margin-top: 10%;
  font-size: 20px;
}
</style>