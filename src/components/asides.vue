<template>
  <div id="Asides" class="component-item">
    <h3>Asides</h3>

    <div v-for="(item, index) in htmlData">
      <h4 class="adx-markup-label">{{ item.name }}</h4>
      <div v-html="item.aside + item.paragraph"></div>
      <br v-for="n in (3 - index)" />

      <div class="flex">
        <clipboard-button :data-to-copy="item.aside" />
        <pre class="w-full"><code class="language-markup">{{ item.comment }}{{ item.aside }}{{ item.paragraph }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const htmlData = [
  {
    name: 'Keypoints Aside',
    comment: '<!-- Keypoints Aside HTML Usage -->\n',
    aside: '<aside class="adx keypoints">\n' +
      '  <header>\n' +
      '    <h3>Keypoints</h3>\n' +
      '  </header>\n' +
      '  <p>There are some really important things here:</p>\n' +
      '  <ul>\n' +
      '    <li>There\'s the first thing.</li>\n' +
      '    <li>Then the second thing.</li>\n' +
      '    <li>And finally the last thing.</li>\n' +
      '  </ul>\n' +
      '</aside>',
    paragraph: '\n<p>Hi there whats happening hope things are going well. I\'m baby chartreuse cold-pressed green juice church-key, mixtape enamel pin migas shoreditch. Biodiesel af flannel, fixie literally kitsch slow-carb sriracha post-ironic. Live-edge celiac skateboard pork belly. Whatever pug poke hell of wolf franzen squid. Try-hard shoreditch ramps, church-key franzen artisan occupy chia copper mug lumbersexual. Tousled chambray artisan whatever next level brunch umami semiotics bespoke woke enamel pin typewriter pinterest. Live-edge celiac skateboard pork belly. Whatever pug poke hell of wolf franzen squid. Try-hard shoreditch ramps, church-key franzen artisan occupy chia copper mug lumbersexual. Tousled chambray artisan whatever next level brunch umami semiotics bespoke woke enamel pin typewriter pinterest.</p>'
  },
  {
    name: 'Left-aligned Aside',
    comment: '<!-- Left Aside HTML Usage -->\n',
    aside: '<aside class="adx left">\n' +
      '  <p>There are some really important things here:</p>\n' +
      '  <ul>\n' +
      '    <li>There\'s the first thing.</li>\n' +
      '    <li>Then the second thing.</li>\n' +
      '    <li>And finally the last thing.</li>\n' +
      '  </ul>\n' +
      '</aside>',
    paragraph: '\n<p>Hi there whats happening hope things are going well. I\'m baby chartreuse cold-pressed green juice church-key, mixtape enamel pin migas shoreditch. Biodiesel af flannel, fixie literally kitsch slow-carb sriracha post-ironic. Live-edge celiac skateboard pork belly. Whatever pug poke hell of wolf franzen squid. Try-hard shoreditch ramps, church-key franzen artisan occupy chia copper mug lumbersexual. Tousled chambray artisan whatever next level brunch umami semiotics bespoke woke enamel pin typewriter pinterest. Live-edge celiac skateboard pork belly. Whatever pug poke hell of wolf franzen squid. Try-hard shoreditch ramps, church-key franzen artisan occupy chia copper mug lumbersexual. Tousled chambray artisan whatever next level brunch umami semiotics bespoke woke enamel pin typewriter pinterest.</p>'
  },
]
</script>