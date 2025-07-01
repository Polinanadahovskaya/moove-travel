<template>
  <div>
    <div>
      <div class="gid-header">
        <div class="gid_back" @click="router.back()">← Назад</div>
        <div class="gid_tittle">СТРАНА</div>
      </div>
      <div class="gid-tabs">
        <div v-for="a in 3">
          <gid-coutry-tab/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import gidCoutryTab from '~/components/gidCoutryTab.vue'
import {useRouter} from '#app'

defineOptions({
  name: "CountryGid",
})
const router = useRouter()
</script>
<style scoped>
.gid-header{
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding-left: 182px;
  padding-right: 182px;
  height: 245px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(273.87deg, #D27A00 3.64%, #F89C1D 76.11%);
  @media (max-width: 768px) {
    height: 82px;
    padding: 20px 20px 30px;
    justify-content: flex-end;
  }
}

.gid_tittle{
  font-weight: 700;
  font-size: 66px;
  line-height: 100%;
  color:white;
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.gid_back{
  font-weight: 700;
  font-size: 36px;
  line-height: 100%;
  color:white;
  text-decoration: none;
  align-self: flex-end;
  cursor: pointer;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.gid-tabs{
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 70px auto 160px;
}
</style>