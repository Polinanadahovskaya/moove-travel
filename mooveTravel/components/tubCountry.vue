<template>
  <div class="tub-country-container">
    <NuxtLink :to="id === 'gid' ? '/countryGid' : `/country/${country?.link}`" style="text-decoration: none;">
      <div class="country-background" :style="{backgroundImage: imageLoaded ? `url('${getImageUrl(country?.image?.url)}')` : 'none'}">
        <SkeletonBlock v-if="!imageLoaded" width="100%" height="100%" borderRadius="34px" style="position:absolute;top:0;left:0;z-index:1;" />
        <img v-if="country?.image?.url" :src="getImageUrl(country.image.url)" @load="onImageLoad" style="display:none;" />
        <div class="country-text" style="position:relative;z-index:2;">{{country?.name}}</div>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
import placeholderImg from "~/src/assets/images/placeholder.svg";
import SkeletonBlock from '~/components/SkeletonBlock.vue'
import {ref} from 'vue'
const imageLoaded = ref(false)
function onImageLoad() { imageLoaded.value = true }

defineOptions({
  name: "tubCountry",
})

defineProps({
  id: {
    type: String,
    required: false
  },
  country: {
    required: false
  }
})

const getImageUrl = (url) => {
  if (!url) return placeholderImg
  if (url.startsWith('http')) return url
  const { protocol, hostname } = window.location
  return `${protocol}//${hostname}:1337${url}`
}

</script>
<style scoped>
.tub-country-container {
  width: 100%;
  height: 100%;
  text-decoration: none;
}

.country-background {
  width: 100%;
  height: 100%;
  padding: 18px;
  border-radius: 34px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  @media (min-width: 768px) {
    aspect-ratio: 502/354;
    min-height: 200px;
  }
  @media (max-width: 900px){
    border-radius: 12px;
    height: 135px;
  }
  @media (max-width: 768px){
    border-radius: 6px;
    height: 115px;
  }
}

.country-text{
  font-weight: 700;
  font-size: clamp(18px, 3vw, 36px);
  line-height: 100%;
  text-align: center;
  vertical-align: middle;
  color: #1E1E1E;
  text-decoration: none;
  @media (max-width: 768px){
    font-size: 12px;
  }
}
</style>