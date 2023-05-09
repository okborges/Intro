<script setup>
import { ref } from 'vue'

let estaAtivo = ref(true)
function ativar() {
  estaAtivo.value = !estaAtivo.value
  console.log(estaAtivo.value)
}
</script>

<template>
  <header :class="{ texto: true, tamanho: estaAtivo }">Header</header>
  <button @click="ativar()">ativar</button>
</template>

<style lang="scss">
header {
  transition: 0.2s;
}
.texto {
  color: aquamarine;
}
.tamanho {
  font-size: 60px;
}
</style>
