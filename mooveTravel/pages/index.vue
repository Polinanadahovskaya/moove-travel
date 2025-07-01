<template>
  <div>
    <div class="main-header_tittle">
      <h1>Куда поедем<br/>
        отдыхать?
      </h1>
    </div>
    <div class="tv-search-form" data-tv-moduleid="9971497"></div>
    <div class="main-search"></div>
    <div class="header-wave"/>
    <div class="help-search">
      <div>
        <h2 class="help-tittle">НУЖНА ПОМОЩЬ <br/> С ПОДБОРОМ ТУРА?</h2>
        <div class="tittle-border"></div>
      </div>
      <div style="display: flex; gap: 55px;">
        <div class="many-arrow">
          <div v-for="a in 3">
            <div class="hollow-arrow"></div>
          </div>
        </div>
        <a href="#application" style="text-decoration: none">
          <div class="tittle-button">Оставить заявку</div>
        </a>

      </div>
    </div>
    <div class="help-about">
      <div>
        <h2 class="about-tittle">О НАС</h2>
        <div class="about-border"></div>
      </div>
      <div class="about-block">
        <NuxtLink to="about" class="link-button">
          <div class="block-button">Подробнее</div>
        </NuxtLink>
        <div class="numbers">
          <div v-for="arr in aboutArray" :key="arr">
            <div class="block-tab">
              <div class="tub-number">{{ arr.id }}</div>
              <div class="block-text">{{ arr.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="priorities">
      <div>
        <h2 class="about-tittle">ПРЕИМУЩЕСТВА</h2>
        <div class="about-border"></div>
      </div>
      <div>
        <div class="panel">
          <div class="panel-column">
            <div v-for="arr in pluses.slice(0, 2)" :key="arr">
              <div class="tab-panel">
                <div class="tab">
                  <div class="mask" :class="{'time-mask': arr.id === 'time', 'end-mask': arr.id === 'end' }"></div>
                </div>
                <div class="tab-text"><span class="bold">{{ arr.boldText }}</span> {{ arr.text }}
                </div>
              </div>
            </div>
          </div>
          <div class="panel-column">
            <div v-for="arr in pluses.slice(2, 4)" :key="arr">
              <div class="tab-panel">
                <div class="tab">
                  <div class="mask"
                       :class="{'self-mask': arr.id === 'self', 'ticket-mask': arr.id === 'ticket' }"></div>
                </div>
                <div class="tab-text"><span class="bold">{{ arr.boldText }}</span> {{ arr.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <popup-application id="application"/>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import PopupApplication from '~/components/popupApplication.vue'

onMounted(() => {
  if (!document.querySelector('script[src="//tourvisor.ru/module/init.js"]')) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://tourvisor.ru/module/init.js'
    script.async = true
    script.onload = () => {
      if (window.tv_init) window.tv_init()
    }
    document.body.appendChild(script)
  } else {
    if (window.tv_init) window.tv_init()
  }
})

const aboutArray = [
  {
    id: '01',
    text: "Мы запустили агентство, потому что устали от шаблонного сервиса. Здесь нет случайных туров и формального подхода. Честный подбор, внимание к деталям и уважение к чужому отпуску."
  },
  {
    id: '02',
    text: "Не впариваем. Не торопим. Слушаем. Подбираем тур под вас, а не под акции. Мы за комфорт, разум и человеческое отношение — без скриптов и маркетинговых фокусов."
  },
  {
    id: '03',
    text: "Мы не гонимся за количеством. Нам важно, чтобы вы вернулись — и привели тех, кто дорог и вам. Потому что хороший отдых начинается с тех, кто вас к нему ведёт."
  }]
const pluses = [
  {
    id: 'time',
    boldText: 'Работаем без выходных',
    text: ' — всегда на связи, когда удобно вам.'
  },
  {
    id: 'end',
    boldText: 'Ведём до конца',
    text: ' — остаёмся на связи до вашего возвращения.'
  },
  {
    id: 'self',
    boldText: 'Подбираем, как себе',
    text: '— учитываем желания, бюджет и нюансы.'
  },
  {
    id: 'ticket',
    boldText: 'Создаем лучшие тревел-гиды',
    text: '— изучаем маршруты и отели не по вебинарам, а своими ногами.'
  }
]
</script>

<style scoped lang="scss">
.main-header_tittle {
  margin: 90px auto 33px;
  @media (max-width: 576px) {
    margin: 27px auto 26px;
  }
}

.header-wave {
  background: url("/src/assets/images/planeStartPage.svg") no-repeat;
  height: 595px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;
  background-size: cover;
  @media (max-width: 1640px) {
    height: 500px;
  }
  @media (max-width: 1400px) {
    height: 450px;
  }
  @media (max-width: 1200px) {
    height: 400px;
  }
  @media (max-width: 1050px) {
    height: 350px;
    background-size: contain;
  }
  @media (max-width: 900px) {
    height: 250px;
    background-size: cover;
  }
  @media (max-width: 768px) {
    height: 250px;
  }
  @media (max-width: 576px) {
    height: 131px;
    background-size: cover;
  }
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
  padding: 60px 182px;
  background: #C75454;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1400px) {
    padding: 50px;
  }
  @media (max-width: 900px) {
    padding: 40px;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 576px) {
    padding: 20px;
  }
}

.help-tittle {
  color: #FFFFFF;
}

.tittle-border {
  border-bottom: 6px solid #FFFFFF;
  margin-top: 40px;
  width: 315px;
  @media (max-width: 1200px) {
    width: 295px;
    margin-top: 30px;
    border-width: 5px;
  }
  @media (max-width: 900px) {
    width: 265px;
    margin-top: 20px;
    border-width: 4px;
  }
  @media (max-width: 768px) {
    width: 150px;
    margin-top: 10px;
    border-width: 2px;
  }
  @media (max-width: 576px) {
    width: 103px;
    border-width: 1px;
    margin-top: 5px;
  }
}

.tittle-button {
  width: 552px;
  height: 136px;
  padding-right: 5px;
  padding-left: 5px;
  border-radius: 15px;
  background: #FFFFFF;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  vertical-align: middle;
  color: #C75454;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 1650px) {
    width: 352px;
    height: 106px;
    font-size: 30px;
  }
  @media (max-width: 1200px) {
    width: 295px;
    height: 85px;
    border-radius: 13px;
    font-size: 20px;
  }
  @media (max-width: 900px) {
    width: 265px;
    height: 55px;
    border-radius: 10px;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    width: 150px;
    height: 45px;
    border-radius: 7px;
    font-size: 12px;
  }
  @media (max-width: 576px) {
    width: 104px;
    height: 32px;
    border-radius: 6px;
    font-size: 8px;
  }
}

.help-about {
  margin: 110px auto;
  @media (max-width: 576px) {
    margin: 40px auto;
  }
}

.about-border {
  border-bottom: 6px solid #C75454;
  margin: 16px 0 80px;
  width: 295px;
  @media (max-width: 900px) {
    border-width: 5px;
    width: 250px;
    margin: 14px 0 40px;
  }
  @media (max-width: 900px) {
    border-width: 4px;
    width: 200px;
    margin: 12px 0 40px;
  }
  @media (max-width: 768px) {
    border-width: 3px;
    width: 143px;
    margin: 9px 0 16px;
  }
  @media (max-width: 576px) {
    border-width: 2px;
    width: 103px;
    margin: 7px 0 14px;
  }
}

.about-block {
  position: relative;
  width: 100%;
  border-radius: 34px;
  display: flex;
  justify-content: space-between;
  padding: 45px 45px 0;
  @media (min-width: 1300px) {
    height: 608px;
  }
  @media (max-width: 1300px) {
    flex-direction: column-reverse;
    border-radius: 6px;
    padding: 20px 15px;
  }
}

.about-block::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("/src/assets/images/aboutBackground.png") no-repeat;
  border-radius: 34px;
  z-index: 0;
  background-size: cover;
  @media (max-width: 1200px) {
    border-radius: 15px;
  }
  @media (max-width: 900px) {
    border-radius: 10px;
  }
  @media (max-width: 576px) {
    border-radius: 6px;
  }
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
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    border-radius: 18px;
    padding: 8px 10px;
    font-size: 20px;
    height: 80px;
    width: 250px;
  }
  @media (max-width: 576px) {
    width: 82px;
    height: 27px;
    border-radius: 6px;
    padding: 8px 40px;
    font-size: 8px;
  }
}

