<template>
  <div id="Cues" class="component-item">
    <h3>Cues</h3>
    <h4 class="adx-markup-label">{{ basicCues.title }}</h4>

    <div v-for="cue in basicCues.cues" :class="cue.class">
      <p>
        {{ cue.textStart }}
        <clipboard-code :data-to-copy="cue.class" />
        {{ cue.textEnd }}
      </p>
    </div>

    <div class="flex">
      <clipboard-button :data-to-copy="basicCuesHtml" />
      <pre class="w-full"><code class="language-markup">{{ basicCuesHtmlComment }}{{ basicCuesHtml }}</code></pre>
    </div>

    <h4 class="adx-markup-label">{{ cueVariants.title }}</h4>

    <div v-for="cue in cueVariants.cues" :class="cue.class">
      <p>
        {{ cue.textStart }}
        <clipboard-code :data-to-copy="cue.class" />
        {{ cue.textEnd }}
      </p>
    </div>

    <div class="adx-cue-reference">
      <p>The
        <clipboard-code data-to-copy="adx-cue-reference" />
        cue is for a single or multiple references. These can be contained within a
        <code>ul</code> or as
        <code>p</code>. These are not resources for students to access, but rather to provide academic rigour to the content. Do not use this cue for readings or other student tasks.
      </p>
      <p>Albanese, A (Minister for Infrastructure, Transport, Regional Development and Local Government) 2009, Fairer compensation for air travellers, media release, 29 January, Department of Infrastructure, Transport, Regional Development and Local Government, Canberra, viewed 30 January 2009,
        <a href="http://www.minister.infrastructure.gov.au/releases/2009" target="_blank" rel="noreferrer noopener">www.minister.infrastructure.gov.au/releases/2009</a>.
      </p>
      <ul>
        <li><p>Albanese, A (Minister for Infrastructure, Transport, Regional Development and Local Government) 2009, Fairer compensation for air travellers, media release, 29 January, Department of Infrastructure, Transport, Regional Development and Local Government, Canberra, viewed 30 January 2009,
          <a href="http://www.minister.infrastructure.gov.au/releases/2009" target="_blank" rel="noreferrer noopener">www.minister.infrastructure.gov.au/releases/2009</a>.</p>
        </li>
        <li><p>Australian Government Publishing Service 1987, Commonwealth printing and publishing manual, 2nd edn, A.G.P.S., Canberra.</p></li>
        <li><p>Australian Institute of Health and Welfare 2010, Child protection Australia 2008-09, Child welfare series no. 47. Cat. no. CWS 35, Australian Institute of Health and Welfare, Canberra, viewed 06 November 2012,
          <a href="https://www.aihw.gov.au/reports/child-protection/child-protection-australia-2008-09/contents/table-of-contents" target="_blank" rel="noreferrer noopener">www.aihw.gov.au/reports/child-protection/child-protection-australia-2008-09/contents/table-of-contents</a>.</p>
        </li>
      </ul>
    </div>


    <h4 class="adx-markup-label">{{ directionCues.title }}</h4>
    <div v-for="cue in directionCues.cues" :class="cue.class">
      <p>
        {{ cue.textStart }}
        <clipboard-code :data-to-copy="cue.class" />
        {{ cue.textEnd }}
      </p>
    </div>

  </div>
</template>

<script setup>
import ClipboardButton from '@/components/common/clipboardButton.vue'
import ClipboardCode from '@/components/common/clipboardCode.vue'

const basicCues = {
  title: 'Basic Cues',
  cues: [
    {
      class: 'adx-cue',
      textStart: 'This is a basic cue, with no border. This',
      textEnd: 'is used as a low-tier hierarchy element and contains extra information inside the flow of the content on the page.',
    },
    {
      class: 'adx-cue-left',
      textStart: 'This is a basic cue, with a border on the left. This',
      textEnd: 'is used as a mid-tier hierarchy element inside the flow of content but can stand alone as a key point to draw the eye and interrupt the reading eyeline motion.',
    },
    {
      class: 'adx-cue-bordered',
      textStart: 'This is a basic cue, with a border on the left and a surrounding border. This',
      textEnd: 'is used as a top-tier hierarchy element to call extra attention to important information.',
    },
  ]
}

