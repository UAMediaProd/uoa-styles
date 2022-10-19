<template>
  <div id="app" class="flex flex-col h-screen">
    <header class="flex h-fit">
      <div class="flex flex-col min-w-[50px]">
        <div class="bg-brand-darkblue min-h-[70px]"></div>
        <div class="bg-brand-midblue h-full"></div>
      </div>
      <div id="logo-section" class="bg-brand-darkblue p-[21px] min-w-fit">
        <div><img src="./assets/uoa-logo.png" width="103" alt="UoA Logo" /></div>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex justify-between bg-brand-darkblue text-white align-middle px-6 min-h-[70px]">
          <h3>UoA Styles</h3>
          <a href="./assets/theme.css" target="_blank" rel="noreferrer noopener" class="my-auto font-bold text-sm">Stylesheet<i class="far fa-external-link ml-1" /></a>
        </div>
        <div class="flex justify-end bg-brand-midblue text-white font-bold h-full">
          <RouterLink to="/" class="header-nav"><i class="fad fa-layer-group mr-1" /><span class="text-lg">Components</span></RouterLink>
          <RouterLink to="/colours" class="header-nav"><i class="fad fa-palette mr-1" /><span class="text-lg">Colour Palette</span></RouterLink>
        </div>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>