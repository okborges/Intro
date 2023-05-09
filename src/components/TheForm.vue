<template>
  <div>
    <form action="http://google.com" @submit.prevent="submeter">
      <input type="text" v-model="nome" />
      <input type="number" v-model="idade" />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
let idade = 99
let nome = 'rafael'
function submeter() {
  console.log(`submetido com sucesso ${nome}`)
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
