<template>
  <div>
    <div class="country-block">
      <div class="back-country">
        <div class="header-content">
          <h1>ЕГИПЕТ</h1>
          <button class="back-btn" @click="router.back()">← Назад</button>
        </div>
      </div>
      <div v-for="a in 3" :key="a">
        <tub-article/>
      </div>
    </div>
  </div>
</template>
<script setup>
import TubArticle from "~/components/tubArticle.vue";
import {useRouter} from '#app'

defineOptions({
  name: 'CountryArticle',
})
const router = useRouter()
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
  margin-bottom: -10%;
  @media (max-width: 1650px) {
    background-position-y: -237px;
  }
  @media (max-width: 1900px) {
    background-size: 100% 160%, cover;
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
}

.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  padding: 40px 48px 0 48px;
}

.header-content h1 {
  font-size: 64px;
  font-weight: bold;
  color: #222;
  margin: 0;
  left: 7.4%;
  position: relative;
  bottom: -38%;
}
</style>