<template>
  <div id="Images" class="component-item">
    <h3>Figures and Images</h3>
    <h4 class="adx-markup-label">Default landscape image set to 80%</h4>

    <figure class="w80" style="margin: auto;text-align: center;">
      <img src="../assets/images/spacex-unsplash.jpg" alt="" class="top">
      <figcaption>
        <strong>Figure 1.1: </strong>This is one hell of a rocket with its width set to 80%.<br />
        <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
      </figcaption>
    </figure>

    <div class="flex">
      <clipboard-button :data-to-copy="figureHtml.w80" />
      <pre class="w-full"><code class="language-markup">{{ figureHtml.w80Comment }}{{ figureHtml.w80 }}</code></pre>
    </div>

    <h4 class="adx-markup-label">Default portrait image set to 40%</h4>

    <figure class="w40" style="margin: auto;text-align: center;">
      <img src="../assets/images/adam-miller-unsplash.jpg" alt="" class="top">
      <figcaption>
        <strong>Figure 1.2:</strong> Astronaut with its width set to 40%.<br />
        <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
      </figcaption>
    </figure>

    <div class="flex">
      <clipboard-button :data-to-copy="figureHtml.w40" />
      <pre class="w-full"><code class="language-markup">{{ figureHtml.w40Comment }}{{ figureHtml.w40 }}</code></pre>
    </div>

    <h4 class="adx-markup-label">Aside image</h4>

    <aside class="adx image">
      <figure>
        <img src="../assets/images/dog-unsplash.jpg" alt="" class="top max-h-[240px]">
        <figcaption>
          <strong>Figure 1.3:</strong> Good doggo<br />
          <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
        </figcaption>
      </figure>
    </aside>

    <p>I'm baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p>
    <br /><br /><br /><br /><br /><br /><br />

    <div class="flex">
      <clipboard-button :data-to-copy="figureHtml.aside" />
      <pre class="w-full"><code class="language-markup">{{ figureHtml.asideComment }}{{ figureHtml.aside }}</code></pre>
    </div>

    <h4 class="adx-markup-label">Side by side</h4>

    <section class="adx-gallery two-up">
      <figure>
        <img src="../assets/images/persona.jpg" alt="" class="top">
      </figure>
      <figure>
        <img src="../assets/images/persona.jpg" alt="" class="top">
      </figure>
      <figcaption>
        <strong>Figure 1.4:</strong> Two images side-by-side<br />
        <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
      </figcaption>
    </section>

    <div class="flex">
      <clipboard-button :data-to-copy="figureHtml.side" />
      <pre class="w-full"><code class="language-markup">{{figureHtml.sideComment}}{{figureHtml.side}}</code></pre>
    </div>

    <h4 class="adx-markup-label">Image excerpt</h4>

    <figure class="w60" style="margin: auto;text-align: center;">
      <img src="../assets/images/brand-eg.png" alt="" class="top">
      <figcaption>
        <strong>Figure 1.4:</strong> Uses the w60 task to set the width to 60%.<br />
        <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
      </figcaption>
    </figure>

    <div class="flex">
      <clipboard-button :data-to-copy="figureHtml.small" />
      <pre class="w-full"><code class="language-markup">{{figureHtml.smallComment}}{{figureHtml.small}}</code></pre>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const figureHtml = {
  w80Comment: '<!-- Portrait image HTML usage -->\n',
  w80: '<figure class="w80" style="margin: auto;text-align: center;">\n' +
    '  <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/spacex-unsplash.d9507b06.jpg" alt="" class="top">\n' +
    '  <figcaption>\n' +
    '    <strong>Figure 1.1:</strong> This is one hell of a rocket with its width set to 80%.<br />\n' +
    '    <em><a href="http://www.unsplash.com/" target="_blank" >http://www.unsplash.com/</a></em>\n' +
    '  </figcaption>\n' +
    '</figure>',
  w40Comment: '<!-- Landscape image HTML usage -->\n',
  w40: '<figure class="w40" style="margin: auto;text-align: center;">\n' +
    '  <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/adam-miller-unsplash.18bc8982.jpg" alt="" class="top">\n' +
    '  <figcaption>\n' +
    '    <strong>Figure 1.2:</strong> Astronaut with its width set to 40%.<br />\n' +
    '    <em><a href="http://www.unsplash.com/" target="_blank" >http://www.unsplash.com/</a></em>\n' +
    '  </figcaption>\n' +
    '</figure>',
  asideComment: '<!-- Aside image with paragraph text HTML usage -->\n',
  aside: '<aside class="adx image">\n' +
    '  <figure>\n' +
    '    <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/dog-unsplash.bc1e3ba7.jpg" alt="" class="top">\n' +
    '    <figcaption>\n' +
    '      <strong>Figure 1.3:</strong> Good doggo<br />\n' +
    '      <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>\n' +
    '    </figcaption>\n' +
    '  </figure>\n' +
    '</aside>\n\n' +
    '<p>I\'m baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p>',
  sideComment: '<!-- Side-by-side image gallery HTML usage  -->\n',
  side: '<section class="adx-gallery two-up">\n' +
    '  <figure>\n' +
    '    <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/persona.987c5b3c.jpg" alt="" class="top">\n' +
    '  </figure>\n' +
    '  <figure>\n' +
    '    <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/persona.987c5b3c.jpg" alt="" class="top">\n' +
    '  </figure>\n' +
    '  <figcaption>\n' +
    '    <strong>Figure 1.4:</strong> Two images side-by-side<br />\n' +
    '    <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>\n' +
    '  </figcaption>\n' +
    '</section>',
  smallComment: '<!-- Small image excerpt HTML usage -->\n',
  small: '<figure class="w60" style="margin: auto;text-align: center;">\n' +
    '  <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/brand-eg.9337999c.png" alt="" class="top">\n' +
    '  <figcaption>\n' +
    '    <strong>Figure 1.4:</strong> Uses the w60 task to set the width to 60%.<br />\n' +
    '    <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>\n' +
    '  </figcaption>\n' +
    '</figure>'
}

</script>