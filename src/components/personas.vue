<template>
  <div id="Personas" class="component-item">
    <h3>Persona Boxes</h3>
    <div v-for="persona in personas">
      <h4 class="adx-markup-label">{{ persona.name }} Persona</h4>

      <div :class="persona.class">
        <div class="persona-image">
          <img src="../assets/images/persona.jpg" alt="" class="persona">
        </div>
        <div class="persona-content">
          <h5>Persona Name</h5>
          <p>Testing content!</p>
        </div>
      </div>

      <div class="flex">
        <clipboard-button :data-to-copy="getPersonaHtml(persona.class)" />
        <pre class="w-full"><code class="language-markup">{{ getPersonaHtml(persona.class) }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const personas = [
  { name: 'base', class: 'adx-cue persona' },
  { name: 'blue', class: 'adx-cue persona-brand-midblue' },
  { name: 'purple', class: 'adx-cue persona-question' },
  { name: 'orange', class: 'adx-cue persona-warning' },
  { name: 'green', class: 'adx-cue persona-positive' },
]

function getPersonaHtml (classNames) {
  return '<div class="' + classNames + '">\n' +
    '  <div class="persona-image">\n' +
    '    <img src="image.png" alt="" class="persona">\n' +
    '  </div>\n' +
    '  <div class="persona-content">\n' +
    '    <h5>Persona Name</h5>\n' +
    '    <p>Testing content!</p>\n' +
    '  </div>\n' +
    '</div>'
}
</script>