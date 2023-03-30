<template>
  <header :class="{ texto: true, tamanho: estaAtivo }">Header</header>
  <button @click="ativar()">ativar</button>
</template>

<script setup>
import { ref } from 'vue'

let estaAtivo = ref(true)
function ativar() {
  estaAtivo.value = !estaAtivo.value
}
</script>

<style lang="scss">
.texto {
  color: aquamarine;
}
.tamanho {
  font-size: 60px;
}
</style>
