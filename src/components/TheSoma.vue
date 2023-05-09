<template>
  <div>
    <label for="">Da uma somada</label>
    <input type="number" v-model="valorUm" />
    <input type="number" v-model="valorDois" />
    <button @click="adicionar()">adicionar</button>
    <ul>
      <li v-for="(resultado, index) in lista" :key="resultado.index">
        <p>{{ soma[index] }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
let valorUm = ''
let valorDois = ''
const lista = reactive([])

const soma = computed(() => {
  return lista.map((item) => item.valorUm + item.valorDois)
})

function adicionar() {
  lista.push({ valorUm, valorDois })
}
</script>

<style lang="scss" scoped>
li {
  padding: 10px;
  list-style: none;
  background-color: #333;
  margin: 20px 0px;
  border-radius: 4px;
}
</style>
