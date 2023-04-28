<script setup>
import { computed } from 'vue'

const variant = defineProps({
  variant: String
})
const baseClass = computed(() => {
  return ['alert', variant.variant ? `alert_${variant.variant}` : '']
})

const emit = defineEmits(['close'])

function onClick() {
  emit('close')
}
</script>

<template>
  <div :class="baseClass">
    Seu formulario foi enviado com sucesso!
    <button @click="onClick()">X</button>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  padding: 10px;
  border-radius: 5px;
  background-color: #aaaaaa;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 20px;
  button {
    background-color: #ffffff;
    color: #000;
  }
}
.alert_sucess {
  background-color: #0e480e;
}
.alert_error {
  background-color: #890707;
}
</style>
