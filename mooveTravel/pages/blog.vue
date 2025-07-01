<template>
  <div class="blog-page">
    <div class="blog-tittle-header">
      <h1 class="blog-tittle">Блог</h1>
      <div class="blog-border"></div>
    </div>
    <div class="blog-text">Пишем о путешествиях, в которых сами были,<br/>
      делимся личным опытом, полезными советами<br/>
      и маршрутами, которые действительно работают
    </div>
    <div class="blog-grid">
      <div v-for="a in 6" :key="a" class="blog-item">
        <tub-country/>
      </div>
    </div>
    <div class="blog-border line"></div>
    <div class="all-article">
      <h2 class="article-tittle">Все статьи</h2>
      <div class="tab-art">
        <div class="article-tab-first">
          <div v-if="!isMobile" class="article-search">Поиск</div>
          <div class="article-article">
            <div v-for="a in 3">
              <tub-article/>
            </div>
          </div>
        </div>
        <div class="article-filter-body">
          <div v-if="isMobile" class="article-search">Поиск</div>
          <div class="article-filter">
            <div class="filter-section">
              <div class="filter-name">По странам</div>
              <div class="filter-list">
                <div v-for="filter in countryFilters" :key="filter" class="filter-element">{{ filter }}</div>
              </div>
            </div>
            <div class="filter-section">
              <div class="filter-name">По типам отдыха</div>
              <div class="filter-list">
                <div v-for="filter in typeFilters" :key="filter" class="filter-element">{{ filter }}</div>
              </div>
            </div>
            <div class="filter-section">
              <div class="filter-name">Автор</div>
              <div class="filter-list">
                <div v-for="filter in authorFilters" :key="filter" class="filter-element">{{ filter }}</div>
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

const filters = Array.from({length: 10}, (_, i) => `Фильтр ${i + 1}`)

const filterPairs = computed(() => {
  const pairs = []
  for (let i = 0; i < filters.length; i += 2) {
    pairs.push(filters.slice(i, i + 2))
  }
  return pairs
})

const countryFilters = Array.from({length: 6}, () => 'Фильтр')
const typeFilters = Array.from({length: 6}, () => 'Фильтр')
const authorFilters = Array.from({length: 4}, () => 'Фильтр')


const windowWidth = ref(0)

const updateWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
    console.log('Window width:', windowWidth.value, 'isMobile:', isMobile.value)
  }
}

const isMobile = computed(() => {

  if (typeof window === 'undefined') {
    return false
  }
  return windowWidth.value <= 576 && windowWidth.value > 0
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
  }

  updateWindowWidth()
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowWidth)
  }
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
}

.tab-art {
  display: flex;
  gap: 45px;
  @media (max-width: 576px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
}

.article-tab-first {
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-basis: 70%;
    max-width: 70%;
  }
}

.blog-border {
  border-bottom: 6px solid #C75454;
  width: 294px;
  @media (max-width: 576px) {
    width: 103px;
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
}

.blog-item {
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    min-height: 200px;
  }
}


.all-article {
  margin: 110px auto 180px;
  @media (max-width: 576px) {
    margin: 40px auto;
  }
}

.article-tittle {
  color: #C75454;
  margin-bottom: 80px;
  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
}

.article-article {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.article-search {
  border-bottom: 3px dashed #C3C3C3;
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #C3C3C3;
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
}

.article-filter-body {
  background: #EBEBEB;
  border-radius: 30px;
  @media (max-width: 576px) {
    border-radius: 6px;
  }
}

.one-filter {
  @media (max-width: 576px) {
    display: flex;
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
}

.filter-element {
  height: 39px;
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
}
</style> 