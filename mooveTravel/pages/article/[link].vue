<template>
  <div>
    <div class="article_header">
      <NuxtLink  @click="router.back()" class="article_back">← Назад</NuxtLink>
      <h1 class="article_tittle">
        <SkeletonBlock v-if="articlesStore.loading" height="40px" width="60%" style="margin-bottom: 16px;" />
        <template v-else>{{article?.title}}</template>
      </h1>
    </div>
    <div class="article_body">
      <div class="art-user">
        <div>
          <div class="art_text">
            <template v-if="articlesStore.loading">
              <SkeletonBlock v-for="n in 3" :key="n" width="100%" height="24px" style="margin-bottom: 12px;" />
            </template>
            <template v-else>
              <template v-for="(block, idx) in article?.content" :key="idx">
                <component :is="renderBlock(block)" />
              </template>
            </template>
          </div>
        </div>
        <div class="user">
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="none-art" >
        <div class="article_images">
          <template v-if="articlesStore.loading">
            <SkeletonBlock v-for="n in 2" :key="n" width="180px" height="120px" style="margin-right: 16px;" />
          </template>
          <template v-else>
            <div v-for="img in article?.articlePhotos?.slice(0, 2)" :key="img.id">
              <div class="article_image" :style="{backgroundImage: `url('${getImageUrl(img.url)}')`}"></div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <popup-article class="none-art" />
    <popup-application class="none-desk" />
  </div>
</template>
<script setup>
import PopupArticle from "~/components/PopupArticle";
import PopupApplication from "~/components/PopupApplication";
import {useArticlesStore} from "~/src/store/articles.js";
import {onBeforeMount, onMounted} from "vue";
import { useRoute } from 'vue-router'
import planeImg from "~/src/assets/images/Plane.svg";
import {useRouter} from '#app'
import SkeletonBlock from '~/components/SkeletonBlock.vue'

const router = useRouter()

function renderBlock(block) {
  if (block.type === 'heading') {
    return h(
        `h${block.level}`,
        { class: 'art_heading' },
        block.children?.map(child => child.text).join('')
    );
  }
  if (block.type === 'paragraph') {
    return h(
        'p',
        { class: 'art_paragraph' },
        block.children?.map(child => child.text).join('')
    );
  }
  if (block.type === 'image') {
    return h(
        'div',
        { class: 'art_image-block' },
        [
          h('img', {
            src: getImageUrl(block.image.url),
            alt: block.image.alternativeText || '',
            class: 'art_image',
          }),
          block.image.caption
              ? h('span', { class: 'art_image-caption' }, block.image.caption)
              : null,
        ]
    );
  }
  return null;
}

defineOptions({
  name: "article",
})
const route = useRoute()
const link = route.params.link
const articlesStore = useArticlesStore()
const article = computed(() => articlesStore.getArticlesLink)

onBeforeMount(async() => {
  await Promise.all([
    articlesStore.fetchArticleByLink(link),
  ])
})

const getImageUrl = (url) => {
  if (!url) return planeImg
  if (url.startsWith('http')) return url
  const { protocol, hostname } = window.location
  return `${protocol}//${hostname}:1337${url}`
}

</script>
<style scoped lang="scss">
.article_header{
  background: linear-gradient(63.23deg, #C75454 7.95%, #A21D1D 179.25%);
  margin-bottom: 65px;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-left: 182px;
  padding-right: 182px;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    height: 245px;
    padding-top: 37px;
  }
  @media (max-width: 1500px) {
    padding: 40px 30px;
    margin-bottom: 50px;
  }
  @media (max-width: 900px) {
    padding: 16px 20px 30px;
    margin-bottom: 40px;
  }
}

.art-user{
  display: flex;
  flex-direction: column;
}

.user{
  display: flex;
}

.article_tittle{
  line-height: 100%;
  color:white;
  display: flex;
  align-items: center;
  flex: 1;
  @media (min-width: 1500px) {
    font-weight: 700;
    font-size: 66px;
  }
}

.article_body{
  display: flex;
  gap: 84px;
}

.art_tittle{
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
}

.art_text {
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  @media (max-width: 1500px) {
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
}

.art_heading {
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 12px;
}
.art_paragraph {
  margin-bottom: 12px;
  min-height: 24px;
}
.art_image-block {
  margin: 24px 0;
  text-align: center;
}
.art_image {
  max-width: 100%;
  border-radius: 16px;
}
.art_image-caption {
  display: block;
  font-size: 14px;
  color: #888;
  margin-top: 4px;
}

.article_images {
  display: flex;
  flex-direction: column;
  gap: 42px;
}

.article_image{
  width: 555px;
  height: 440px;
  border-radius: 34px;
  background-repeat: no-repeat;
  background-size: cover;
  flex-shrink: 0;
  @media (max-width: 1500px) {
    width: 450px;
  }
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 900px) {
    width: 350px;
  }
}

.article_back{
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color:white;
  text-decoration: none;
  align-self: flex-end;
  @media (max-width: 1200px) {
    font-size: 28px;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
}

.none-art{
  @media (max-width: 1200px) {
    display: none;
  }
}
.none-desk{
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
}
</style>