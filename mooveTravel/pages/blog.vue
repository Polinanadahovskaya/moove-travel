<template>
  <div class="blog-page">
    <div class="blog-tittle-header">
      <div class="blog-tittle">Блог</div>
      <div class="blog-border"></div>
    </div>
    <div class="blog-text">Дополнительный текст<br/> в несколько строчек</div>
    <div class="blog-grid">
      <div v-for="a in 6" :key="a" class="blog-item">
        <tub-country/>
      </div>
    </div>
    <div class="blog-border line"></div>
    <div class="blog-button">Показать больше</div>
  </div>
</template>

<script setup>
import TubCountry from '../components/tubCountry.vue'
</script>

<style scoped>
.blog-tittle-header{
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 90px;
}
.blog-tittle{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 84px;
  line-height: 100%;
}

.blog-border{
  border-bottom: 6px solid #C75454;
  width: 294px;
}

.line {
  width: 709px;
  margin: 40px 0;
  display: flex;
  justify-self: end;
}

.blog-text {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  color: #1E1E1E;
  vertical-align: middle;
  margin: 80px 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);;
  gap: 30px;
  margin-top: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.blog-item {
  display: flex;
  justify-content: center;
  min-height: 200px;
}

.blog-button {
  width: 502px;
  height: 134px;
  gap: 10px;
  border-width: 6px;
  padding-top: 48px;
  padding-right: 126px;
  padding-bottom: 48px;
  padding-left: 126px;
  border-radius: 24px;
  border: 6px solid#C75454;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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