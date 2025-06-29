<template>
  <div class="tub-country-container">
    <NuxtLink to="/countryArticle" style="text-decoration: none;">
      <div class="country-background">
        <div class="country-text">Страна</div>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
defineOptions({
  name: "tubCountry",
})
</script>
<style scoped>
.tub-country-container {
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.country-background {
  width: 100%;
  height: 100%;
  padding: 18px;
  border-radius: 34px;
  background: #D9D9D9;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  @media (min-width: 768px) {
    aspect-ratio: 502/354;
    min-height: 200px;
  }
  @media (max-width: 576px){
    border-radius: 6px;
    height: 115px;
  }
}

.country-text{
  font-family: Montserrat;
  font-weight: 700;
  font-size: clamp(18px, 3vw, 36px);
  line-height: 100%;
  text-align: center;
  vertical-align: middle;
  color: #1E1E1E;
  text-decoration: none;
  @media (max-width: 576px){
    font-size: 12px;
  }
}

.travel-background {
  width: 100%;
  height: 200px;
  padding: 18px 0;
  border-radius: 24px;
  display: flex;
  align-items: center;
}
</style>