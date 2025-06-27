<template>
  <div>
    <div>
      <div class="about-baner">
        <h1 style="color: #FFFFFF">Moov Travel — отпуск,<br/>
          после которого хочется ещё</h1>
        <div class="about-border"></div>
        <div class="about-points">
          <div v-for="arr in aboutMoove">
            <div style="display: flex;     align-items: center;">
              <div class="point-number">{{arr.id}}</div>
              <div class="point-text" v-html="arr.text"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-office">
        <h2 class="about-tittle">НАШ ОФИС</h2>
        <div class="about-border"></div>
        <div class="about-location">
          <div class="contacts">
            <div class="location">Скоро откроемся!</div>
            <div class="location-text">Временно работаем онлайн
            </div>
            <div class="location">Контакты</div>
            <div class="location-phone">
              <div class="phone"></div>
              <div class="number">+7 903 173-77-88</div>
            </div>
            <div class="location-phone" style="margin-top: 23px">
              <div class="mail"></div>
              <div class="number">Sputnik@moov-travel.ru</div>
            </div>
          </div>
          <div class="map"></div>
        </div>
      </div>
      <div class="team">
        <div>
          <h2 class="about-tittle">КОМАНДА</h2>
          <div class="about-border"></div>
        </div>
        <div class="blog-grid">
          <div v-for="arr in aboutTeam" class="team-card">
            <team-tab
            :imgUrl="arr.img"
            :element="arr"/>
          </div>
        </div>
      </div>
      <popup-application/>
    </div>
  </div>
</template>

<script setup>
import TubOffice from "~/components/tubOffice.vue";
import PopupApplication from "~/components/popupApplication.vue";
import teamTab from "~/components/teamTab.vue";
import tanyaImg from '/src/assets/images/tanya.png'
import andrewImg from '/src/assets/images/andrew.png'

defineOptions({
  name: "About",
})

const aboutMoove = [
  {
    id: '01',
    text: 'Подбираем тур как себе — учтём всё: даты, бюджеты, детские <br>клубы, лавандовые подушки в номере'
  },
  {
    id: '02',
    text: 'Топ-направления — Турция, Египет, ОАЭ, Таиланд, Мальдивы — <br>и ещё в запасе'
  },
  {
    id: '03',
    text: 'На связи с клиентами без выходных'
  }
]
const aboutTeam = [
  {
    id: 1,
    name: 'Таня Нагибина',
    firstText: 'Сооснователь Moov Travel / Эксперт по семейным путешествиям',
    text: 'Более 10 лет в туризме, сотни довольных клиентов и точно знаю: отпуск не должен быть "наугад". Я соберу для вас тур, в который вы влюбитесь — с учётом бюджета, целей и самых мелких деталей. Люблю сложные задачи и семейные маршруты.',
    img: tanyaImg
  },
  {
    id: 2,
    name: 'Андрей Нагибин',
    firstText: 'Сооснователь Moov Travel / Эксперт по Азии и отдыху «для двоих»',
    text: 'Отвечаю за чёткую организацию поездок: от бронирования до вашего приземления. Я не просто оформляю тур — я гарантирую, что всё будет на высоте. В любой момент рядом, если потребуется поддержка. Даже ночью.',
    img: andrewImg
  },
]

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
  display: flex;
  flex-direction: column;
  background-size: cover;
}

.about-tittle {
  color: #1E1E1E;
}

.about-border {
  border-bottom: 6px solid #C75454;
  width: 294px;
  margin: 16px 0 110px;
  @media (max-width: 1650px) {
    width: 165px;
  }
}

.about-points {
  display: flex;
  flex-direction: column;
  gap: 77px;
}

.contacts{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  @media (max-width: 1650px) {
    font-size: 28px;
  }
}

.about-office {
  margin: 110px 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 177px;
  margin-top: 233px;
  margin-left: auto;
  margin-right: auto;
  align-items: stretch;
}

.team-card {
  display: flex;
  flex-direction: column;
  height: 100%;
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
  @media (max-width: 1650px) {
    font-size: 55px;
  }
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
  background: url("/src/assets/images/fastOpen.png") no-repeat;
  background-size: cover;
  @media (max-width: 1650px) {
    width: 524px;
    height: 416px;
  }
}

.team{
  background: #FFC472;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: 70px 182px 150px;
  margin-bottom: 180px;
}
</style> 