<script setup>
import { RouterView } from 'vue-router'

import TheHeader from './components/TheHeader.vue'

let showHeader = true
let showMoney = true
let money = 100

let acessLevel = ''
</script>

<template>
  <header>
    <div class="teste">
      <TheHeader v-if="showHeader" />
      <div v-show="showMoney">dinheirinho: {{ money }}</div>
      <div v-if="acessLevel === 1">admin</div>
      <div v-else-if="acessLevel === 2">Marketing</div>
      <div v-else>User</div>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.teste {
  display: grid;
}
header {
  justify-content: center;
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