const basicCuesHtmlComment = '<!-- Basic Cues HTML Usage -->\n'

const basicCuesHtml = '<div class="adx-cue">\n' +
  '  <p>This is a basic cue, with no border. This is used as a low-tier hierarchy element and contains extra information inside the flow of the content on the page.</p>\n' +
  '</div>'

const cueVariants = {
  title: 'Cue Variants',
  cues: [
    {
      class: 'adx-cue-note',
      textStart: 'The note cue should be used to call out information on a page without breaking the flow of the readers attention. Using the',
      textEnd: 'cue should be used if there is useful content on the page - items that students should note down or could be marked with an N.B. (Nota Bene).',
    },
    {
      class: 'adx-cue-case-study',
      textStart: 'The case study cue should be used to call out the scaffolding text or context of a case study using the',
      textEnd: 'cue should be used if there a case study layout on the page before the case study text content and then followed by a direction box with the appropriate call-to-action task.',
    },
    {
      class: 'adx-cue-example',
      textStart: 'An example should use the',
      textEnd: 'cue. This is a visual clue to an example and does not require a heading explaining that to a student, but should be evident in the text itself.',
    },
    {
      class: 'adx-cue-definition',
      textStart: 'When providing a definition for a specific term or concept you should use the',
      textEnd: 'cue. This will provide a visual cue to students that something important is being defined in the content.',
    },
    {
      class: 'adx-cue-phil-toolkit',
      textStart: 'The',
      textEnd: 'cue is there to call out content that is used to call out specific re-usable concepts in your "philosophical toolkit" used in the Introduction to Health Ethics course',
    },
    {
      class: 'adx-cue-notification',
      textStart: 'A notification should be used to notify the student of the information contained within the cue box. This might be to nudge students to complete certain tasks or activities, that there is an upcoming assessment or interactive session. The',
      textEnd: 'cue is a subtle hint to students.',
    },
    {
      class: 'adx-cue-attention',
      textStart: 'The',
      textEnd: 'is a non-subtle cue that contains critical information that students must address or is of the utmost importance they take on. This might be useful to flag upcoming events, due dates, important tasks and reminders for students, or key content beyond simply assessment or course-related reasons (legal, safety, etc).',
    },
    {
      class: 'adx-cue-content-warning',
      textStart: 'The',
      textEnd: 'is an obvious cue that contains a warning about possibly sensitive content. This might be used to warn students about content that may be upsetting or distressing, or content that may be triggering for students with a history of trauma.',
    },
    {
      class: 'adx-cue-summary',
      textStart: 'The',
      textEnd: 'cue is there to call out content that is a summary of prior content or learning. Use it to wrap up a lesson, module or course or to reintroduce content learnt earlier in the course or in a previous course.',
    },

  ]
}

const directionCues = {
  title: 'Direction Cues',
  cues: [
  {
      class: 'adx-direction-cue-assessment',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, an Assessment direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    },
    {
      class: 'adx-direction-cue-discussion',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, a Discussion direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    },
    {
      class: 'adx-direction-cue-extra',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, an Extra direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    },
    {
      class: 'adx-direction-cue-interactive',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, an Interactive direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    },
    {
      class: 'adx-direction-cue-investigate',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, an Investigate direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    },
    {
      class: 'adx-direction-cue-practice',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, a Practice direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    },
    {
      class: 'adx-direction-cue-reading',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, a Reading direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    },
    {
      class: 'adx-direction-cue-reflect',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, a Reflect direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    },
    {
      class: 'adx-direction-cue-watch',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, a Watch direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    },
    {
      class: 'adx-direction-cue-write',
      textStart: 'The',
      textEnd: 'cue is used to pair a direction box with a cue box. In this case, a Write direction box. The aim of this is to provide extra content to students to help them complete the task in the direction box.',
    }
  ]
}

</script>