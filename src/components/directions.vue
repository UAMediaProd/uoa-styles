<template>
  <div id="Directions" class="component-item">
    <h3>Directions</h3>
    <h4 class="adx-markup-label">Base Direction</h4>

    <div class="adx-direction">
      <h5>This is a Direction Box</h5>
      <p>Directions are used to <em>direct</em> students to take action or do something external to the current
        content flow inside the LMS.</p>
    </div>

    <div class="flex">
      <clipboard-button :data-to-copy="baseDirection" />
      <pre class="w-full"><code class="language-markup">{{ htmlComment }}{{ baseDirection }}</code></pre>
    </div>

    <div v-for="group in directions">
      <h4 class="adx-markup-label">{{ group.type }}</h4>
      <p>{{ group.intro }}</p>
      <div v-for="direction in group.items" :class="direction.class">
        <h5>{{ direction.title }}</h5>
        <p>{{ direction.textStart }} <clipboard-code :data-to-copy="direction.class" /> {{ direction.textEnd }}</p>
      </div>
    </div>

  </div>
</template>
<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'
import ClipboardCode from '@/components/common/clipboardCode.vue'

const htmlComment = '<!-- Base Direction HTML Usage -->\n'
const baseDirection = '<div class="adx-direction">\n' +
  '  <h5>This is a Direction Box</h5>\n' +
  '  <p>Directions are used to <em>direct</em> students to take action or do something external to the current content flow inside the LMS.</p>\n' +
  '</div>'
const directions = [
  {
    type: 'Direction Variants',
    intro: 'Use the following direction boxes to markup specific directions for students. These are callouts to complete specific tasks external to the page and flow of the lesson.',
    items: [
      {
        title: 'This is an Assessment Direction',
        textStart: 'Use the',
        class: 'adx-direction-assessment',
        textEnd: 'class to define information on the page about assessment tasks. This would specifically include directions to complete the task itself, or elements of the task.'
      },
      {
        title: 'This is a Discussion Direction',
        textStart: 'Use the',
        class: 'adx-direction-discussion',
        textEnd: 'class to alert students to tasks that relate to discussions. This maybe located on another page - but if context information is suitable, i.e. the information in this lesson is the logical point to carry out and contribute to the discussion, then use this direction.'
      },
      {
        title: 'This is an Extra Direction',
        textStart: 'Use the',
        class: 'adx-direction-extra',
        textEnd: 'class to alert students to extra tasks. These are not required but could be seen as extensions beyond the content and activities required in this course. This may be useful for "parking" concepts and ideas that students aren\'t required to complete but may be useful in the longer term.'
      },
      {
        title: 'This is an Interactive Direction',
        textStart: 'Use the',
        class: 'adx-direction-interactive',
        textEnd: 'class to alert students to interactive activities and ways to engage with other students. Can be used for synchronous sessions on Zoom or on other tools.'
      },
      {
        title: 'This is an Investigate Direction',
        textStart: 'Use the',
        class: 'adx-direction-investigate',
        textEnd: 'class to alert students to tasks that ask them to investigate, search and find information. Useful for research tasks like accessing databases, papers or articles.'
      },
      {
        title: 'This is a Practice Direction',
        textStart: 'Use the',
        class: 'adx-direction-practice',
        textEnd: 'class to alert students to activities where they practice skills, tasks and processes.'
      },
      {
        title: 'This is a Reading Direction',
        textStart: 'Use the',
        class: 'adx-direction-reading',
        textEnd: 'class to alert students to reading tasks. This could include reading texts, articles and papers.'
      },
      {
        title: 'This is a Reflect Direction',
        textStart: 'Use the',
        class: 'adx-direction-reflect',
        textEnd: 'class to alert students to reflection tasks.'
      },
      {
        title: 'This is a Watch Direction',
        textStart: 'Use the',
        class: 'adx-direction-watch',
        textEnd: 'class to alert students to videos or presentations they need to watch. This can be used for any video that can\'t be embedded or if the video is not required viewing, but part of an extension task.'
      },
      {
        title: 'This is a Write Direction',
        textStart: 'Use the',
        class: 'adx-direction-write',
        textEnd: 'class to alert students to writing tasks.'
      },
    ]
  },
  {
    type: 'Programme Directions',
    intro: 'These are used to highlight activities or information specific to each programme for the shared courses in OUA.',
    items: [
      {
        title: 'This is an HSM Direction',
        textStart: 'Use the',
        class: 'adx-direction-hsm',
        textEnd: 'class to define information on the page about this programme.'
      },
      {
        title: 'This is an IB Direction',
        textStart: 'Use the',
        class: 'adx-direction-ib',
        textEnd: 'class to define information on the page about this programme.'
      }
    ]
  },
]
</script>