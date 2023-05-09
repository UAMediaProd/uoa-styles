<template>
  <div id="Images" class="component-item">
    <h3>Figures and Images</h3>
    <h4 class="adx-markup-label">Default landscape image set to 80%</h4>

    <figure class="w80" style="margin: auto;text-align: center;">
      <img src="../assets/images/spacex-unsplash.jpg" alt="" class="top">
      <figcaption>
        <strong>Figure 1.1.1: </strong>This is one hell of a rocket with its width set to 80%.<br />
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
        <strong>Figure 1.1.2:</strong> Astronaut with its width set to 40%.<br />
        <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
      </figcaption>
    </figure>

    <div class="flex">
      <clipboard-button :data-to-copy="figureHtml.w40" />
      <pre class="w-full"><code class="language-markup">{{ figureHtml.w40Comment }}{{ figureHtml.w40 }}</code></pre>
    </div>

    <h4 class="adx-markup-label">Aside Left image</h4>

    <div class="bs-container">
      <div class="bs-row">
        <div class="bs-col-md">
          <figure>
            <img src="../assets/images/dog-unsplash.jpg" alt="" style="margin: auto; max-width: 80%;">
            <figcaption>
              <strong>Figure 1.1.3:</strong> Good doggo.<br />
              <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
            </figcaption>
          </figure>
        </div>
        <div class="bs-col-md-8">
          <p>I'm baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p>
        </div>
      </div>
    </div>

    <div class="flex">
      <clipboard-button :data-to-copy="figureHtml.asideLeft" />
      <pre class="w-full"><code class="language-markup">{{ figureHtml.asideLeftComment }}{{ figureHtml.asideLeft }}</code></pre>
    </div>

    <h4 class="adx-markup-label">Aside Right image</h4>

    <div class="bs-container">
      <div class="bs-row">
        <div class="bs-col-md-8">
          <p>I'm baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p>
        </div>
        <div class="bs-col-md">
          <figure>
            <img src="../assets/images/dog-unsplash.jpg" alt="" style="margin: auto; max-width: 80%;">
            <figcaption>
              <strong>Figure 1.1.4:</strong> Good doggo.<br />
              <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div class="flex">
      <clipboard-button :data-to-copy="figureHtml.asideRight" />
      <pre class="w-full"><code class="language-markup">{{ figureHtml.asideRightComment }}{{ figureHtml.asideRight }}</code></pre>
    </div>

    <h4 class="adx-markup-label">Side by side</h4>

    <section class="adx-gallery two-up">
      <figure>
        <img src="../assets/images/persona.jpg" alt="" class="top">
        <figcaption>
          <strong>Figure 1.1.5(a):</strong> Image on the left.<br />
          <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
        </figcaption>
      </figure>
      <figure>
        <img src="../assets/images/persona.jpg" alt="" class="top">
        <figcaption>
          <strong>Figure 1.1.5(b):</strong> Image on the right.<br />
          <em>Source: <a href="http://www.unsplash.com/" target="_blank" class="text-brand-midblue underline">http://www.unsplash.com/</a></em>
        </figcaption>
      </figure>
    </section>

    <div class="flex">
      <clipboard-button :data-to-copy="figureHtml.side" />
      <pre class="w-full"><code class="language-markup">{{figureHtml.sideComment}}{{figureHtml.side}}</code></pre>
    </div>

    <h4 class="adx-markup-label">Image excerpt</h4>

    <figure class="w60" style="margin: auto;text-align: center;">
      <img src="../assets/images/brand-eg.png" alt="" class="top">
      <figcaption>
        <strong>Figure 1.1.6:</strong> Uses the w60 task to set the width to 60%.<br />
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
    '    <strong>Figure 1.1.1:</strong> This is one hell of a rocket with its width set to 80%.<br />\n' +
    '    <em><a href="http://www.unsplash.com/" target="_blank" >http://www.unsplash.com/</a></em>\n' +
    '  </figcaption>\n' +
    '</figure>',
  w40Comment: '<!-- Landscape image HTML usage -->\n',
  w40: '<figure class="w40" style="margin: auto;text-align: center;">\n' +
    '  <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/adam-miller-unsplash.18bc8982.jpg" alt="" class="top">\n' +
    '  <figcaption>\n' +
    '    <strong>Figure 1.1.2:</strong> Astronaut with its width set to 40%.<br />\n' +
    '    <em><a href="http://www.unsplash.com/" target="_blank" >http://www.unsplash.com/</a></em>\n' +
    '  </figcaption>\n' +
    '</figure>',
  asideLeftComment: '<!-- Aside Left image with paragraph text HTML usage -->\n',
  asideLeft: '<div class="bs-row">\n' +
   '  <div class="bs-col-md">\n' +
   '    <figure>\n' +
   '      <img src="../assets/images/dog-unsplash.jpg" alt="" style="margin: auto; max-width: 80%;">\n' +
   '        <figcaption>\n' +
   '          <strong>Figure 1.1.3:</strong> Good doggo<br />\n' +
   '          <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>\n' +
   '        </figcaption>\n' +
   '    </figure>\n' +
   '  </div>\n' +
   '  <div class="bs-col-md-8">\n' +
   '    <p>I\'m baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p>\n' +
   '  </div>\n' +
   '</div>',
  asideRightComment: '<!-- Aside Right image with paragraph text HTML usage -->\n',
  asideRight: '<div class="bs-row">\n' +
    '  <div class="bs-col-md-8">\n' +
    '    <p>I\'m baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p>\n' +
    '  </div>\n' +
    '  <div class="bs-col-md">\n' +
    '    <figure>\n' +
    '      <img src="../assets/images/dog-unsplash.jpg" alt="" style="margin: auto; max-width: 80%;">\n' +
    '        <figcaption>\n' +
    '          <strong>Figure 1.1.4:</strong> Good doggo<br />\n' +
    '          <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>\n' +
    '        </figcaption>\n' +
    '    </figure>\n' +
    '  </div>\n' +
    '</div>',
  sideComment: '<!-- Side-by-side image gallery HTML usage  -->\n',
  side: '<section class="adx-gallery two-up">\n' +
    '  <figure>\n' +
    '    <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/persona.987c5b3c.jpg" alt="" class="top">\n' +
    '    <figcaption>\n' +
    '      <strong>Figure 1.1.5(a):</strong> Image on the left.<br />\n' +
    '      <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>\n' +
    '    </figcaption>\n' +
    '  </figure>\n' +
    '  <figure>\n' +
    '    <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/persona.987c5b3c.jpg" alt="" class="top">\n' +
    '    <figcaption>\n' +
    '      <strong>Figure 1.1.5(b):</strong> Image on the right.<br />\n' +
    '      <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>\n' +
    '    </figcaption>\n' +
    '  </figure>\n' +
    '</section>',
  smallComment: '<!-- Small image excerpt HTML usage -->\n',
  small: '<figure class="w60" style="margin: auto;text-align: center;">\n' +
    '  <img src="https://mediaproduction.adelaide.edu.au/uoa-styles/assets/brand-eg.9337999c.png" alt="" class="top">\n' +
    '  <figcaption>\n' +
    '    <strong>Figure 1.1.6:</strong> Uses the w60 task to set the width to 60%.<br />\n' +
    '    <em>Source: <a href="http://www.unsplash.com/" target="_blank">http://www.unsplash.com/</a></em>\n' +
    '  </figcaption>\n' +
    '</figure>'
}

