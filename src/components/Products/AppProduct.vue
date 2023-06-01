<script setup>
import { useStore } from 'vuex'
const props = defineProps({
  product: Object
})

const store = useStore()

function addProduct() {
  store.commit('addProduct', props.product)
}
function removeProduct() {
  store.commit('removeProduct', props.product.id)
}
</script>

<template>
  <div>
    {{ product.name }} - R${{ product.price }} <br />
    <button @click="addProduct">adicionar</button>
    <button @click="removeProduct">remover</button>
  </div>
</template>

<style lang="scss" scoped>
div {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  button {
    margin: 10px 10px;
  }
}
</style>
