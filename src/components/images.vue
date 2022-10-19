<template>
  <div id="Images" class="component-item">
    <h3>Figures and Images</h3>
    <h4 class="adx-markup-label">Default landscape image set to 80%</h4>

    <figure class="adx w80">
      <img src="../assets/images/spacex-unsplash.jpg" alt="" class="top">
      <figcaption>This is one hell of a rocket with its width set to 80%.<cite><a href="http://www.unsplash.com/">NASA via Unsplash</a></cite>
      </figcaption>
    </figure>

    <pre><code class="language-markup">&lt;!-- Landscape image HTML usage --&gt;
    &lt;figure class="adx w80"&gt;
      &lt;img src="image.png" alt="" class="top"&gt;
      &lt;figcaption&gt;This is one hell of a rocket with its width set to 80%.&lt;cite&gt;&lt;a href="http://www.unsplash.com/"&gt;NASA via Unsplash&lt;/a&gt;&lt;/cite&gt;&lt;/figcaption&gt;
    &lt;/figure&gt;</code></pre>

    <h4 class="adx-markup-label">Default portrait image set to 40%</h4>

    <figure class="adx w40">
      <img src="../assets/images/adam-miller-unsplash.jpg" alt="" class="top">
      <figcaption>Astronaut with its width set to 40%.<cite><a href="http://www.unsplash.com/">NASA via Unsplash</a></cite>
      </figcaption>
    </figure>

    <pre><code class="language-markup">&lt;!-- Portrait image HTML usage --&gt;
    &lt;figure class="adx w40"&gt;
      &lt;img src="image.png" alt="" class="top"&gt;
      &lt;figcaption&gt;Astronaut with its width set to 40%.&lt;cite&gt;&lt;a href="http://www.unsplash.com/"&gt;NASA via Unsplash&lt;/a&gt;&lt;/cite&gt;&lt;/figcaption&gt;
    &lt;/figure&gt;</code></pre>

    <h4 class="adx-markup-label">Aside image</h4>

    <aside class="adx image">
      <figure class="adx">
        <img src="../assets/images/dog-unsplash.jpg" alt="" class="top">
        <figcaption>Good doggo <cite><a href="#">Doggo pics r us </a></cite></figcaption>
      </figure>
    </aside>

    <p>I'm baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.</p>

    <pre><code class="language-markup">&lt;!-- Aside image with paragraph text HTML usage --&gt;
    &lt;aside class="adx image"&gt;
      &lt;figure class="adx"&gt;
        &lt;img src="image.png" alt="" class="top"&gt;
        &lt;figcaption&gt;Good doggo &lt;cite&gt;&lt;a href="#"&gt;Doggo pics r us  &lt;/a&gt;&lt;/cite&gt;&lt;/figcaption&gt;
      &lt;/figure&gt;
    &lt;/aside&gt;

    &lt;p&gt;I'm baby fashion axe ugh try-hard meditation palo santo post-ironic sustainable lomo kombucha hashtag crucifix four loko roof party. Cliche schlitz meggings prism next level. Meditation drinking vinegar woke thundercats yr umami kogi crucifix succulents flexitarian fam. Normcore health goth hoodie, gluten-free kogi bushwick beard jean shorts cronut dreamcatcher knausgaard pop-up schlitz. Viral palo santo kinfolk flannel banjo. Helvetica ennui kickstarter hoodie 3 wolf moon neutra hell of plaid.&lt;/p&gt;</code></pre>

    <h4 class="adx-markup-label">Side by side</h4>


    <section class="adx-gallery two-up">
      <figure class="adx">
        <img src="../assets/images/persona.jpg" alt="" class="top">
      </figure>
      <figure class="adx">
        <img src="../assets/images/persona.jpg" alt="" class="top">
      </figure>
      <figcaption>Two images side-by-side <cite><a href="#">Unsplash</a></cite></figcaption>
    </section>

    <pre><code class="language-markup">&lt;!-- Side-by-side image gallery HTML usage  --&gt;
    &lt;section class="adx-gallery two-up"&gt;
      &lt;figure class="adx"&gt;
        &lt;img src="image.png" alt="" class="top"&gt;
      &lt;/figure&gt;
      &lt;figure class="adx"&gt;
        &lt;img src="image.png" alt="" class="top"&gt;
      &lt;/figure&gt;
      &lt;figcaption&gt;Two images side-by-side &lt;cite&gt;&lt;a href="#"&gt;Unsplash&lt;/a&gt;&lt;/cite&gt;&lt;/figcaption&gt;
    &lt;/section</code></pre>

    <h4 class="adx-markup-label">Image excerpt</h4>

    <figure class="adx w60">
      <img src="../assets/images/brand-eg.png" alt="" class="top">
      <figcaption>Uses the w60 task to set the width to 60%. <cite><a href="#">Taken from the UoA brand book</a></cite>
      </figcaption>
    </figure>

    <pre><code class="language-markup">&lt;!-- Small image excerpt HTML usage --&gt;
    &lt;figure class="adx w60"&gt;
      &lt;img src="image.png" alt="" class="top"&gt;
      &lt;figcaption&gt;Uses the w60 task to set the width to 60%. &lt;cite&gt;&lt;a href="#"&gt;Taken from the UoA brand book&lt;/a&gt;&lt;/cite&gt;&lt;/figcaption&gt;
    &lt;/figure&gt;</code></pre>
  </div>
</template>