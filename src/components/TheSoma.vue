<template>
  <div>
    <label for="">Da uma somada</label>
    <input type="number" v-model="valorUm" />
    <input type="number" v-model="valorDois" />
    <button @click="adicionar">adicionar</button>
    <ul>
      <li v-for="(resultado, index) in lista" :key="index">
        <p>{{ resultado.soma }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let valorUm = ref('')
let valorDois = ref('')
const lista = ref([])

function adicionar() {
  const soma = parseInt(valorUm.value) + parseInt(valorDois.value)
  lista.value.push({ valorUm: valorUm.value, valorDois: valorDois.value, soma })
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
