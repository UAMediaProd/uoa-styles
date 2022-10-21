<template>
  <div id="Lists" class="component-item">
    <h3>Lists</h3>
    <div v-for="list in htmlData">
      <h4 class="adx-markup-label">{{ list.name }}</h4>
      <div v-html="list.code"></div>

      <div class="flex">
        <clipboard-button :data-to-copy="list.code" />
        <pre class="w-full"><code class="language-markup">{{ list.comment }}{{ list.code }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const htmlData = [
  {
    name: 'Fancy Ordered List',
    comment: '<!-- Fancy ordered list HTML Usage -->\n',
    code: '<ol class="fancy-ol">\n' +
      '  <li>Gather your ingredients</li>\n' +
      '  <li>Pour all the ingreients into a bowl</li>\n' +
      '  <li>Stir and mix together</li>\n' +
      '  <li>Place into the over to cook</li>\n' +
      '  <li>Remove from the oven and eat</li>\n' +
      '  <li>Meditation cray snackwave raw denim thundercats banh mi. XOXO pour-over unicorn bushwick YOLO brunch. Flexitarian direct trade hammock cloud bread art party occupy. Slow-carb glossier literally thundercats truffaut, church-key quinoa tousled. Pour-over asymmetrical brooklyn narwhal, hell of waistcoat 8-bit irony.</li>\n' +
      '</ol>'
  },
  {
    name: 'Step List',
    comment: '<!-- Step list HTML Usage -->\n',
    code: '<ul class="step-list">\n' +
      '  <li class="step-2">Gather your ingredients</li>\n' +
      '  <li>Pour all the ingreients into a bowl</li>\n' +
      '  <li>Stir and mix together</li>\n' +
      '  <li>Place into the over to cook</li>\n' +
      '  <li>Remove from the oven and eat</li>\n' +
      '  <li>Meditation cray snackwave raw denim thundercats banh mi. XOXO pour-over unicorn bushwick YOLO brunch. Flexitarian direct trade hammock cloud bread art party occupy. Slow-carb glossier literally thundercats truffaut, church-key quinoa tousled. Pour-over asymmetrical brooklyn narwhal, hell of waistcoat 8-bit irony.</li>\n' +
      '</ul>'
  }
]

</script>