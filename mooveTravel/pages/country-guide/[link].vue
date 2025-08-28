<template>
  <div>
    <div>
      <div class="gid-header">
        <div class="gid_back" @click="router.back()">← Назад</div>
        <div class="gid_tittle">{{ country?.name || getRussianCountryName(link) }}</div>
      </div>
      <div class="gid-tabs">
        <template v-if="currentGuides.length > 0">
          <div v-for="guid in currentGuides.slice(0, 3)">
            <gid-coutry-tab :guid="guid"/>
          </div>
        </template>
        <template v-else>
          <div class="no-guides-message">
            Путеводителей по этой стране пока нет, но мы обязательно подготовим для вас полезные советы и интересные маршруты!
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import gidCoutryTab from '~/components/gidCoutryTab.vue'
import { useRouter, useRoute, useHead } from '#app'
import { useTravelGuidesStore } from "~/src/store/travelGuides.js";
import { useCountriesStore } from '~/src/store/countries';
import { onMounted, computed } from 'vue'
import { useAsyncData } from 'nuxt/app'

const router = useRouter()
const route = useRoute()
const travelGuidesStore = useTravelGuidesStore()
const countriesStore = useCountriesStore()

const link = route.params.link

const getRussianCountryName = (link) => {
  const countryNames = {
    'turkey': 'Турция',
    'egypt': 'Египет',
    'uae': 'ОАЭ',
    'thailand': 'Таиланд',
    'maldives': 'Мальдивы',
    'greece': 'Греция',
    'italy': 'Италия',
    'spain': 'Испания',
    'france': 'Франция',
    'germany': 'Германия',
    'austria': 'Австрия',
    'switzerland': 'Швейцария',
    'croatia': 'Хорватия',
    'montenegro': 'Черногория',
    'bulgaria': 'Болгария',
    'cyprus': 'Кипр',
    'tunisia': 'Тунис',
    'morocco': 'Марокко',
    'vietnam': 'Вьетнам',
    'cambodia': 'Камбоджа',
    'laos': 'Лаос',
    'myanmar': 'Мьянма',
    'malaysia': 'Малайзия',
    'singapore': 'Сингапур',
    'indonesia': 'Индонезия',
    'philippines': 'Филиппины',
    'japan': 'Япония',
    'south-korea': 'Южная Корея',
    'china': 'Китай',
    'india': 'Индия',
    'sri-lanka': 'Шри-Ланка',
    'nepal': 'Непал',
    'bhutan': 'Бутан',
    'mongolia': 'Монголия',
    'kazakhstan': 'Казахстан',
    'uzbekistan': 'Узбекистан',
    'kyrgyzstan': 'Кыргызстан',
    'tajikistan': 'Таджикистан',
    'turkmenistan': 'Туркменистан',
    'azerbaijan': 'Азербайджан',
    'georgia': 'Грузия',
    'armenia': 'Армения',
    'ukraine': 'Украина',
    'belarus': 'Беларусь',
    'moldova': 'Молдова',
    'latvia': 'Латвия',
    'lithuania': 'Литва',
    'estonia': 'Эстония',
    'poland': 'Польша',
    'czech-republic': 'Чехия',
    'slovakia': 'Словакия',
    'hungary': 'Венгрия',
    'romania': 'Румыния',
    'serbia': 'Сербия',
    'bosnia': 'Босния и Герцеговина',
    'albania': 'Албания',
    'macedonia': 'Северная Македония',
    'slovenia': 'Словения',
    'portugal': 'Португалия',
    'netherlands': 'Нидерланды',
    'belgium': 'Бельгия',
    'luxembourg': 'Люксембург',
    'denmark': 'Дания',
    'sweden': 'Швеция',
    'norway': 'Норвегия',
    'finland': 'Финляндия',
    'iceland': 'Исландия',
    'ireland': 'Ирландия',
    'united-kingdom': 'Великобритания',
    'canada': 'Канада',
    'usa': 'США',
    'mexico': 'Мексика',
    'brazil': 'Бразилия',
    'argentina': 'Аргентина',
    'chile': 'Чили',
    'peru': 'Перу',
    'colombia': 'Колумбия',
    'ecuador': 'Эквадор',
    'venezuela': 'Венесуэла',
    'uruguay': 'Уругвай',
    'paraguay': 'Парагвай',
    'bolivia': 'Боливия',
    'guyana': 'Гайана',
    'suriname': 'Суринам',
    'french-guiana': 'Французская Гвиана',
    'australia': 'Австралия',
    'new-zealand': 'Новая Зеландия',
    'fiji': 'Фиджи',
    'vanuatu': 'Вануату',
    'new-caledonia': 'Новая Каледония',
    'papua-new-guinea': 'Папуа-Новая Гвинея',
    'solomon-islands': 'Соломоновы Острова',
    'samoa': 'Самоа',
    'tonga': 'Тонга',
    'cook-islands': 'Острова Кука',
    'niue': 'Ниуэ',
    'tokelau': 'Токелау',
    'tuvalu': 'Тувалу',
    'kiribati': 'Кирибати',
    'nauru': 'Науру',
    'palau': 'Палау',
    'marshall-islands': 'Маршалловы Острова',
    'micronesia': 'Микронезия',
    'northern-mariana-islands': 'Северные Марианские Острова',
    'guam': 'Гуам',
    'american-samoa': 'Американское Самоа',
    'pitcairn-islands': 'Острова Питкэрн',
    'wallis-and-futuna': 'Уоллис и Футуна',
    'french-polynesia': 'Французская Полинезия',
    'easter-island': 'Остров Пасхи',
    'galapagos-islands': 'Галапагосские острова',
    'canary-islands': 'Канарские острова',
    'madeira': 'Мадейра',
    'azores': 'Азорские острова',
    'faroe-islands': 'Фарерские острова',
    'greenland': 'Гренландия',
    'svalbard': 'Шпицберген',
    'jan-mayen': 'Ян-Майен',
    'bouvet-island': 'Остров Буве',
    'peter-i-island': 'Остров Петра I',
    'queen-maud-land': 'Земля Королевы Мод',
    'ross-dependency': 'Территория Росса',
    'british-antarctic-territory': 'Британская антарктическая территория',
    'french-southern-territories': 'Французские южные территории',
    'heard-island': 'Остров Херд',
    'mcdonald-islands': 'Острова Макдональд',
    'norfolk-island': 'Остров Норфолк',
    'christmas-island': 'Остров Рождества',
    'cocos-islands': 'Кокосовые острова',
    'ashmore-and-cartier-islands': 'Острова Эшмор и Картье',
    'coral-sea-islands': 'Острова Кораллового моря',
    'heard-and-mcdonald-islands': 'Острова Херд и Макдональд',
    'french-southern-and-antarctic-lands': 'Французские южные и антарктические земли',
    'british-indian-ocean-territory': 'Британская территория в Индийском океане',
    'south-georgia-and-south-sandwich-islands': 'Южная Георгия и Южные Сандвичевы острова',
    'falkland-islands': 'Фолклендские острова',
    'tristan-da-cunha': 'Тристан-да-Кунья',
    'saint-helena': 'Остров Святой Елены',
    'ascension-island': 'Остров Вознесения',
    'gough-island': 'Остров Гоф',
    'inaccessible-island': 'Недоступный остров',
    'nightingale-islands': 'Острова Найтингейл',
    'middle-island': 'Средний остров',
    'stoltenhoff-island': 'Остров Штольтенхофф'
  }
  
  return countryNames[link] || link
}

