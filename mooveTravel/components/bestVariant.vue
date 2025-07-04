<template>
  <div>
    <div class="variant-body">
      <div>
        <div class="variant-tittle">Название</div>
        <div class="variant-text">Описание</div>
      </div>
      <NuxtLink to="/pageGid" style="text-decoration: none; color: #1E1E1E">
        <div class="variant-price">{{ formatPrice(1990) }} ₽</div>
        <div class="variant-button">Купить</div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: 'bestVariant',
})
const formatPrice = (price) => {
  const roundedPrice = Math.round(price);
  return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
</script>
<style scoped>
.variant-body {
  width: 100%;
  height: 789px;
  border-radius: 34px;
  background-color: #D9D9D9;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 576px) {
    height: 160px;
    border-radius: 6px;
    padding: 12px 13px 7px;
  }
}

.variant-tittle {
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  vertical-align: middle;
  margin-bottom: 18px;
  @media (max-width: 576px) {
    font-size: 12px;
    margin-bottom: 10px;
  }
}

.variant-text {
  font-weight: 400;
  font-size: 30px;
  line-height: 120%;
  vertical-align: middle;
  @media (max-width: 576px) {
    font-size: 8px;
  }
}

.variant-price {
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  vertical-align: middle;
  margin-bottom: 21px;
  @media (max-width: 576px) {
    font-size: 12px;
    margin-bottom: 9px;
  }
}

.variant-button {
  width: 100%;
  padding: 30px;
  border-radius: 24px;
  font-weight: 700;
  font-size: 36px;
  line-height: 120%;
  background: #F89C1D;
  text-align: center;
  cursor: pointer;
  @media (max-width: 576px) {
    font-size: 12px;
    border-radius: 6px;
    height: 37px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>