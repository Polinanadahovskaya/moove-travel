<template>
  <div :class="{'contry-art' : route.path !== '/blog'}">
    <div class="article-tab">
      <div class="article-information">
        <div class="article-inf">
          <div class="article-profile-img" :style="{background: `url('${getImageUrl(article.user.photo.url)}')`, backgroundSize: 'cover' }"></div>
        <div class="tab-header">
          <div class="article-profile-name">{{article.user.fio}}</div>
          <div class="article-profile-date">{{ formatDate(article.createdAt) }}</div>
        </div>
        </div>
        <div class="article-text" v-html="compiledArticle"></div>
      <div class="article-filters">
        <div v-for="art in article.article_tags" :key="a">
          <div class="article-filter" v-if="route.path === '/blog'">{{art.name}}</div>
        </div>
      </div>
      </div>
      <div class="article-img" :style="{background: `url('${getImageUrl(article?.articlePhotos[0]?.url)}')`, backgroundRepeat: 'no-repeat' , backgroundSize: 'cover' }"></div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from '#app'
import { marked } from 'marked';
import planeImg from "~/src/assets/images/Plane.svg";

defineOptions({
  name: 'tubArticle',
})

const props = defineProps({
  article: {
    type: Object,
    required: false
  }
})

const compiledArticle = computed(() => marked(props.article?.content || ''));
const route = useRoute()

const getImageUrl = (url) => {
  if (!url) return planeImg
  if (url.startsWith('http')) return url
  const { protocol, hostname } = window.location
  return `${protocol}//${hostname}:1337${url}`
}

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

</script>
<style scoped lang="scss">
.article-tab{
  width: 100%;
  height: 365px;
  border-radius: 28px;
  box-shadow: 0px 0px 60px 0px #0000001A;
  background: #FFFFFF;
  display: flex;
  gap: 41px;
  padding: 20px 30px;
  @media (max-width: 900px) {
      flex-direction: column;
      height: auto;
      padding: 15px 20px;
      gap: 20px;
  }
  @media (max-width: 576px) {
    gap: 8px;
    border-radius: 6px;
  }
}

.tab-header{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.article-img {
  width: 307px;
  height: 309px;
  border-radius: 24px;
  background: #D9D9D9;
  flex-shrink: 0;
  object-fit: cover;
  display: flex;
  align-self: center;
  @media (max-width: 1650px) {
    width: 265px;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 200px;
  }
  @media (max-width: 576px) {
    height: 91px;
    border-radius: 9px;
  }
}

.article-information {
  display: flex;
  flex-direction: column;
  gap: 41px;
  @media (min-width: 900px) {
    width: 58%;
  }
  @media (max-width: 768px) {
      gap: 20px;
  }
  @media (max-width: 576px) {
      gap: 8px;
  }
}

.article-inf {
  display: flex;
  align-items: center;
}

.article-profile-img {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  @media (max-width: 1600px) {
    width: 70px;
    height: 65px;
  }
  @media (max-width: 1200px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 576px) {
    width: 31px;
    height: 31px;
  }
}

.article-profile-name {
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  vertical-align: middle;
  margin-left: 23px;
  @media (max-width: 576px) {
    margin-left: 11px;
    font-size: 12px;
  }
}

.article-profile-date {
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  vertical-align: middle;
  color: #929292;
  @media (max-width: 576px) {
    font-size: 12px;
  }
}

.article-text {
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 768px) {
      font-size: 18px;
  }
  @media (max-width: 576px) {
    font-size: 8px;
  }
}

.article-filter{
  width: fit-content;
  height: 39px;
  padding: 5px 30px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  background: #D9D9D9;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1650px){
    font-size: 18px;
  }
  @media (max-width: 576px) {
    height: 14px;
    border-radius: 2px;
    font-size: 8px;
    justify-content: center;
  }
}

.article-filters{
  display: flex;
  gap: 10px;
}





  //.article-profile-name,
  //.article-profile-date {
  //  font-size: 18px;
  //}

.contry-art{
  z-index: 999;
  position: relative;
}
</style>