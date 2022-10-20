<template>
  <div id="colours-main">
    <div class="adx"><h3>Colour Palettes</h3></div>
    <div v-for="palette in colourPalettes" class="mb-6">
      <h4 class="adx-markup-label">{{ palette.name }} Colours</h4>
      <div class="colour-samples grid-4 w-[70vw]">
        <div v-for="colour in palette.colours" class="colour-items">
          <div v-for="item in palette.items" class="min-h-[42px]" :class="getColourClass(colour, item)">{{ getColourDisplay(colour, item) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

const colourPalettes = [
  {
    name: 'Brand',
    colours: ['brand-red', 'brand-midblue', 'brand-darkblue', 'brand-gold'],
    items: ['tint', 'lightest', 'lighter', 'light', '', 'dark', 'darker', 'darkest', 50, 70, 80]
  },
  {
    name: 'Learning Design',
    colours: ['ld1', 'ld2', 'ld3', 'ld4', 'ld5', 'ld6', 'ld7'],
    items: ['tint', 'lightest', 'lighter', 'light', '', 'dark', 'darker', 'darkest']
  },
  {
    name: 'UI',
    colours: ['neutral', 'positive', 'negative', 'warning', 'information'],
    items: ['tint', 'lightest', 'lighter', 'light', '', 'dark', 'darker', 'darkest', 50, 70, 80]
  },
]

function getColourClass (colour, item) {
  const blockClass = item ? 'colour-block' : 'colour-block adx-markup-section-caps adx-markup-font-heading'
  return `${blockClass} adx-bg-${colour}${item ? (typeof item === 'number' ? `-trans-${item}` : `-${item}`) : ''}`
}

function getColourDisplay (colour, item) {
  return item ? (typeof item === 'number' ? `Transparent ${item}` : item) : `${colour}`
}
</script>
