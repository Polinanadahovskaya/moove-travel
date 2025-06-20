<template>
  <div>
    <div class="main-header_tittle">
      <div class="header-text">Дополнительный текст</div>
      <div class="header-tittle">СТАРТОВЫЙ ТЕКСТ
        В ДВЕ СТРОКИ
      </div>
    </div>
    <div class="main-search"></div>
    <div class="header-wave">
      <div class="plane-wave"></div>
    </div>
    <div class="help-search">
      <div>
        <div class="help-tittle">НУЖНА ПОМОЩЬ <br/> С ПОДБОРОМ ТУРА?</div>
        <div class="tittle-border"></div>
      </div>
      <div>
        <a href="#application" style="text-decoration: none">
          <div class="tittle-button">Оставить заявку</div>
        </a>

      </div>
    </div>
    <div class="help-about">
      <div>
        <div class="about-tittle">О НАС</div>
        <div class="about-border"></div>
      </div>
      <div class="about-block">
        <NuxtLink to="about" class="link-button">
          <div class="block-button">Подробнее</div>
        </NuxtLink>
        <div class="numbers">
          <div v-for="a in 3" :key="a">
            <div class="block-tab">
              <div class="tub-number">01</div>
              <div class="block-">Дополнительный текст в несколько строчек</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="priorities">
      <div>
        <div class="about-tittle">ПРЕИМУЩЕСТВА</div>
        <div class="about-border"></div>
      </div>
      <div>
        <div class="panel">
          <div class="panel-column">
            <div class="tab-panel">
              <div class="tab"></div>
              <div class="tab-text"><span class="bold">Работаем без выходных</span> — всегда на связи, когда удобно вам.</div>
            </div>
            <div class="tab-panel">
              <div class="tab"></div>
              <div class="tab-text"><span class="bold">Ведём до конца</span> — остаёмся на связи до вашего возвращения.
              </div>
            </div>
          </div>
          <div class="panel-column">
            <div class="tab-panel">
              <div class="tab"></div>
              <div class="tab-text"><span class="bold">Подбираем, как себе </span> — учитываем желания, бюджет и нюансы.
              </div>
            </div>
            <div class="tab-panel">
              <div class="tab"></div>
              <div class="tab-text"><span class="bold">Создаем лучшие тревел-гиды</span> — изучаем маршруты и отели не по вебинарам, а своими ногами.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <popup-application id="application"/>
  </div>
</template>

<script setup>
import PopupApplication from '~/components/PopupApplication.vue'
</script>

<style scoped>
.main-header_tittle {
  margin: 90px auto 33px;
}

.header-text {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  margin-bottom: 16px;
}

.header-tittle {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 84px;
  line-height: 100%;
  font-variant: small-caps;
}

.header-wave {
  background: url("/src/assets/images/wave.svg") no-repeat;
  height: 672px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;

}

.plane-wave {
  background: url("/src/assets/images/planeWave.svg") no-repeat;
  position: absolute;
  height: 298px;
  width: 100%;
  top: 106px;
}

.main-search {
  display: flex;
}

.help-search {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 268px;
  padding: 60px 182px;
  background: #C75454;
  display: flex;
  justify-content: space-between;
}

.help-tittle {
  font-family: Montserrat;
  font-weight: 700;
  font-size: 64px;
  line-height: 100%;
  vertical-align: middle;
  color: #FFFFFF;
}

.tittle-border {
  border-bottom: 6px solid #FFFFFF;
  margin-top: 40px;
  width: 315px;
}

.tittle-button {
  width: 552px;
  height: 136px;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 15px;
  background: #FFFFFF;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  vertical-align: middle;
  color: #C75454;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.help-about {
  margin: 110px auto;
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
  width: 295px;
}

.about-block {
  position: relative;
  width: 100%;
  height: 608px;
  border-radius: 34px;
  display: flex;
  justify-content: space-between;
  padding: 45px 45px 0;
}

.about-block::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 574px;
  background: #D9D9D9;
  border-radius: 34px;
  z-index: 0;
}
.about-block > * {
  position: relative;
  z-index: 1;
}

.block-button {
  width: 369px;
  height: 100px;
  padding: 31px 126px;
  border-radius: 20px;
  background: #C75454;
  color: #FFFFFF;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  display: flex;
  justify-content: center;
}

.link-button{
  display: flex;
  align-self: end;
  margin-bottom: 76px;
  text-decoration: none;
}


.block-tab{
  display: flex;
  gap: 44px;
  height: 166px;
  padding: 36px 44px;
  border-radius: 28px;
  align-items: center;
  background: #ffff;
  box-shadow: 0px 0px 60px 0px #0000001A;
}

.tub-number{
  font-family: Montserrat;
  font-weight: 400;
  font-size: 96px;
  line-height: 100%;
  font-variant: small-caps;
  color: #C75454;
}

.numbers{
  display: flex;
  flex-direction: column;
  gap: 33px;
}

.priorities{
  margin: 110px auto 180px;
}

.panel{
  display: flex;
  gap: 33px;
}

.panel-column{
  display: flex;
  flex-direction: column;
  gap: 90px;
}

.tab{
  width: 154px;
  height: 154px;
  border-width: 1px;
  border-radius: 15px;
  border: 1px solid;
  border-image-source: linear-gradient(135deg, #FFFFFF 30.25%, #C75454 100%);
  box-shadow: 8px 8px 30px 0px #00000026;
  flex-shrink: 0;
}

.tab-text{
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  vertical-align: middle;
}
.bold{
  font-weight: 700;
}

.tab-panel{
  display: flex;
  gap: 33px;
  align-items: center;
}

.time-mask{
  mask: ;
}
</style> 