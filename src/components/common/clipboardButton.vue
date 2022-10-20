<template>
  <i class="fad clipboard-icon" :class="showCheck ? 'fa-clipboard-check text-lime-600 animate-bounce opacity-100' : 'fa-clipboard text-brand-midblue opacity-50'" title="Copy to clipboard"  @click="copyToClipboard(dataToCopy)" />
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