<template>
  <div>
    <div>
      <div class="gid-header">
        <NuxtLink to="/Travel-gids" class="gid_back">← Назад</NuxtLink>
        <div class="gid_tittle">ТЕМА</div>
      </div>
      <div class="gid-articles">
        <div class="article-information">
          <div class="article">
            <div class="article-tittle">Заголовок</div>
            <div class="article-text">Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
              Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
            </div>
            <div class="article-img desctop-none"></div>
          </div>
          <div class="article-elements">
          <div class="gid-country_price">
            <div class="old-price">{{ formatPrice(1990)}} ₽</div>
            <div class="fix-price">{{ formatPrice(1990)}} ₽</div>
          </div>
          <div class="article-button">Купить</div>
          </div>
        </div>
        <div class="article-img mobile-none"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import gidCoutryTab from '~/components/gidCoutryTab.vue'
defineOptions({
  name: "pageGid",
})

const formatPrice = (price)=> {
  const roundedPrice = Math.round(price);
  return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
</script>
<style scoped>
.gid-header{
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-left: 182px;
  padding-right: 182px;
  height: 245px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(273.87deg, #D27A00 3.64%, #F89C1D 76.11%);
  @media (max-width: 768px) {
    height: 82px;
    padding: 20px 20px 30px;
    justify-content: flex-end;
  }
}

.gid_tittle{
  font-weight: 700;
  font-size: 66px;
  line-height: 100%;
  color:white;
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.gid_back{
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color:white;
  text-decoration: none;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.gid-articles{
  margin: 90px auto 150px;
  display: flex;
  justify-content: space-between;
  gap: 84px;
  @media (max-width: 576px) {
    margin: 40px auto;
    gap: 17px;
    flex-direction: column;
  }
}

.article-information{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-tittle{
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  @media (max-width: 576px) {
    font-size: 12px;
  }
}

.article{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.article-text{
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
  }
}

.article-img{
  width: 555px;
  height: 789px;
  flex-shrink: 0;
  border-radius: 34px;
  background: #0070f3;
  @media (min-width: 576px) and (max-width: 1400px) {
    margin: 40px auto;
  }
  @media (max-width: 1400px) {
    width: 100%;
    height: 600px;
    border-radius: 24px;
  }
  @media (max-width: 768px) {
    height: 400px;
  }
  @media (max-width: 576px) {
    height: 100px;
    border-radius: 6px;
  }
}

.gid-country_price {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: flex-end;
}

.old-price {
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  vertical-align: middle;
  text-decoration: line-through;
  color: #CFCFCF;
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
  }
}

.fix-price{
  font-weight: 700;
  font-size: 64px;
  line-height: 100%;
  vertical-align: middle;
  @media (max-width: 1600px) {
    font-size: 44px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
}

.article-elements{
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }
  @media (max-width: 576px) {
    margin-top: 40px;
  }
}

.article-button {
  width: 422px;
  height: 134px;
  gap: 10px;
  background: #C75454;
  border-radius: 24px;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1680px) {
    width: 50%;
    height: 100px;
  }
  @media (max-width: 1480px) {
    font-size: 28px;
  }
  @media (max-width: 576px) {
    width: 174px;
    height: 50px;
    border-radius: 6px;
    font-size: 12px;
  }
}

.mobile-none{
  @media (max-width: 1400px) {
    display: none;
  }
}
.desctop-none{
  @media (min-width: 1400px) {
    display: none;
  }
}
</style>