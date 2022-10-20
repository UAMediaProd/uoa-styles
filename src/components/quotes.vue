<template>
  <div id="Quotes" class="component-item">
    <h3>Quotes</h3>
    <div v-for="(quote, index) in quotes">
      <h4 class="adx-markup-label">{{ quote.name }}</h4>

      <blockquote :class="quote.class">
        <p>You probably haven't heard of them artisan tbh, scenester slow-carb ethical shabby chic semiotics. Pickled chartreuse helvetica live-edge skateboard viral, 90's keffiyeh tofu roof party authentic direct trade tattooed 8-bit.</p>
        <cite>Albert Einstein</cite>
      </blockquote>

      <div class="flex">
        <clipboard-button :data-to-copy="getQuoteHtml(index)" />
        <pre class="w-full"><code class="language-markup">{{ getQuoteHtml(index) }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const quotes = [
  { name: 'Blockquote', class: '' },
  { name: 'Fancy Blockquote', class: 'fancyquote' }
]

const text = 'You probably haven\'t heard of them artisan tbh, scenester slow-carb ethical shabby chic semiotics. Pickled chartreuse helvetica live-edge skateboard viral, 90\'s keffiyeh tofu roof party authentic direct trade tattooed 8-bit.'

const cite = 'Albert Einstein'

function getQuoteHtml (index) {
  return '<!-- ' + quotes[index].name + ' HTML Usage -->\n' +
    `<blockquote${quotes[index].class ? ' class="' + quotes[index].class + '"' : ''}>\n` +
    '  <p>You probably haven\'t heard of them artisan tbh, scenester slow-carb ethical shabby chic semiotics. Pickled chartreuse helvetica live-edge skateboard viral, 90\'s keffiyeh tofu roof party authentic direct trade tattooed 8-bit.</p>\n' +
    '  <cite>Albert Einstein</cite>\n' +
    '</blockquote>'
}
</script>