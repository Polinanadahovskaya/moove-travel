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
  @media (max-width: 1200px) {
    padding: 97px 30px 38px;
    border-radius: 22px;
  }
  @media (max-width: 900px) {
    padding: 57px 28px 28px;
    border-radius: 12px;
  }
  @media (max-width: 768px) {
    padding: 47px 24px 18px;
    border-radius: 6px;
  }
}

.team-round {
  border: 25px solid #FFC472;
  border-radius: 50%;
  width: 305px;
  height: 305px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
  @media (max-width: 1200px) {
    width: 150px;
    height: 150px;
    border-width: 6px;
  }
  @media (max-width: 900px) {
    width: 110px;
    height: 110px;
    border-width: 6px;
  }
  @media (max-width: 768px) {
    width: 77px;
    height: 77px;
    border-width: 2px;
  }
}

.team-name{
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  text-align: center;
  margin-bottom: 29px;
  @media (max-width: 1650px) {
    font-size: 43px;
  }
  @media (max-width: 1300px) {
    font-size: 33px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    vertical-align: bottom;
    margin-bottom: 8px;

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
  @media (max-width: 1300px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 8px;
    vertical-align: bottom;
    margin-bottom: 8px;
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
  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 8px;
    vertical-align: bottom;
  }
}
</style>