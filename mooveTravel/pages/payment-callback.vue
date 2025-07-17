<template>
  <div class="payment-callback">
    <div v-if="status === 'success'" class="callback-block success">
      <div class="icon success-icon">✔️</div>
      <h1>Оплата прошла успешно!</h1>
      <p>Ваш гид был отправлен на указанный вами email.</p>
      <NuxtLink to="/" class="callback-btn">На главную</NuxtLink>
    </div>
    <div v-else-if="status === 'fail'" class="callback-block fail">
      <div class="icon fail-icon">❌</div>
      <h1>Оплата не удалась или отменена</h1>
      <p>Проверьте данные и попробуйте снова.</p>
      <NuxtLink to="/" class="callback-btn">На главную</NuxtLink>
    </div>
    <div v-else class="callback-block loading">
      <div class="icon loading-icon">⏳</div>
      <h1>Проверяем статус оплаты...</h1>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRuntimeConfig } from '#app'
import axios from 'axios'

const status = ref(null)
const route = useRoute()
const config = useRuntimeConfig()

onMounted(async () => {
  const orderId = route.query.orderId
  if (orderId) {
    try {
      const response = await axios.get(`http://localhost:1337/api/tour-order/alfa-status`, {
        params: { orderId },
        headers: {
          Authorization: `Bearer ${config.public.API_ORDER_TOKEN}`,
        },
      })
      const result = response.data
      if (result.orderStatus === 2) {
        status.value = 'success'
      } else {
        status.value = 'fail'
      }
    } catch (e) {
      status.value = 'fail'
    }
  } else {
    status.value = 'fail'
  }
})
</script>
<style scoped>
.payment-callback {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7fa;
}
.callback-block {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.08);
  padding: 48px 32px 36px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  font-size: 54px;
  margin-bottom: 18px;
}
.success-icon {
  color: #1a7f1a;
}
.fail-icon {
  color: #c75454;
}
.loading-icon {
  color: #888;
}
h1 {
  font-size: 2rem;
  margin-bottom: 12px;
  font-weight: 700;
}
p {
  font-size: 1.1rem;
  margin-bottom: 24px;
}
.callback-btn {
  display: inline-block;
  padding: 12px 32px;
  background: #C75454;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s;
}
.callback-btn:hover {
  background: #a13e3e;
}
</style> 