.link-button {
  display: flex;
  align-self: end;
  margin-bottom: 41px;
  text-decoration: none;
  @media (max-width: 1300px) {
    align-self: center;
    margin-bottom: 0;
    margin-top: 20px;
  }
}


.block-tab {
  display: flex;
  gap: 44px;
  padding: 36px 44px;
  border-radius: 28px;
  align-items: center;
  background: #ffff;
  box-shadow: 0px 0px 60px 0px #0000001A;
  @media (min-width: 1300px) {
    height: 152px;
  }
  @media (max-width: 1300px) {
    padding: 30px 36px;
    gap: 10px;
    border-radius: 10px;
  }
  @media (max-width: 900px) {
    padding: 20px 26px;
    gap: 10px;
    border-radius: 10px;
  }
  @media (max-width: 786px) {
    padding: 12px 18px;
    gap: 10px;
    border-radius: 8px;
  }
  @media (max-width: 576px) {
    gap: 6px;
    border-radius: 6px;
    padding: 4px 6px
  }
}

.tub-number {
  font-weight: 400;
  font-size: 96px;
  line-height: 100%;
  font-variant: small-caps;
  color: #C75454;
  @media (max-width: 1300px) {
    font-size: 64px;
  }
  @media (max-width: 900px) {
    font-size: 44px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
}

.numbers {
  display: flex;
  flex-direction: column;
  gap: 33px;
  width: 55%;
  @media (max-width: 1300px) {
    width: 100%;
    gap: 10px;
  }
}

.priorities {
  margin: 110px auto 180px;
  @media (max-width: 576px) {
    margin: 40px auto;
  }
}

.panel {
  display: flex;
  gap: 33px;
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    gap: 40px;
  }
  @media (max-width: 900px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    gap: 14px;
  }
  @media (max-width: 576px) {
    gap: 8px;
  }
}

