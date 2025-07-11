<template>
  <div class="blog-page">
    <div class="blog-tittle-header">
      <h1 class="blog-tittle">Блог</h1>
      <div class="blog-border"></div>
    </div>
    <div class="blog-text">{{blogData?.description}}
    </div>
    <div class="blog-grid">
      <div v-for="arr in popularCountry" :key="arr?.id" class="blog-item" @click="goToArticleCountry(arr?.link)">
        <tub-country :country="arr"/>
      </div>
    </div>
    <div class="blog-border line"></div>
    <div class="all-article">
      <h2 class="article-tittle">Все статьи</h2>
      <div class="tab-art">
        <div class="article-tab-first">
          <div v-if="!isMobile" class="article-search">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Поиск"
              class="search-input"
            />
          </div>
          <div class="article-article">
            <div v-for="(art, idx) in filteredArticles.slice(0,3)" :key="art.link" @click="goToArticle(art.link)">
              <tub-article :article="art"/>
            </div>
          </div>
        </div>
        <div class="article-filter-body">
          <div v-if="isMobile" class="article-search">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Поиск"
              class="search-input"
            />
          </div>
          <div class="article-filter">
            <div class="filter-section">
              <div class="filter-name">По странам</div>
              <div class="filter-list">
                <div v-for="filter in countryFilters" :key="filter" class="filter-element" :class="{ selected: selectedCountry.includes(filter) }" @click="selectCountry(filter)">{{ filter }}</div>
              </div>
            </div>
            <div class="filter-section">
              <div class="filter-name">По типам отдыха</div>
              <div class="filter-list">
                <div v-for="filter in typeFilters" :key="filter" class="filter-element" :class="{ selected: selectedType.includes(filter) }" @click="selectType(filter)">{{ filter }}</div>
              </div>
            </div>
            <div class="filter-section">
              <div class="filter-name">Автор</div>
              <div class="filter-list">
                <div v-for="filter in authorFilters" :key="filter" class="filter-element" :class="{ selected: selectedAuthor.includes(filter) }" @click="selectAuthor(filter)">{{ filter }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <popup-application/>
  </div>
</template>

<script setup>
import TubCountry from '../components/tubCountry.vue'
import {computed, onMounted, ref} from 'vue'
import { useCountriesStore } from '../src/store/countries'
import { usePagesStore } from '../src/store/pages'
import { useArticlesStore } from '../src/store/articles'
import { useUsersStore } from '../src/store/users'
import { useRouter } from 'vue-router'
import tubArticle from '~/components/tubArticle.vue'

const countriesStore = useCountriesStore()
const pagesStore = usePagesStore()
const articlesStore = useArticlesStore()
const usersStore = useUsersStore()
const router = useRouter()

const searchQuery = ref('')

const articles = computed(() => articlesStore.getArticles)
const links = ['turkey', 'second', 'third']

function goToArticle(link) {
  router.push(`/article/${link}`)
}

function goToArticleCountry(link) {
  router.push(`/countryArticle/${link}`)
}
const countryFilters = Array.from({length: 6}, () => 'Фильтр')
const typeFilters = computed(() => articlesStore.getArticleTags.map(tag => tag?.name || ''))
const authorFilters = Array.from({length: 4}, () => 'Фильтр')

const popularCountry = computed(() => countriesStore.getCountries)

const selectedCountry = ref([])
const selectedType = ref([])
const selectedAuthor = ref([])

function selectCountry(filter) {
  const idx = selectedCountry.value.indexOf(filter)
  if (idx === -1) selectedCountry.value.push(filter)
  else selectedCountry.value.splice(idx, 1)
}
function selectType(filter) {
  const idx = selectedType.value.indexOf(filter)
  if (idx === -1) selectedType.value.push(filter)
  else selectedType.value.splice(idx, 1)
}
function selectAuthor(filter) {
  const idx = selectedAuthor.value.indexOf(filter)
  if (idx === -1) selectedAuthor.value.push(filter)
  else selectedAuthor.value.splice(idx, 1)
}

const filteredArticles = computed(() => {
  return articles.value.filter(art => {
    let match = true

    if (searchQuery.value.trim()) {
      const title = art.title?.toLowerCase() || ''
      const query = searchQuery.value.toLowerCase()
      if (!title.includes(query)) {
        match = false
      }
    }

    if (selectedCountry.value.length && !selectedCountry.value.includes(art.country)) match = false

    if (
      selectedType.value.length &&
      !(art.article_tags || []).some(tag => selectedType.value.includes(tag?.name))
    ) match = false

    if (selectedAuthor.value.length && !selectedAuthor.value.includes(art.author)) match = false
    
    return match
  })
})

const windowWidth = ref(0)

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }
}

const isMobile = computed(() => {

  if (typeof window === 'undefined') {
    return false
  }
  return windowWidth.value <= 576 && windowWidth.value > 0
})

const blogData = computed(() => pagesStore.getBlogPage)