const currentGuides = computed(() => travelGuidesStore.getGuides)
const country = computed(() => countriesStore.getCurrentCountry)

useHead(() => ({
  title: `Гайды ${country.value?.name || getRussianCountryName(link)} | Moov Travel`,
  meta: [
    { name: 'description', content: `Все гиды и полезные советы по направлению ${country.value?.name || getRussianCountryName(link)} от Moov Travel.` },
    { property: 'og:title', content: `Гайды по ${country.value?.name || getRussianCountryName(link)} | Moov Travel` },
    { property: 'og:description', content: `Все гиды и полезные советы по направлению ${country.value?.name || getRussianCountryName(link)} от Moov Travel.` },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://moov-travel.ru/country-guide/${link}` },
  ],
  link: [
    { rel: 'canonical', href: `https://moov-travel.ru/country-guide/${link}` }
  ]
}))

await useAsyncData('countryGuides', () => travelGuidesStore.fetchGuidesByCountrySlug(link))
await useAsyncData('country', () => countriesStore.fetchCountryByLink(link))

</script>
<style scoped>
.gid-header {
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
  @media (max-width: 1200px) {
    height: 182px;
    padding: 40px;
  }
  @media (max-width: 768px) {
    height: 82px;
    padding: 20px 20px 30px;
    justify-content: flex-end;
  }
}

.gid_tittle {
  font-weight: 700;
  font-size: 66px;
  line-height: 100%;
  color: white;
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 1200px) {
    font-size: 38px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.gid_back {
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color: white;
  text-decoration: none;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.gid-tabs {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 70px auto 160px;
  @media (max-width: 900px) {
    gap: 25px;
  }
  @media (max-width: 768px) {
    gap: 21px;
  }
}
.no-guides-message {
  font-weight: bold;
  color: #C75454;
  text-align: center;
  margin-top: 10%;
  font-size: 20px;
}
</style>