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
  @media (max-width: 1650px) {
    background-position-y: -237px;
  }
  @media (max-width: 1900px) {
    background-size: 100% 160%, cover;
  }
  @media (min-width: 768px) {
    margin-bottom: -10%;
  }
  @media (max-width: 576px) {
    height: 82px;
    background-size: cover;
    width: 100%;
    position: static;
    margin-left: 0;
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
  @media (max-width: 576px) {
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
  @media (max-width: 576px) {
    flex-direction: column;
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
  }
}
</style>