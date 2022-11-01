<template>
  <div class="flex flex-1 overflow-hidden">
    <aside id="components-side-nav">
      <div v-for="item in itemInViewportStates" :id="`${item.id}-menu`" class="text-[1rem] text-slate-500 py-3 pl-6 mb-1 cursor-pointer" :class="item.state ? 'text-brand-midblue-dark font-bold bg-gray-200 border-l-4 border-brand-red' : ''" @click="scrollToItem(item.id)">{{ item.id }}</div>
    </aside>
    <div id="components-main" @scroll="syncSideMenu">
      <div id="components-wrapper" class="adx">
        <headings />
        <directions />
        <cues />
        <personas />
        <quotes />
        <images />
        <multimedia />
        <lists />
        <tables />
        <navigation />
        <team />
        <definitions />
        <asides />
        <buttons />
        <dividers />
      </div>
    </div>
  </div>
</template>

<script setup>

import { onBeforeUnmount, onMounted, ref } from "vue"
import Prism from "prismjs";
import "prismjs/themes/prism.css"
import 'prismjs/components/prism-markup-templating'
import Headings from '@/components/headings.vue'
import Asides from '@/components/asides.vue'
import Directions from '@/components/directions.vue'
import Cues from '@/components/cues.vue'
import Personas from '@/components/personas.vue'
import Quotes from '@/components/quotes.vue'
import Lists from '@/components/lists.vue'
import Definitions from '@/components/definitions.vue'
import Buttons from '@/components/buttons.vue'
import Dividers from '@/components/dividers.vue'
import Images from '@/components/images.vue'
import Tables from '@/components/tables.vue'
import Multimedia from '@/components/multimedia.vue'
import Navigation from '@/components/navigation.vue'
import Team from '@/components/team.vue'

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
