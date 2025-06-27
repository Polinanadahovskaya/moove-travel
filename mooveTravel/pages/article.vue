<template>
  <div>
    <div class="article_header">
      <NuxtLink to="/blog" class="article_back">← Назад</NuxtLink>
      <div class="article_tittle">НАЗВАНИЕ СТАТЬИ</div>
    </div>
    <div class="article_body">
      <div>
        <div class="art_tittle">Заголовок</div>
        <div class="art_text">Есть над чем задуматься: базовые сценарии поведения пользователей, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы. Равным образом, консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании новых принципов формирования материально-технической и кадровой базы.
          Не следует, однако, забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности не оставляет шанса для направлений прогрессивного развития. Учитывая ключевые сценарии поведения, существующая теория является качественно новой ступенью соответствующих условий активизации.
          Прежде всего, дальнейшее развитие различных форм деятельности напрямую зависит от анализа существующих паттернов поведения. Таким образом, перспективное планирование требует от нас анализа стандартных подходов.
          Имеется спорная точка зрения, гласящая примерно следующее: многие известные личности преданы социально-демократической анафеме. Безусловно, экономическая повестка сегодняшнего дня позволяет выполнить важные задания по разработке анализа существующих паттернов поведения.</div>
      </div>
      <div>
        <div class="article_images">
          <div v-for="a in 2">
            <div class="article_image"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.article_header{
  background: linear-gradient(63.23deg, #C75454 7.95%, #A21D1D 179.25%);
  height: 245px;
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
}
.article_tittle{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 66px;
  line-height: 100%;
  color:white;
  display: flex;
  align-items: center;
  flex: 1;
}

.article_body{
  display: flex;
  gap: 84px;
}

.art_tittle{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  margin-bottom: 10px;
}

.art_text {
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
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
  background: #D9D9D9;
  flex-shrink: 0;
}

.article_back{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color:white;
  text-decoration: none;
  align-self: flex-end;
}
</style>