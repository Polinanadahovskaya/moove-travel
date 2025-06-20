<template>
  <div>
    <div>
      <div class="about-baner">
        <div class="about-tittle" style="color: white">МЫ КРУТЫЕ! (НАПРИМЕР)</div>
        <div class="about-border"></div>
        <div class="about-points">
          <div v-for="a in 3">
            <div style="display: flex;     align-items: center;">
              <div class="point-number"> 1</div>
              <div class="point-text">Дополнительный текст в несколько строчек</div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-office">
        <div class="about-tittle">НАШ ОФИС</div>
        <div class="about-border"></div>
        <div class="blog-grid">
          <div v-for="a in 2">
            <tub-office/>
          </div>
        </div>
        <div class="about-location">
          <div class="contacts">
            <div class="location">Расположение</div>
            <div class="location-text">Дополнительный текст
              в несколько строчек
            </div>
            <div class="location">Контакты</div>
            <div class="location-phone">
              <div class="phone"></div>
              <div class="number">+7 999 999 99 99</div>
            </div>
            <div class="location-phone" style="margin-top: 23px">
              <div class="mail"></div>
              <div class="number">mail@mail.ru</div>
            </div>
          </div>
          <div class="map"></div>
        </div>
      </div>
      <div class="team">
        <div class="about-tittle">КОМАНДА</div>
        <div class="about-border"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TubOffice from "~/components/tubOffice.vue";

defineOptions({
  name: "About",
})

</script>

<style scoped>
.about-baner {
  background: url("/src/assets/images/Plane.svg") no-repeat;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 90px 182px;
  height: 910px;
  display: flex;
  flex-direction: column;
  background-size: cover;
}

.about-tittle {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 84px;
  line-height: 100%;
}

.about-border {
  border-bottom: 6px solid #C75454;
  margin: 16px 0 80px;
  width: 294px;
}

.about-points {
  display: flex;
  flex-direction: column;
  gap: 77px;
}

.point-number {
  width: 103px;
  height: 103px;
  gap: 10px;
  padding: 10px 24px;
  border-radius: 17px;
  background: #C75454;
  margin-right: 44px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 52px;
  line-height: 100%;
  text-align: center;
  vertical-align: middle;
}

.point-text {
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  vertical-align: middle;
  color: #FFFFFF;
}

.about-office {
  margin: 110px 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 108px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}

.about-location {
  display: flex;
  justify-content: space-between;
  margin: 80px 0 110px;
}

.location {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 66px;
  line-height: 100%;
  font-variant: small-caps;
  margin-bottom: 30px;
}

.location-text {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  vertical-align: middle;
  margin-bottom: 65px;
}

.location-phone {
  display: flex;
}

.phone {
  mask: url(/src/assets/images/icons/phone.svg) no-repeat center/contain;
  -webkit-mask: url(/src/assets/images/icons/phone.svg) no-repeat center/contain;
  mask-size: 50px 50px;
  -webkit-mask-size: 50px 50px;
  background-color: #C75454;
  width: 50px;
  height: 50px;
  margin-right: 30px;
}

.number {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  vertical-align: middle;
}

.mail{
  mask: url(/src/assets/images/icons/mail.svg) no-repeat center/contain;
  -webkit-mask: url(/src/assets/images/icons/mail.svg) no-repeat center/contain;
  mask-size: 50px 50px;
  -webkit-mask-size: 50px 50px;
  background-color: #C75454;
  width: 50px;
  height: 50px;
  margin-right: 30px;
}

.map{
  width: 724px;
  height: 516px;
  gap: 10px;
  padding: 99px 238px;
  border-radius: 34px;
  background: #D9D9D9;
}

.team{
  background: #FFC472;
  height: 1343px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 70px 182px 150px;
}
</style> 