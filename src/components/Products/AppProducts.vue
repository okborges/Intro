<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import AppProduct from './AppProduct.vue'

const store = useStore()
const products = computed(() => store.state.products)
console.log(products.value)
</script>

<template>
  <div>produtos</div>
  <AppProduct v-for="product in products" :key="product.id" :product="product" />
</template>

<style lang="scss" scoped></style>
