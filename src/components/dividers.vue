<template>
  <div id="Dividers" class="component-item">
    <h3>Dividers &amp; Signposts</h3>

    <div v-for="item in dividers">
      <h4 class="adx-markup-label">{{ item.name }}</h4>
      <div v-html="item.html"></div>

      <div class="flex">
        <clipboard-button :data-to-copy="item.html" />
        <pre class="w-full"><code class="language-markup">{{ item.comment }}{{ item.html }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const dividers = [
  {
    name: 'Horizontal Rule',
    comment: '<!-- Horizontal rules HTML Usage -->\n',
    html: '<hr class="adx-gradient-brand-midblue">',
  },
  {
    name: 'Subsection',
    comment: '<!-- Custom subsection navigation HTML Usage -->\n',
    html: '<nav>\n' +
      '  <ul class="adx-subsection">\n' +
      '    <li><a href="#">Section Name</a></li>\n' +
      '    <li><a href="#" data-counter="1.1">Sub-section Name</a></li>\n' +
      '  </ul>\n' +
      '</nav>',
  },
  {
    name: 'Stepped Sequence',
    comment: '<!-- Stepped Sequence navigation element HTML Usage -->\n',
    html: '<nav class="adx-sequence">\n' +
      '  <ul class="">\n' +
      '    <li class="complete">Step 1</li>\n' +
      '    <li class="progress">Step 2</li>\n' +
      '    <li>Step 3</li>\n' +
      '    <li>Step 4</li>\n' +
      '    <li>Step 5</li>\n' +
      '  </ul>\n' +
      '</nav>',
  }
]

</script>