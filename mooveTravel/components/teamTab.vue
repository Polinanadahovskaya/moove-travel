<template>
  <div class="team-tab-root">
    <div class="team-body">
      <div class="team-round" :style="{ backgroundImage: `url('${props.imgUrl}')` }"></div>
      <div class="team-name">{{ element.name }}</div>
      <div class="name-first-text">{{element.firstText}}</div>
      <div class="name-text">{{element.text}}</div>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: 'teamTab',
})

const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  element: {
    type: Array,
    required: false
  }
})
</script>
<style scoped>
.team-tab-root {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.team-body {
  flex: 1 1 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 210px 29px 57px;
  border-radius: 34px;
  background: #FFFFFF;
  position: relative;
}

.team-round {
  border: 25px solid #FFC472;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 305px;
  max-height: 305px;
  border-width: 25px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
}

.team-name{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  text-align: center;
  margin-bottom: 29px;
  @media (max-width: 1650px) {
    font-size: 43px;
  }
}

.name-first-text{
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  margin-bottom: 29px;

  @media (max-width: 1650px) {
    font-size: 20px;
  }
}

.name-text{
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  text-align: center;

  @media (max-width: 1650px) {
    font-size: 22px;
  }
}
</style>