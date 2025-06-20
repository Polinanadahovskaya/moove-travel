<template>
  <div>
    <div class="tab-office">
      <div class="tab-text">Дополнительный текст в несколько строчек</div>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: "TubOffice",
})
</script>
<style scoped>
.tab-office{
  width: 100%;
  height: 759px;
  border-radius: 34px;
  background: #D9D9D9;
  padding: 30px 40px;
  display: flex;
  align-items: flex-end;
}

.tab-text{
  width: 100%;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  vertical-align: middle;
  font-variant: small-caps;
  height: 180px;
  padding: 74px 77px;
  border-radius: 28px;
  box-shadow: 0px 0px 60px 0px #0000001A;
  background: #FFFFFF;
  padding: 60px 75px;
}
</style>