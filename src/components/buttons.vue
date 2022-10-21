<template>
  <div id="Buttons" class="component-item">
    <h3>Buttons</h3>
    <p><em>Note: Canvas automatically strips out
      <code>button</code> elements, but the following styles can be applied to
      <code>a</code> tags to mimic the look and experience.</em></p>
    <h4 class="adx-markup-label">Base Buttons</h4>

    <div class="flex">
      <div class="my-auto min-w-[175px]">
        <button class="adx-button w-full">base</button>
      </div>
      <div class="adx-cue w-full">
        <p>Use HTML class
          <clipboard-code data-to-copy="adx-button" />
        </p>
      </div>
    </div>

    <h4 class="adx-markup-label">Button Variations</h4>
    <p>To add colour, add the <code>colour</code> reference class.</p>

    <div v-for="buttonClass in buttonVariations" class="flex">
      <div class="my-auto min-w-[175px]">
        <button class="w-full" :class="buttonClass">{{ buttonClass.split(' ')[1] }}</button>
      </div>
      <div class="adx-cue w-full">
        <p>Use HTML class
          <clipboard-code :data-to-copy="buttonClass" />
        </p>
      </div>
    </div>

    <h4 class="adx-markup-label">Button groups</h4>
    <p>Button groups can be made from an <code>ul</code> and <code>li</code> elements,</p>

    <ul class="adx-button-group">
      <li class="adx-button brand-midblue">Click Me</li>
      <li class="adx-button brand-midblue">Click Me</li>
      <li class="adx-button brand-midblue">Click Me</li>
    </ul>

    <div class="flex">
      <clipboard-button :data-to-copy="group.html" />
      <pre class="w-full"><code class="language-markup">{{ group.comment }}{{ group.html }}</code></pre>
    </div>

    <p>Or from <code>divs</code> and <code>p</code> tags,</p>

    <div class="adx-button-group">
      <button class="adx-button accent">Click Me</button>
      <button disabled class="adx-button complimentary disabled">You can't Click Me</button>
      <button class="adx-button primary">Click Me</button>
    </div>

    <div class="flex">
      <clipboard-button :data-to-copy="disabled.html" />
      <pre class="w-full"><code class="language-markup">{{ disabled.comment }}{{ disabled.html }}</code></pre>
    </div>

    <p>And you can arrange them in a stack using class
      <clipboard-code data-to-copy="adx-button-stack" />
      .
    </p>

    <div class="adx-button-stack">
      <p class="adx-button brand-red">Click Me</p>
      <p class="adx-button brand-red">Click Me</p>
      <p class="adx-button brand-red">Click Me</p>
    </div>

    <div class="flex">
      <clipboard-button :data-to-copy="stack.html" />
      <pre class="w-full"><code class="language-markup">{{ stack.comment }}{{ stack.html }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'
import ClipboardCode from '@/components/common/clipboardCode.vue'

const buttonVariations = [
  'adx-button brand-red',
  'adx-button primary',
  'adx-button accent',
  'adx-button complimentary',
  'adx-button brand-midblue'
]

const group = {
  comment: '<!-- List button group HTML Usage -->\n',
  html: '<ul class="adx-button-group">\n' +
    '  <li class="adx-button brand-midblue">Click Me</li>\n' +
    '  <li class="adx-button brand-midblue">Click Me</li>\n' +
    '  <li class="adx-button brand-midblue">Click Me</li>\n' +
    '</ul>'
}

const disabled = {
  comment: '<!-- Div button group with disabled button HTML Usage -->\n',
  html: '<div class="adx-button-group">\n' +
    '  <button class="adx-button accent">Click Me</button>\n' +
    '  <button disabled class="adx-button complimentary disabled">You can\'t Click Me</button>\n' +
    '  <button class="adx-button primary">Click Me</button>\n' +
    '</div>'
}

const stack = {
  comment: '<!-- Button stack HTML Usage -->\n',
  html: '<div class="adx-button-stack">\n' +
    '  <p class="adx-button brand-red">Click Me</p>\n' +
    '  <p class="adx-button brand-red">Click Me</p>\n' +
    '  <p class="adx-button brand-red">Click Me</p>\n' +
    '</div>'
}

</script>