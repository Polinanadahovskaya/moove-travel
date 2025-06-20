<template>
  <div>
    <div class="country-block">
      <div v-for="a in 3" :key="a">
        <tub-article/>
    </div>
    </div>
  </div>
</template>
<script setup>
import TubArticle from "~/components/tubArticle.vue";
defineOptions({
  name: 'CountryArticle',
})
</script>
<style scoped>
.country-block{
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>