<template>
  <div>
    <div>
      <div class="team-body">
        <div class="team-round"></div>
        <div class="team-name">Имя Фамилия</div>
        <div class="name-text">Информация</div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.team-body {
  width: 100%;
  height: 766px;
  padding: 210px 160px;
  border-radius: 34px;
  background: #FFFFFF;
  position: relative;
}

.team-round {
  background: #D9D9D9;
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
}

.team-name{
  font-family: Montserrat;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  text-align: center;
}

.name-text{
  font-family: Montserrat;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  margin-top: 30px;
}
</style>