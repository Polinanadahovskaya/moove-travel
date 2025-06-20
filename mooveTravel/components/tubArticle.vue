<template>
  <div>
    <div class="article-tab">
      <div class="article-information">
        <div class="article-inf">
          <div class="article-profile-img"></div>
          <div class="article-profile-name">Имя Фамилия</div>
          <div class="article-profile-date">Дата</div>
        </div>
        <div class="article-text">Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи... Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи Краткий текст статьи...</div>
      <div class="article-filters">
        <div v-for="a in 3" :key="a">
          <div class="article-filter">Фильтр</div>
        </div>
      </div>
      </div>
      <div class="article-img"></div>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: 'tubArticle',
})
</script>
<style scoped>
.article-tab{
  width: 100%;
  height: 365px;
  border-radius: 28px;
  box-shadow: 0px 0px 60px 0px #0000001A;
  background: #FFFFFF;
  display: flex;
  gap: 41px;
  padding: 20px 30px;
}

.article-img {
  width: 307px;
  height: 309px;
  border-radius: 24px;
  background: #D9D9D9;
  flex-shrink: 0;
  object-fit: cover;
  display: flex;
  align-self: center;
}

.article-information {
  display: flex;
  flex-direction: column;
  gap: 41px;
}

.article-inf {
  display: flex;
  align-items: center;
}

.article-profile-img {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  background: #D9D9D9;
}

.article-profile-name {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  vertical-align: middle;
  margin-left: 23px;
}

.article-profile-date {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  vertical-align: middle;
  color: #929292;
}

.article-text {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-filter{
  max-width: 170px;
  width: fit-content;
  height: 39px;
  padding: 5px 30px;
  border-radius: 5px;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  background: #D9D9D9;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.article-filters{
  display: flex;
  gap: 10px;
}

@media (max-width: 768px) {
  .article-tab {
    flex-direction: column;
    height: auto;
    padding: 15px 20px;
    gap: 20px;
  }
  
  .article-img {
    width: 100%;
    height: 200px;
  }
  
  .article-information {
    gap: 20px;
  }
  
  .article-text {
    font-size: 18px;
  }
  
  .article-profile-name,
  .article-profile-date {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .article-tab {
    padding: 10px 15px;
    gap: 15px;
  }
  
  .article-img {
    height: 150px;
  }
  
  .article-text {
    font-size: 16px;
  }
  
  .article-profile-name,
  .article-profile-date {
    font-size: 16px;
  }
}
</style>