onMounted(() => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }

  updateWindowWidth()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowWidth)
  }
  pagesStore.fetchBlogPage()
  countriesStore.fetchCountries()
  articlesStore.fetchArticles()
  articlesStore.fetchArticleTags()
  usersStore.fetchUsers()

})
</script>

<style scoped>
.blog-tittle-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 90px;
  @media (max-width: 576px) {
    margin-top: 17px;
    gap: 7px;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    margin-top: 40px;
    gap: 10px;
  }
}

.tab-art {
  display: flex;
  gap: 45px;
  @media (max-width: 576px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    flex-direction: column-reverse;
    gap: 30px;
    width: 100%;
  }
}

.article-tab-first {
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-basis: 70%;
    max-width: 70%;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
}

.blog-border {
  border-bottom: 6px solid #C75454;
  width: 294px;
  @media (max-width: 576px) {
    width: 103px;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    width: 180px;
  }
}

.line {
  width: 709px;
  margin: 40px 0;
  display: flex;
  justify-self: end;
  @media (max-width: 576px) {
    display: none;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    width: 350px;
    margin: 25px 0;
  }
}

.blog-text {
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  color: #1E1E1E;
  vertical-align: middle;
  margin: 80px 0;
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 40px 0;
  }
  @media (max-width: 576px) {
    font-size: 8px;
    margin: 17px 0 40px;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    font-size: 18px;
    margin: 30px 0;
  }
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);;
  gap: 30px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 20px;
  }
  @media (max-width: 576px) {
    gap: 8px;
    padding: 0;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
    width: 100%;
    padding: 0 10px;
  }
}

.blog-item {
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    min-height: 200px;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    min-height: 120px;
  }
}

.all-article {
  margin: 110px auto 180px;
  @media (max-width: 576px) {
    margin: 40px auto;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    margin: 60px auto 80px;
    max-width: 900px;
    padding: 0 10px;
  }
}

.article-tittle {
  color: #C75454;
  margin-bottom: 80px;
  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    margin-bottom: 30px;
    font-size: 22px;
  }
}

.article-article {
  display: flex;
  flex-direction: column;
  gap: 28px;
  @media (min-width: 577px) and (max-width: 1450px) {
    gap: 16px;
    width: 100%;
  }
}

.article-search {
  border-bottom: 3px dashed #C3C3C3;
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 24px;
  @media (max-width: 576px) {
    margin-bottom: 0;
    border-bottom: none;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    margin-bottom: 10px;

  }
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #C3C3C3;
  border-radius: 5px;
  font-size: 16px;
  line-height: 100%;
  color: #1E1E1E;
  background: #FFFFFF;
  outline: none;
  transition: border-color 0.3s ease;
  
  &::placeholder {
    color: #C3C3C3;
    font-weight: 500;
  }
  
  &:focus {
    border-color: #C75454;
  }
  
  @media (max-width: 576px) {
    height: 23px;
    padding: 4px 5px;
    border-radius: 6px;
    border: 1px solid #D9D9D9A6;
    font-size: 8px;
    background: #FFFFFF;
  }
  
  @media (min-width: 577px) and (max-width: 1450px) {
    font-size: 14px;
  }
}

.search-input {
  width: 100%;
  padding: 5px 10px;
  border:none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #C3C3C3;
  background: #FFFFFF;
  @media (max-width: 576px) {
    height: 23px;
    padding: 4px 5px;
    border-radius: 6px;
    border: 1px solid #D9D9D9A6;
    font-size: 8px;
    margin-bottom: 0;
    background: #FFFFFF;
    display: flex;
    align-items: center;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
}

.article-filter {
  border-radius: 30px;
  padding: 40px;
  @media (min-width: 768px) {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  @media (max-width: 576px) {
    padding: 13px 9px;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    padding: 18px 10px;
    gap: 18px;
    width: 100%;
  }
}

.article-filter-body {
  background: #EBEBEB;
  border-radius: 30px;
  @media (max-width: 576px) {
    border-radius: 6px;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    border-radius: 12px;
    width: 100%;
    margin-top: 10px;
  }
}

.filter-name {
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  vertical-align: middle;
  @media (max-width: 576px) {
    font-size: 12px;
    width: 20%;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    font-size: 16px;
    width: 30%;
  }
}

.filter-element {
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 30px;
  border: 1px solid #D9D9D9;
  background: #FFFFFF;
  @media (min-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 576px) {
    padding: 2px 10px;
    font-size: 8px;
    height: 14px;
    border-radius: 2px;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    padding: 2px 12px;
    font-size: 12px;
    height: 22px;
    border-radius: 3px;
  }
}

.filter-element.selected {
  background: #C75454;
  color: #fff;
  border-color: #C75454;
}

.filter-section {
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    gap: 20px;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 101%;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    width: 100%;
  }
}

.filter-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  @media (max-width: 576px) {
    flex-direction: row;
    width: 70%;
  }
  @media (min-width: 577px) and (max-width: 1450px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    width: 70%;
  }
}

.blog-page {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: 577px) and (max-width: 1450px) {
    max-width: 900px;
    padding: 0 10px;
  }
}
</style> 