<template>
  <div id="Headings" class="component-item">
    <h3>Headings</h3>
    <h4 class="adx-markup-label">Default Canvas Headings</h4>
    <p>Default heading styles for native course builds in Canvas.</p>
    <div class="w-3/5 m-auto">
      <h1 class="my-4">Heading 1</h1>
      <p><em>Note:
        <code>H1</code> elements are not used in MyUni content; Canvas page headers – unless overridden by CIDILabs – are automatically level 1 headers and content starts at
        <code>H2</code>.</em></p>
      <h2 class="my-10">Heading 2</h2>
      <h3 class="my-10">Heading 3</h3>
      <h4 class="my-10">Heading 4</h4>
      <h5 class="my-10">Heading 5</h5>
      <h6 class="my-10">Heading 6</h6>
    </div>

    <div class="flex">
      <clipboard-button :data-to-copy="htmlCode" />
      <pre class="w-full"><code class="language-markup">{{ htmlComment }}{{ htmlCode }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const htmlComment = '<!-- Headings HTML Usage -->\n'

const htmlCode = '<h1>Heading 1</h1>\n' +
  '<h2>Heading 2</h2>\n' +
  '<h3>Heading 3</h3>\n' +
  '<h4>Heading 4</h4>\n' +
  '<h5>Heading 5</h5>\n' +
  '<h6>Heading 6</h6>'
</script>