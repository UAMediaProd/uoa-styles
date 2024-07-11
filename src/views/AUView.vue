<template>
  <div class="flex flex-1 overflow-hidden">
    <aside id="components-side-nav">
      <div v-for="item in itemInViewportStates" :id="`${item.id}-menu`" class="text-[1.2rem] text-slate-500 py-3 pl-6 mb-1 cursor-pointer" :class="item.state ? 'text-brand-midblue-dark font-bold bg-gray-200 border-l-4 border-brand-red' : ''" @click="scrollToItem(item.id)">{{ item.id }}</div>
    </aside>
    <div id="components-main" @scroll="syncSideMenu">
      <div id="components-wrapper" class="aux" style="">
        <h1>Heading 1</h1>
        <p>Here is some body text.</p>
        <h2>Heading 2</h2>
        <p>Here is some body text.</p>
        <h3>Heading 3</h3>
        <p>Here is some body text.</p>
        <h4>Heading 4</h4>
        <p>Here is some body text.</p>
        <h5>Heading 5</h5>
        <p>Here is some body text.</p>


        <hr/>

        <div class="aux-cue">
          <h3>Heading</h3>
          <p>Here is some body text inside of a cue. This is the default generic one.</p>
        </div>

        <div class="aux-cue-info">
          <h3>Heading</h3>
          <p>Here is some body text inside of a cue. This is a generic 'information' one; subtly different from the default in colour.</p>
        </div>

        <div class="aux-cue-content-warning">
          <h3>Heading</h3>
          <p>Here is some body text inside of a cue. This cue box denotes a content warning; something that the learners should be aware of before continuing.</p>
        </div>


        <hr/>
        <ol class="fancy-ol">
          <li>Gather your ingredients</li>
          <li>Pour all the ingreients into a bowl</li>
          <li>Stir and mix together</li>
          <li>Place into the over to cook</li>
          <li>Remove from the oven and eat</li>
          <li>Meditation cray snackwave raw denim thundercats banh mi. XOXO pour-over unicorn bushwick YOLO brunch. Flexitarian direct trade hammock cloud bread art party occupy. Slow-carb glossier literally thundercats truffaut, church-key quinoa tousled. Pour-over asymmetrical brooklyn narwhal, hell of waistcoat 8-bit irony.</li>
        </ol>

        <ol class="step-list">
          <li>Gather your ingredients</li>
          <li>Pour all the ingreients into a bowl</li>
          <li>Stir and mix together</li>
          <li>Place into the over to cook</li>
          <li>Remove from the oven and eat</li>
          <li>Meditation cray snackwave raw denim thundercats banh mi. XOXO pour-over unicorn bushwick YOLO brunch. Flexitarian direct trade hammock cloud bread art party occupy. Slow-carb glossier literally thundercats truffaut, church-key quinoa tousled. Pour-over asymmetrical brooklyn narwhal, hell of waistcoat 8-bit irony.</li>
        </ol>


      </div>
    </div>
  </div>
</template>

<script setup>

import { onBeforeUnmount, onMounted, ref } from "vue"
import Prism from "prismjs";
import "prismjs/themes/prism.css"
import 'prismjs/components/prism-markup-templating'
import '../../public/assets/au_working.css'

const itemList = [
  'Headings',
  'Directions',
  'Cues',
  'Personas',
  'Quotes',
  'Images',
  'Multimedia',
  'Lists',
  'Tables',
  'Navigation',
  'Team',
  'Definitions',
  'Asides',
  'Buttons',
  'Dividers',
]

let itemInViewportStates = ref(itemList.map(id => ({ id, state: false })))

function scrollToItem (id) {
  document.getElementById(id).scrollIntoView()
  document.getElementById('components-main').scrollBy(0, -32)

}

function isInViewport (id) {
  const element = document.getElementById(id)
  if (!element) {
    return false
  }
  const headerOffset = 118
  const itemOffset = 16
  const bounding = element.getBoundingClientRect()

  if (bounding.top >= headerOffset && bounding.top <= window.innerHeight) {
    return true
  }

  if (bounding.bottom >= window.innerHeight - itemOffset && bounding.bottom < window.innerHeight) {
    return true
  }

  if (bounding.bottom >= headerOffset && bounding.bottom <= window.innerHeight && itemList.indexOf(id) === itemList.length - 1) {
    return true
  }

  return bounding.top < headerOffset && bounding.bottom > window.innerHeight;
}

function syncSideMenu () {
  let hasFocus = false
  itemInViewportStates.value = itemList.map(id => {
    const current = hasFocus ? false : isInViewport(id)
    if (current) {
      hasFocus = true
    }
    return {
      id,
      state: current
    }
  })
}

function renderPrism () {
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
  Prism.highlightAll()
}

onMounted(() => {
  window.addEventListener('resize', syncSideMenu)
  renderPrism()
  syncSideMenu()

})

onBeforeUnmount(() => {
  window.removeEventListener('resize', syncSideMenu)
})
</script>

<style scoped>

aside {
  font-family: 'National 2 Condensed', sans-serif;
}

  h1,h2,h3,h4,h5 {
    margin-bottom: 1.25rem;
    margin-top: 1rem;
    font-family: 'National 2 Condensed Bold', sans-serif;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
    font-family: 'Roboto Serif', serif;
  }

  h5 {
    font-family: 'Roboto Serif', serif;
    font-weight: 400;
    font-size: 1.8rem;
  }

  p {
    font-family: 'Roboto Serif', serif;
    font-size: 0.8em;
  }

  li {
    font-family: 'Roboto Serif', serif;
    font-size: 0.8em;
  }

  ol.fancy-ol li::before {
    font-family: 'National 2 Condensed ExtraBold', sans-serif;
    font-size: 0.8em;
  }

  .step-list li::before {
    font-family: 'National 2 Condensed ExtraBold', sans-serif;
    font-size: 0.8em;
  }


  /* DP Callout overrides*/
  .aux-cue {
    background: var(--primary-lightest) !important;
    border: none !important;
    border-radius: var(--rads) !important;
    margin: 1em;
    padding: 1em;
  }

  .aux-cue h3 {
    border: none;
    text-transform: uppercase;
    font-weight: 600 !important;
    font-size: 1.2em !important;
    color: var(--primary) !important;
  }

  .aux-cue p {
    color: var(--primary) !important;
  }


  .aux-cue-info {
    background: var(--tertiary-lighter) !important;
    border: none !important;
    border-radius: var(--rads) !important;
    margin: 1em;
    padding: 1em;
  }

  .aux-cue-info h3 {
    border: none;
    text-transform: uppercase;
    font-weight: 600 !important;
    font-size: 1.2em !important;
    color: var(--tertiary-darkest) !important;
  }

  .aux-cue-info p {
    color: var(--tertiary-darker) !important;
  }

  .aux-cue-content-warning {
    background: var(--primary-lightest) !important;
    border-radius: var(--rads) !important;
    margin: 1em;
    padding: 1em;
    background: var(--content-warning) !important;
    border: 1px solid !important;
    border-color:  var(--warning-500) !important;
  }

  .aux-cue-content-warning p {
    color: var(--content-warning-body) !important;
  }

  .aux-cue-content-warning h3 {
    color: var(--warning-500) !important;
    text-transform: uppercase;
    font-weight: 600 !important;
    font-size: 1.2em !important;
  }



</style>
