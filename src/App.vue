<script setup>
import { RouterView } from 'vue-router'
import { computed, reactive } from 'vue'

import TheHeader from './components/TheHeader.vue'

let acessLevel = ''
let idade = 99
let money = 100
let nome = 'rafael'
let showHeader = true
let showMoney = true
let valorUm = ''
let valorDois = ''
const lista = reactive([{ valorUm: 1, valorDois: 2 }])

const soma = computed(() => {
  return lista.forEach((element) => {
    element.valorUm + element.valorDois
  })
})

const todos = [
  {
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/150/92c952',
    alt: 'foto bonita1'
  },
  {
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    alt: 'foto bonita2'
  },
  {
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/150/24f355',
    alt: 'foto bonita3'
  }
]

function adicionar() {
  lista.push({ valorUm, valorDois })
}

function submeter() {
  console.log('submetido com sucesso')
}
</script>

<template>
  <main>
    <div class="teste">
      <TheHeader v-if="showHeader" />
      <br />
      <br />
      <br />
      <div v-show="showMoney">dinheirinho: {{ money }}</div>
      <div v-if="acessLevel === 1">admin</div>
      <div v-else-if="acessLevel === 2">Marketing</div>
      <div v-else>User</div>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </div>

    <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item.id }} -
        {{ item.title }}
        <img v-if="item.url" :src="item.url" :alt="item.alt" width="30" />
      </li>
    </ul>

    <br />
    <br />
    <br />

    <form action="http://google.com" @submit.prevent="submeter">
      <input type="text" v-model="nome" />
      <input type="number" v-model="idade" />
      <button type="submit">Enviar</button>
    </form>

    <br />
    <br />
    <br />
    <label for="">Da uma somada</label>
    <input type="number" v-model="valorUm" />
    <input type="number" v-model="valorDois" />
    <button @click="adicionar()">adicionar</button>
    <ul>
      <li v-for="resultado in lista" :key="resultado.index">
        <p>{{ soma }}</p>
      </li>
    </ul>
  </main>

  <RouterView />
</template>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
  text-align: center;

  li {
    padding: 10px;
    list-style: none;
    background-color: #333;
    margin: 20px 0px;
    border-radius: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
}
</style>