.panel-column {
  display: flex;
  flex-direction: column;
  gap: 90px;
  width: 50%;
  @media (max-width: 1200px) {
    width: 100%;
    gap: 40px;
  }
  @media (max-width: 900px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    gap: 14px;
  }
  @media (max-width: 576px) {
    gap: 8px;
  }
}

.tab {
  width: 154px;
  height: 154px;
  border-radius: 15px;
  border: 1px solid;
  border-image-source: linear-gradient(135deg, #FFFFFF 30.25%, #C75454 100%);
  box-shadow: 8px 8px 30px 0px #00000026;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    border-width: 1px;
    padding: 7px;
  }
}

.tab-text {
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  vertical-align: middle;
  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 900px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
  }
}

.bold {
  font-weight: 700;
}

.tab-panel {
  display: flex;
  gap: 33px;
  align-items: center;
  @media (max-width: 576px) {
    gap: 7px;
  }
}

.hollow-arrow {
  position: relative;
  width: 20px;
  height: 20px;
  @media (max-width: 1200px) {
    width: 5px;
    height: 14px;
  }
  @media (max-width: 900px) {
    width: 8px;
    height: 8px;
  }
  @media (max-width: 768px) {
    width: 8px;
    height: 4px;
  }
  @media (max-width: 576px) {
    width: 8px;
    height: 8px;
  }
}

.hollow-arrow::before {
  content: "";
  position: absolute;
  width: 31px;
  height: 31px;
  border-right: 10px solid white;
  border-bottom: 10px solid white;
  transform: rotate(45deg);
  top: 5px;
  left: 5px;
  border-radius: 3px;
  @media (max-width: 1200px) {
    width: 18px;
    height: 18px;
    border-width: 7px;
  }
  @media (max-width: 900px) {
    width: 13px;
    height: 13px;
    border-width: 6px;
    left: 20px;
  }
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
    border-width: 5px;
    left: 30px;
  }
  @media (max-width: 576px) {
    width: 8px;
    height: 8px;
    border-width: 3px;
    top: 0px;
    left: 40px;
    border-radius: 1px;
  }
}

.mask {
  mask-size: 100px 100px;
  -webkit-mask-size: 100px 100px;
  background-color: #C75454;
  width: 100px;
  height: 100px;
  @media (max-width: 576px) {
    width: 25px;
    height: 25px;
  }
}

.many-arrow {
  display: flex;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 576px) {
    gap: 2px;
  }
}

.block-text {
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  font-variant: small-caps;
  @media (max-width: 1850px) {
    font-size: 16px;
  }
  @media (max-width: 1300px) {
    font-size: 14px;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
  }
}

.time-mask {
  mask: url(/src/assets/images/icons/time.svg) no-repeat center/contain;
  -webkit-mask: url(/src/assets/images/icons/time.svg) no-repeat center/contain;
}

.end-mask {
  mask: url(/src/assets/images/icons/goEnd.svg) no-repeat center/contain;
  -webkit-mask: url(/src/assets/images/icons/goEnd.svg) no-repeat center/contain;
}

.self-mask {
  mask: url(/src/assets/images/icons/self.svg) no-repeat center/contain;
  -webkit-mask: url(/src/assets/images/icons/self.svg) no-repeat center/contain;
}

.ticket-mask {
  mask: url(/src/assets/images/icons/ticket.svg) no-repeat center/contain;
  -webkit-mask: url(/src/assets/images/icons/ticket.svg) no-repeat center/contain;
}
</style> 