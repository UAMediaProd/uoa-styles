<template>
  <div class="flex flex-1 overflow-hidden">
    <aside id="components-side-nav" class="bg-gray-100 px-6 py-3 min-w-[195px] overflow-y-auto">
      <div v-for="item in itemList" class="text-slate-500 my-4 cursor-pointer">{{ item }}</div>
    </aside>
    <div id="components-main" class="w-full p-4 overflow-y-auto">
    </div>

  </div>
</template>

<script setup>

const itemList = ['Headings', 'Asides', 'Directions', 'Cues', 'Personas', 'Quotes', 'Lists', 'Definitions', 'Buttons', 'Dividers', 'Images', 'Tables', 'Multimedia', 'Banners', 'References', 'Navigation', 'Team']
</script>
