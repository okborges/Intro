<template>
  <div :class="baseClass">Seu formulario foi enviado com sucesso!</div>
</template>

<script setup>
import { computed } from 'vue'
const variant = defineProps({
  variant: String
})
const baseClass = computed(() => {
  return ['alert', variant.variant ? `alert_${variant.variant}` : '']
})
</script>

<style lang="scss" scoped>
.alert {
  padding: 10px;
  border-radius: 5px;
  background-color: #aaaaaa;
  color: #ffffff;
}
.alert_sucess {
  background-color: #0e480e;
}
.alert_error {
  background-color: #890707;
}
</style>