</script>

<style>
.bs-container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
}

.bs-row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.bs-col, .bs-col-1, .bs-col-2, .bs-col-3, .bs-col-4, .bs-col-5, .bs-col-6, .bs-col-7, .bs-col-8, .bs-col-9, .bs-col-10, .bs-col-11, .bs-col-12, .bs-col-auto, .bs-col-lg, .bs-col-lg-1, .bs-col-lg-2, .bs-col-lg-3, .bs-col-lg-4, .bs-col-lg-5, .bs-col-lg-6, .bs-col-lg-7, .bs-col-lg-8, .bs-col-lg-9, .bs-col-lg-10, .bs-col-lg-11, .bs-col-lg-12, .bs-col-lg-auto, .bs-col-md, .bs-col-md-1, .bs-col-md-2, .bs-col-md-3, .bs-col-md-4, .bs-col-md-5, .bs-col-md-6, .bs-col-md-7, .bs-col-md-8, .bs-col-md-9, .bs-col-md-10, .bs-col-md-11, .bs-col-md-12, .bs-col-md-auto, .bs-col-sm, .bs-col-sm-1, .bs-col-sm-2, .bs-col-sm-3, .bs-col-sm-4, .bs-col-sm-5, .bs-col-sm-6, .bs-col-sm-7, .bs-col-sm-8, .bs-col-sm-9, .bs-col-sm-10, .bs-col-sm-11, .bs-col-sm-12, .bs-col-sm-auto, .bs-col-xl, .bs-col-xl-1, .bs-col-xl-2, .bs-col-xl-3, .bs-col-xl-4, .bs-col-xl-5, .bs-col-xl-6, .bs-col-xl-7, .bs-col-xl-8, .bs-col-xl-9, .bs-col-xl-10, .bs-col-xl-11, .bs-col-xl-12, .bs-col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 1100px) {
  .bs-col-md {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }

  .bs-col-md-8 {
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
}
</style>