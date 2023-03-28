<script setup>
import { RouterView } from 'vue-router'

import TheHeader from './components/TheHeader.vue'

let showHeader = true
let showMoney = true
let money = 100

let acessLevel = ''

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
  },
  {
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    alt: 'foto bonita4'
  },
  {
    id: 5,
    title: 'natus nisi omnis corporis facere molestiae rerum in',
    url: 'https://via.placeholder.com/150/f66b97',
    alt: 'foto bonita5'
  }
]
</script>

<template>
  <main>
    <div class="teste">
      <TheHeader v-if="showHeader" />
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
  </main>

  <RouterView />
</template>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
  text-align: center;

  li {
    list-style: none;
    background-color: #333;
    margin: 20px 0px;
  }
}
</style>
