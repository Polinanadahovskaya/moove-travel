<template>
  <div>
    <div class="article_header">
      <NuxtLink  @click="router.back()" class="article_back">← Назад</NuxtLink>
      <h1 class="article_tittle">НАЗВАНИЕ СТАТЬИ</h1>
    </div>
    <div class="article_body">
      <div class="art-user">
        <div>
          <h2 class="art_tittle">Заголовок</h2>
          <div class="art_text" v-html="compiledMarkdown"></div>
        </div>
        <div class="user">
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="none-art" >
        <div class="article_images">
          <div v-for="img in article?.articlePhotos?.slice(0, 2)" :key="img.id">
            <div class="article_image" :style="{backgroundImage: `url('${getImageUrl(img.url)}')`}"></div>
          </div>
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
import {onMounted} from "vue";
import { useRoute } from 'vue-router'
import planeImg from "~/src/assets/images/Plane.svg";
import { marked } from 'marked';
import {useRouter} from '#app'

const router = useRouter()

const compiledMarkdown = computed(() => marked(article?.value.content));

defineOptions({
  name: "article",
})
const route = useRoute()
const link = route.params.link
const articlesStore = useArticlesStore()
const article = computed(() => articlesStore.getArticlesLink)
onMounted(async () => {
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
<style scoped>
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