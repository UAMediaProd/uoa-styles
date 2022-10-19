<template>
  <div id="Multimedia" class="component-item">
    <h3>Multimedia</h3>
    <h4 class="adx-markup-label">Video Player</h4>

    <section class="adx video">
      <div class="videoWrapper">
        <iframe title="YouTube video player" src="https://www.youtube.com/embed/U9OPRtMRwE0" width="560" height="315" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
      <footer>
        <div class="v-icon-holder">
          <a href="#" class="adx-icon download">Transcript [.txt]</a>
        </div>
      </footer>
    </section>

    <pre><code class="language-markup">&lt;!-- Video callout box HTML Usage --&gt;
    &lt;section class="adx video"&gt;
      &lt;div class="videoWrapper"&gt;
        &lt;iframe title="YouTube video player" src="https://www.youtube.com/embed/U9OPRtMRwE0" width="560" height="315" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"&gt;&lt;/iframe&gt;
      &lt;/div&gt;
      &lt;footer&gt;
        &lt;div class="v-icon-holder"&gt;
          &lt;a href="#" class="adx-icon download"&gt;Transcript [.txt]&lt;/a&gt;
        &lt;/div&gt;
      &lt;/footer&gt;
    &lt;/section&gt;</code></pre>


    <h4 class="adx-markup-label">Podcast Square</h4>

    <section class="adx-podcast-square">
      <div class="adx-aspect square adx-bg-primary">
        <img src="../assets/images/diff-square.jpg" alt="" class="center-center">
      </div>
      <h3>Track Title Goes Here</h3>
      <p>Some track details go here.</p>
      <audio controls src="">
      </audio>
    </section>

    <pre><code class="language-markup">&lt;!-- Square podcast HTML Usage --&gt;
    &lt;section class="adx-podcast-square"&gt;
      &lt;div class="adx-aspect square adx-bg-primary"&gt;
        &lt;img src="image.png" alt="" class="center-center"&gt;
      &lt;/div&gt;
      &lt;h3&gt;Track Title Goes Here&lt;/h3&gt;
      &lt;p&gt;Some track details go here.&lt;/p&gt;
      &lt;audio controls src=""&gt;
      &lt;/audio&gt;
    &lt;/section&gt;</code></pre>

    <h4 class="adx-markup-label">Podcast Wide Player</h4>
    <section class="adx-podcast-wide">
      <div class="track">
        <h3>Track Title Goes Here</h3>
        <p>Some track details go here.</p>
      </div>
      <div class="adx-aspect square adx-bg-primary art">
        <img src="../assets/images/diff-square.jpg" alt="" class="center-center">
      </div>
      <audio controls src="">
      </audio>
    </section>

    <pre><code class="language-markup">&lt;!-- Wide podcast player HTML Usage --&gt;
    &lt;section class="adx-podcast-wide"&gt;
      &lt;div class="track"&gt;
        &lt;h3&gt;Track Title Goes Here&lt;/h3&gt;
        &lt;p&gt;Some track details go here.&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="adx-aspect square adx-bg-primary art"&gt;
        &lt;img src="image.png" alt="" class="center-center"&gt;
      &lt;/div&gt;
      &lt;audio controls src=""&gt;
      &lt;/audio&gt;
    &lt;/section&gt;</code></pre>
  </div>
</template>