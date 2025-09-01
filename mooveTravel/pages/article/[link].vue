<template>
  <div>
    <div class="article_header">
      <NuxtLink  @click="router.back()" class="article_back">← Назад</NuxtLink>
      <h1 class="article_tittle">{{article?.title}}</h1>
    </div>
    <div class="article_body">
      <div class="art-user">
        <div>
          <!--          <h2 class="art_tittle">Заголовок</h2>-->
          <div class="art_text">
            <template v-for="(block, idx) in article?.content" :key="idx">
              <component :is="renderBlock(block)" />
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
          <div v-for="img in article?.articlePhotos" :key="img.id">
            <div class="article_image" :style="{backgroundImage: `url('${$getImageUrl(img.url)}')`}"></div>
          </div>
        </div>
      </div>
    </div>
    <popup-article class="none-art" />
    <popup-application class="none-desk" />
  </div>
</template>
<script setup>
import PopupArticle from "~/components/popupArticle.vue";
import PopupApplication from "~/components/popupApplication.vue";
import {useArticlesStore} from "~/src/store/articles.js";
import {computed, h} from "vue";
import { useRoute } from 'vue-router'
import {useRouter, useHead, useNuxtApp} from '#app'

const { $getImageUrl } = useNuxtApp()
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
        block.children?.map(child => {
          if (child.bold) {
            return h('strong', {}, child.text);
          }
          return child.text;
        })
    );
  }
  if (block.type === 'image') {
    return h(
        'div',
        { class: 'art_image-block' },
        [
          h('img', {
            src: $getImageUrl(block.image.url),
            alt: block.image.alternativeText || article.value?.title || 'Изображение к статье',
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

const route = useRoute()
const link = route.params.link
const articlesStore = useArticlesStore()
const article = computed(() => articlesStore.getArticlesLink)

useHead(() => ({
  title: article.value?.title ? `${article.value.title} | Moov Travel` : 'Блог | Moov Travel',
  meta: [
    { name: 'description', content: article.value?.description || 'Читайте интересные статьи о путешествиях в блоге Moov Travel.' },
    { property: 'og:title', content: article.value?.title ? `${article.value.title} | Moov Travel` : 'Блог | Moov Travel' },
    { property: 'og:description', content: article.value?.description || 'Читайте интересные статьи о путешествиях в блоге Moov Travel.' },
    { property: 'og:image', content:  $getImageUrl(article.value?.articlePhotos?.[0]?.url) },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `https://moov-travel.ru/article/${link}` },
  ],
  link: [
    { rel: 'canonical', href: `https://moov-travel.ru/article/${link}` }
  ]
}))

await articlesStore.fetchArticleByLink(link)

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
  justify-content: center;
  flex-direction: row-reverse;
  @media (min-width: 900px) {
    height: 245px;
    padding-top: 37px;
  }
  @media (max-width: 1500px) {
    margin-bottom: 50px;
  }
  @media (max-width: 900px) {
    margin-bottom: 40px;
    padding: 16px 20px 30px;
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
  text-transform: uppercase;
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
  font-weight: bold;
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
  cursor:pointer;
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