<template>
  <div>
    <div class="variant-body" :style="{ backgroundImage: imageLoaded ? `url('${getImageUrl(info?.images[0]?.url)}')` : 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
      <SkeletonBlock v-if="!imageLoaded" width="100%" height="100%" borderRadius="34px" style="position:absolute;top:0;left:0;z-index:1;" />
      <img v-if="info?.images && info.images[0]?.url" :src="getImageUrl(info.images[0].url)" @load="onImageLoad" style="display:none;" />
      <div style="position:relative;z-index:2;">
        <div class="variant-tittle">{{ info?.title }}</div>
        <div class="variant-text">{{info?.description}}</div>
      </div>
      <div  style="text-decoration: none; color: #1E1E1E;position:relative;z-index:2;">
        <div class="variant-price">{{ formatPrice(info.price) }} ₽</div>
        <div class="variant-button" @click="goToArticlePageGid(info?.link)">Купить</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import placeholderImg from "~/src/assets/images/placeholder.svg";
import {useRouter} from "#vue-router";
import SkeletonBlock from '~/components/SkeletonBlock.vue'
import {ref} from 'vue'

defineOptions({
  name: 'bestVariant',
})

const router = useRouter()

const formatPrice = (price) => {
  const roundedPrice = Math.round(price);
  return roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

const getImageUrl = (url) => {
  if (!url) return placeholderImg
  if (url.startsWith('http')) return url
  const { protocol, hostname } = window.location
  return `${protocol}//${hostname}:1337${url}`
}

function goToArticlePageGid(link) {
  router.push(`/guide/${link}`)
}

const imageLoaded = ref(false)
function onImageLoad() { imageLoaded.value = true }

defineProps({
  info: {
    required: false,
  }
})
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
  margin: 0;
  -webkit-line-clamp: 8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
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