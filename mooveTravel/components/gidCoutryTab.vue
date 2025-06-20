<template>
  <div>
    <div class="gid-country_tub">
      <div class="gid-country_inf">
        <div class="gid-country_img"></div>
        <div class="gid-country_art">
          <div class="gid-country_tittle">Заголовок</div>
          <div class="gid-country_text">Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
            Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
            Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
          </div>
        </div>
      </div>
      <div class="gid-country_price">
        <div class="old-price">{{ formatPrice(1990)}} ₽</div>
        <div class="fix-price">{{ formatPrice(1990)}} ₽</div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: "gidCoutryTab"
})
const formatPrice = (price)=> {
  const roundedPrice = Math.round(price);
  return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
</script>
<style scoped>
.gid-country_tub {
  width: 100%;
  height: 381px;
  border-radius: 34px;
  box-shadow: 0px 0px 60px 0px #0000001A;
  background: #FFFFFF;
  display: flex;
  //gap: 141px;
  padding: 40px 45px;
  justify-content: space-between;
}

.gid-country_art {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.gid-country_tittle {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
}

.gid-country_text {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.gid-country_inf {
  display: flex;
  gap: 37px;
}

.gid-country_img {
  width: 290px;
  height: 301px;
  border-radius: 24px;
  background: #D9D9D9;
  flex-shrink: 0;
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
</style>