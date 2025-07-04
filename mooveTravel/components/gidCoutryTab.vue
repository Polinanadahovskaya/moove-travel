<template>
  <div>
    <div class="gid-country_tub">
      <div class="gid-country_inf">
        <div class="gid-country_img mobile-none"></div>
        <div class="gid-country_art">
          <div class="gid-header-mobile">
            <div class="gid-country_tittle">Заголовок</div>
            <div class="gid-country_price desc-none">
              <div class="old-price">{{ formatPrice(1990) }} ₽</div>
              <div class="fix-price">{{ formatPrice(1990) }} ₽</div>
            </div>
          </div>
          <div class="gid-country_text">Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
            Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
            Описание гайда Описание гайда Описание гайда Описание гайда Описание гайда
          </div>
        </div>
        <div class="gid-country_img desc-none"></div>
      </div>
      <div class="gid-country_price mobile-none">
        <div class="old-price">{{ formatPrice(1990) }} ₽</div>
        <div class="fix-price">{{ formatPrice(1990) }} ₽</div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: "gidCoutryTab"
})
const formatPrice = (price) => {
  const roundedPrice = Math.round(price);
  return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
</script>
<style scoped lang="scss">
.gid-country_tub {
  width: 100%;
  height: 381px;
  border-radius: 34px;
  box-shadow: 0 0 60px 0 #0000001A;
  background: #FFFFFF;
  display: flex;
  padding: 40px 45px;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: 100%;
  }
  @media (max-width: 900px) {
    padding: 30px 20px 30px;
    border-radius: 9px;
  }
  @media (max-width: 576px) {
    padding: 25px 10px 10px;
    border-radius: 6px;
  }
}

.gid-country_art {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.gid-country_tittle {
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 900px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
}

.gid-country_text {
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
  }
}

.gid-country_inf {
  display: flex;
  gap: 37px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
}

.gid-country_img {
  width: 290px;
  height: 301px;
  border-radius: 24px;
  background: #D9D9D9;
  flex-shrink: 0;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    height: 250px;
    border-radius: 20px;
  }
  @media (max-width: 900px) {
    height: 200px;
    border-radius: 14px;
  }
  @media (max-width: 768px) {
    height: 150px;
    border-radius: 9px;
  }
  @media (max-width: 576px) {
    height: 80px;
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
  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
  }
}

.fix-price {
  font-weight: 700;
  font-size: 64px;
  line-height: 100%;
  vertical-align: middle;
  @media (max-width: 1600px) {
    font-size: 44px;
  }
  @media (max-width: 1200px) {
    font-size: 36px;
  }
  @media (max-width: 900px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
}


.gid-header-mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-none {
  @media (max-width: 1200px) {
    display: none;
  }
}

.desc-none {
  @media (min-width: 1200px) {
    display: none;
  }
}
</style>