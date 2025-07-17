<template>
  <div class="payment-callback">
    <h1>Статус оплаты</h1>
    <div v-if="status === 'success'">
      <p>Оплата прошла успешно!</p>
    </div>
    <div v-else-if="status === 'fail'">
      <p>Оплата не удалась или отменена.</p>
    </div>
    <div v-else>
      <p>Проверяем статус оплаты...</p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from '#app'
import axios from 'axios'
import { useRuntimeConfig } from '#app'

const status = ref(null)
const route = useRoute()
const config = useRuntimeConfig()

onMounted(async () => {
  const orderId = route.query.orderId
  if (orderId) {
    try {
      // Запрос к вашему Strapi-прокси
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
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}
</style> 