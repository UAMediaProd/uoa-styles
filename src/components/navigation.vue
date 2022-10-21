<template>
  <div id="Navigation" class="component-item">
    <h3>Navigation</h3>
    <h4 class="adx-markup-label">Nav Table</h4>

    <div v-html="htmlCode"></div>

    <div class="flex">
      <clipboard-button :data-to-copy="htmlCode" />
      <pre class="w-full"><code class="language-markup">{{ comment }}{{ htmlCode }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const comment = '<!-- custom navigation table HTML usage -->\n'
const htmlCode = '<ul class="adx-nav-table">\n' +
  '  <li class="full"><h4><a href="#">About this course</a></h4></li>\n' +
  '  <li><h4><a href="#">Module 1</a></h4>\n' +
  '    <p>Digital Security</p></li>\n' +
  '  <li><h4><a href="#">Module 2</a></h4>\n' +
  '    <p>Security Audit</p></li>\n' +
  '  <li><h4><a href="#">Module 3</a></h4>\n' +
  '    <p>Cyber Security Attacks</p></li>\n' +
  '  <li><h4><a href="#">Module 4</a></h4>\n' +
  '    <p>Security Investigation</p></li>\n' +
  '  <li><h4><a href="#">Module 5</a></h4>\n' +
  '    <p>Security Management</p></li>\n' +
  '  <li><h4><a href="#">Module 6</a></h4>\n' +
  '    <p>Privacy and Ethics</p></li>\n' +
  '  <li class="full"><h4><a href="#">Online Orientations</a></h4>\n' +
  '    <p>Seperate MyUni course</p></li>\n' +
  '</ul>'

</script>