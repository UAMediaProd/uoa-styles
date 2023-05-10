<template>
  <div id="Multimedia" class="component-item">
    <h3>Multimedia</h3>
    <h4 class="adx-markup-label">Video Player with Transcript</h4>

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

    <div class="flex">
      <clipboard-button :data-to-copy="htmlData.videoTranscript.code" />
      <pre class="w-full"><code class="language-markup">{{ htmlData.videoTranscript.comment }}{{ htmlData.videoTranscript.code }}</code></pre>
    </div>


    <h4 class="adx-markup-label">Video Player without Transcript</h4>

    <section class="adx video">
      <div class="videoWrapper">
        <iframe title="YouTube video player" src="https://www.youtube.com/embed/PR269o7s66M" width="560" height="315" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      </div>
    </section>

    <div class="flex">
      <clipboard-button :data-to-copy="htmlData.videoOnly.code" />
      <pre class="w-full"><code class="language-markup">{{ htmlData.videoOnly.comment }}{{ htmlData.videoOnly.code }}</code></pre>
    </div>


    <h4 class="adx-markup-label">Empty Section Wrapper for H5P and Echo360 Video</h4>

    <section class="adx video min-h-[200px] flex justify-center">
      <span class="my-auto font-bold">H5P / Echo360 video</span>
    </section>

    <div class="flex">
      <clipboard-button :data-to-copy="htmlData.emptySection.code" />
      <pre class="w-full"><code class="language-markup">{{ htmlData.emptySection.comment }}{{ htmlData.emptySection.code }}</code></pre>
    </div>


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

    <div class="flex">
      <clipboard-button :data-to-copy="htmlData.podcastSquare.code" />
      <pre class="w-full"><code class="language-markup">{{ htmlData.podcastSquare.comment }}{{ htmlData.podcastSquare.code }}</code></pre>
    </div>

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

    <div class="flex">
      <clipboard-button :data-to-copy="htmlData.podcastWide.code" />
      <pre class="w-full"><code class="language-markup">{{ htmlData.podcastWide.comment }}{{ htmlData.podcastWide.code }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const htmlData = {
  videoTranscript: {
    comment: '<!-- Video with Transcript box HTML Usage -->\n',
    code: '<section class="adx video">\n' +
      '  <div class="videoWrapper">\n' +
      '    <iframe title="YouTube video player" src="https://www.youtube.com/embed/U9OPRtMRwE0" width="560" height="315" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>\n' +
      '  </div>\n' +
      '  <footer>\n' +
      '    <div class="v-icon-holder">\n' +
      '     <a href="#" class="adx-icon download">Transcript [.txt]</a>\n' +
      '    </div>\n' +
      '  </footer>\n' +
      '</section>'
  },
  videoOnly: {
    comment: '<!-- Video without Transcript box HTML Usage -->\n',
    code: '<section class="adx video">\n' +
      '  <div class="videoWrapper">\n' +
      '    <iframe title="YouTube video player" src="https://www.youtube.com/embed/U9OPRtMRwE0" width="560" height="315" allowfullscreen="allowfullscreen" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>\n' +
      '  </div>\n' +
      '</section>'
  },
  emptySection: {
    comment: '<!-- Empty Section wrapper for H5P and Echo360 video HTML Usage -->\n',
    code: '<section class="adx video">\n\n' +
      '</section>'
  },
  podcastSquare: {
    comment: '<!-- Square podcast HTML Usage -->\n',
    code: '<section class="adx-podcast-square">\n' +
      '  <div class="adx-aspect square adx-bg-primary">\n' +
      '    <img src="../assets/images/diff-square.jpg" alt="" class="center-center">\n' +
      '  </div>\n' +
      '  <h3>Track Title Goes Here</h3>\n' +
      '  <p>Some track details go here.</p>\n' +
      '  <audio controls src="">\n' +
      '  </audio>\n' +
      '</section>'
  },
  podcastWide: {
    comment: '<!-- Wide podcast player HTML Usage -->\n',
    code: '<section class="adx-podcast-wide">\n' +
      '  <div class="track">\n' +
      '    <h3>Track Title Goes Here</h3>\n' +
      '    <p>Some track details go here.</p>\n' +
      '  </div>\n' +
      '  <div class="adx-aspect square adx-bg-primary art">\n' +
      '    <img src="../assets/images/diff-square.jpg" alt="" class="center-center">\n' +
      '  </div>\n' +
      '  <audio controls src="">\n' +
      '  </audio>\n' +
      '</section>'
  },
}

</script>