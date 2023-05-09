<template>
  <div v-show="showMoney">dinheirinho: {{ money }}</div>
  <div v-if="acessLevel === 1">admin</div>
  <div v-else-if="acessLevel === 2">Marketing</div>
  <div v-else>User</div>
</template>

<script setup>
let acessLevel = ''
let showMoney = true
let money = 100
</script>

<style lang="scss" scoped></style>
