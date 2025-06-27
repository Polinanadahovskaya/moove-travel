<template>
  <div class="blog-page">
    <div class="blog-tittle-header">
      <h1 class="blog-tittle">Блог</h1>
      <div class="blog-border"></div>
    </div>
    <div class="blog-text">Пишем о путешествиях, в которых сами были,<br/>
      делимся личным опытом, полезными советами<br/>
      и маршрутами, которые действительно работают</div>
    <div class="blog-grid">
      <div v-for="a in 6" :key="a" class="blog-item">
        <tub-country/>
      </div>
    </div>
    <div class="blog-border line"></div>
    <div class="all-article">
      <h2 class="article-tittle">Все статьи</h2>
      <div style="display: flex;     gap: 45px;">
        <div style="display: flex; flex-direction: column; flex-basis: 70%; max-width: 70%;">
          <div class="article-search">Поиск</div>
          <div class="article-article">
            <div v-for="a in 3">
              <tub-article/>
            </div>
          </div>
        </div>
        <div class="article-filter" style="flex-basis: 30%; max-width: 30%;">
          <div>
            <div class="filter-name">По странам</div>
            <div v-for="pair in filterPairs" :key="pair[0]"
                 style="display: flex; justify-content: space-between; gap: 20px; margin-bottom: 10px;">
              <div v-for="filter in pair" :key="filter" class="filter-element">{{ filter }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <popup-application />
  </div>
</template>

<script setup>
import TubCountry from '../components/tubCountry.vue'
import {computed} from 'vue'

const filters = Array.from({length: 20}, (_, i) => `Фильтр ${i + 1}`)

const filterPairs = computed(() => {
  const pairs = []
  for (let i = 0; i < filters.length; i += 2) {
    pairs.push(filters.slice(i, i + 2))
  }
  return pairs
})
</script>

<style scoped>
.blog-page{
  position: relative;
}

.blog-tittle-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 90px;
}

.blog-tittle {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 84px;
  line-height: 100%;
}

.blog-border {
  border-bottom: 6px solid #C75454;
  width: 294px;
}

.line {
  width: 709px;
  margin: 40px 0;
  display: flex;
  justify-self: end;
  right: -177px;
  position: absolute;
}

.blog-text {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  color: #1E1E1E;
  vertical-align: middle;
  margin: 80px 0;

  @media (max-width: 1650px) {
    font-size: 20px;
  }
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);;
  gap: 30px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}

.blog-item {
  display: flex;
  justify-content: center;
  min-height: 200px;
}

.all-article {
  margin: 110px auto 180px;
}

.article-tittle {
  color: #C75454;
  margin-bottom: 80px;
}

.article-article {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.article-search {
  border-bottom: 3px dashed #C3C3C3;
  margin-bottom: 32px;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #C3C3C3;
}

.article-filter {
  background: #EBEBEB;
  border-radius: 30px;
  padding: 40px;
}

.filter-name {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  vertical-align: middle;
  margin-bottom: 30px;
}

.filter-element {
  height: 39px;
  border-radius: 5px;
  border: 1px solid #D9D9D9;
  background: #FFFFFF;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .blog-tittle {
    font-size: 48px;
  }

  .blog-text {
    font-size: 24px;
    margin: 40px 0;
  }

  .blog-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .blog-tittle {
    font-size: 36px;
  }

  .blog-text {
    font-size: 20px;
    margin: 30px 0;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style> 