<template>
  <div id="Team" class="component-item">
    <h3>Course Team</h3>
    <h4 class="adx-markup-label">Profile Card</h4>

    <article class="adx-profile">
      <img src="../assets/images/persona.jpg" alt="">
      <section>
        <h3 class="name">Christian Surname</h3>
        <p class="title">Senior Deputy Vice President</p>
        <p class="location">Adelaide, Australia</p>
        <p class="contact">christian.surname@adelaide.edu.au</p>
        <p class="availability">Mon-Fri 9-3pm</p>
        <p>Here's my bio about stuff</p>
      </section>
    </article>
    <div class="flex">
      <clipboard-button :data-to-copy="htmlCode" />
      <pre class="w-full"><code class="language-markup">{{ comment }}{{ htmlCode }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'

const comment = '<!-- Profile card HTML Usage -->\n'
const htmlCode = '<article class="adx-profile">\n' +
  '  <img src="image.png" alt="">\n' +
  '  <section>\n' +
  '    <h3 class="name">Christian Surname</h3>\n' +
  '    <p class="title">Senior Deputy Vice President</p>\n' +
  '    <p class="location">Adelaide, Australia</p>\n' +
  '    <p class="contact">christian.surname@adelaide.edu.au</p>\n' +
  '    <p class="availability">Mon-Fri 9-3pm</p>\n' +
  '    <p>Here\'s my bio about stuff</p>\n' +
  '  </section>\n' +
  '</article>'
</script>