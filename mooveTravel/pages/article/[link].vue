<template>
  <div>
    <div class="article_header">
      <NuxtLink to="/blog" class="article_back">← Назад</NuxtLink>
      <h1 class="article_tittle">НАЗВАНИЕ СТАТЬИ</h1>
      <div style="color: white; font-size: 18px;">link: {{ link }}</div>
    </div>
    <div class="article_body">
      <div>
        <h2 class="art_tittle">Заголовок</h2>
        <div class="art_text">Есть над чем задуматься: базовые сценарии поведения пользователей, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы. Равным образом, консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании новых принципов формирования материально-технической и кадровой базы.
          Не следует, однако, забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности не оставляет шанса для направлений прогрессивного развития. Учитывая ключевые сценарии поведения, существующая теория является качественно новой ступенью соответствующих условий активизации.
          Прежде всего, дальнейшее развитие различных форм деятельности напрямую зависит от анализа существующих паттернов поведения. Таким образом, перспективное планирование требует от нас анализа стандартных подходов.
          Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности преданы социально-демократической анафеме. Безусловно, экономическая повестка сегодняшнего дня позволяет выполнить важные задания по разработке анализа существующих паттернов поведения.</div>
      </div>
      <div class="none-art" >
        <div class="article_images">
          <div v-for="a in 2">
            <div class="article_image"></div>
          </div>
        </div>
      </div>
    </div>
    <popup-article class="none-art" />
    <popup-application class="none-desk" />
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import PopupArticle from "~/components/PopupArticle";
import PopupApplication from "~/components/PopupApplication";

const route = useRoute();
const link = computed(() => route.params.link);

defineOptions({
  name: "article",
})
</script> 