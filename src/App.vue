<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { useStore } from 'vuex'

import TheHeader from './components/TheHeader.vue'
import TheAcess from './components/TheAcess.vue'
import TheComponente from './components/TheComponente.vue'
import UiAlert from './components/UiAlert.vue'
import AppProducts from './components/Products/AppProducts.vue'
import TesteImg from './components/TesteImg.vue'
import TheForm from './components/TheForm.vue'
import TheSoma from './components/TheSoma.vue'

const showAlert = ref(true)
const store = useStore()
const usuario = store.state.user

function fechar() {
  showAlert.value = false
}

console.log(store.state.user)
</script>

<template>
  <main>
    <TheHeader />
    <br />
    <br />
    <br />
    <TheAcess />
    <br />
    <br />
    <br />
    <TesteImg />
    <br />
    <br />
    <br />
    <TheForm />
    <br />
    <br />
    <br />
    <TheSoma />
    <br />
    <br />
    <br />
    <TheComponente>Apenas um teste de Slot</TheComponente>
    <br />
    <br />
    <br />
    <UiAlert v-if="showAlert" variant="sucess" @close="fechar()" />
    <br />
    <br />
    <br />
    <h4>Estou sendo chamado pelo store {{ usuario }}</h4>
    <br />
    <br />
    <br />
    <AppProducts />
  </main>

  <RouterView />
</template>

<style lang="scss" scoped>
main {
  display: grid;
  place-items: center;
  text-align: center;
}
</style>
