<template>
  <code class="cursor-pointer hover:text-brand-midblue" title="Copy to clipboard" @click="copyToClipboard(dataToCopy)">{{ dataToCopy }} <i class="far" :class="showCheck ? 'fa-clipboard-check animate-bounce text-lime-600' : 'fa-clipboard'" /></code>
</template>

<script setup>
import { ref } from "vue";

defineProps(['dataToCopy'])

const showCheck = ref(false)

function copyToClipboard (data) {
  navigator.clipboard.writeText(data)

  showCheck.value = true
  setTimeout(() => {
    showCheck.value = false
  }, 1500)
}
</script>