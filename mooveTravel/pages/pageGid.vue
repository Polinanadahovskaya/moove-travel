<template>
  <div>
    <div>
      <div class="gid-header">
        <NuxtLink to="/Travel-gids" class="gid_back">Назад</NuxtLink>
        <div class="gid_tittle">ТЕМА</div>
      </div>
      <div class="gid-articles">
        <div class="article-information">
          <div class="article">
            <div class="article-tittle">Заголовок</div>
            <div class="article-text">Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
              Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
            </div>
          </div>
          <div class="article-elements">
          <div class="gid-country_price">
            <div class="old-price">{{ formatPrice(1990)}} ₽</div>
            <div class="fix-price">{{ formatPrice(1990)}} ₽</div>
          </div>
          <div class="article-button">Купить</div>
          </div>
        </div>
        <div class="article-img"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import gidCoutryTab from '~/components/gidCoutryTab.vue'
defineOptions({
  name: "CountryGid",
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
}

.gid_tittle{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 66px;
  line-height: 100%;
  color:white;
  display: flex;
  align-items: center;
  flex: 1;
}

.gid_back{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color:white;
  text-decoration: none;
  align-self: flex-end;
  cursor: pointer;
}

.gid-articles{
  margin: 90px auto 150px;
  display: flex;
  justify-content: space-between;
  gap: 84px;
}

.article-information{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article-tittle{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
}

.article{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.article-text{
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
}

.article-img{
  width: 555px;
  height: 789px;
  flex-shrink: 0;
  border-radius: 34px;
  background: #0070f3;
}

.gid-country_price {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: flex-end;
}

.old-price {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  vertical-align: middle;
  text-decoration: line-through;
  color: #CFCFCF;
}

.fix-price{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 64px;
  line-height: 100%;
  vertical-align: middle;
  color: #1E1E1E;
}

.article-elements{
  display: flex;
  justify-content: space-between;
}

.article-button {
  width: 422px;
  height: 134px;
  gap: 10px;
background: #C75454;
  border-radius: 24px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: white;
  display: flex
;
  align-items: center;
  justify-content: center;
}
</style>