<template>
  <div class="popup-thankyou">
    <div class="close-btn" @click="$emit('close')">×</div>
    <div class="plane-path">
      <img src="/src/assets/images/planePop.svg" alt="plane" class="plane-img"/>
    </div>
    <div class="thankyou-content">
      <div class="thankyou-title">СПАСИБО!</div>
      <div class="thankyou-line"></div>
      <div class="thankyou-text">Заявка отправлена.<br>В скором времени мы свяжемся с вами.</div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
defineOptions({
  name: 'popupThankYou',
})
</script>

<style scoped lang="scss">
.popup-thankyou {
  position: relative;
  width: 60%;
  height: 50%;
  background: radial-gradient(circle at 30% 30%, #FFDADA 0%, #fff 100%);
  border-radius: 32px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 48px 48px 48px;
  overflow: hidden;
  @media (max-width: 1800px) {
    width: 50%;
    height: 70%;
  }
  @media (max-width: 1150px) {
    width: 80%;
    height: 80%;
  }
  @media (max-width: 600px) {
    width: 95vw;
    height: 340px;
    padding: 24px;
  }
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  color: #D36A6A;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #D36A6A;
  transition: background 0.2s;
}

.close-btn:hover {
  background: #ffeaea;
}

.thankyou-content {
  margin-top: 120px;
  margin-left: 0;
  z-index: 2;
}

.thankyou-title {
  font-size: 40px;
  font-weight: 700;
  color: #D36A6A;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.thankyou-line {
  width: 220px;
  height: 4px;
  background: #D36A6A;
  margin-bottom: 18px;
  border-radius: 2px;
}

.thankyou-text {
  font-size: 18px;
  color: #333;
  margin-top: 0;
  line-height: 1.4;
  @media (max-width: 700px) {
    font-size: 14px;
  }
}

.plane-path {
  position: absolute;
  right: 32px;
  top: 60px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.plane-img {
  position: absolute;
  top: 317px;
  right: -40px;
  transform: rotate(0deg);
  width: 500px;
  height: 1000px;
  @media (max-width: 2200px) {
    width: 400px;
    height: 800px;
    top: 150px;
  }
  @media (max-width: 1800px) {
    width: 300px;
    height: 400px;
    top: 130px;
  }
  @media (max-width: 1450px) {
    width: 200px;
    height: 400px;
  }
  @media (max-width: 1205px) {
    width: 250px;
    height: 300px;
    top: 71px;
  }
  @media (max-width: 705px) {
    width: 150px;
    height: 300px;
    top: 71px;
  }
  @media (max-width: 600px) {
    width: 150px;
    height: 210px;
    top: 71px;
  }
}

@media (max-width: 600px) {
  .thankyou-content {
    margin-top: 80px;
  }
}
</style> 