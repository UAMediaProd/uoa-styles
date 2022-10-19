<template>
  <div id="Definitions" class="component-item">
    <h3>Definitions &amp; Glossaries</h3>
    <h4 class="adx-markup-label">Definition List</h4>

    <dl>
      <dt>Here is a term</dt>
      <dd>Meditation cray snackwave raw denim thundercats banh mi. XOXO pour-over unicorn bushwick YOLO brunch. Flexitarian direct trade hammock cloud bread art party occupy. Slow-carb glossier literally thundercats truffaut, church-key quinoa tousled. Pour-over asymmetrical brooklyn narwhal, hell of waistcoat 8-bit irony.</dd>
      <dt>Here is a term</dt>
      <dd>Here is the information about that term.</dd>
      <dt>Here is a term</dt>
      <dd>Here is the information about that term.</dd>
      <dt>Here is a term</dt>
      <dd>Here is the information about that term.</dd>
    </dl>

    <pre><code class="language-markup">&lt;!-- Definition list HTML Usage --&gt;
&lt;dl&gt;
  &lt;dt&gt;Here is a term&lt;/dt&gt;
  &lt;dd&gt;Meditation cray snackwave raw denim thundercats banh mi. XOXO pour-over unicorn bushwick YOLO brunch. Flexitarian direct trade hammock cloud bread art party occupy. Slow-carb glossier literally thundercats truffaut, church-key quinoa tousled. Pour-over asymmetrical brooklyn narwhal, hell of waistcoat 8-bit irony.&lt;/dd&gt;
  &lt;dt&gt;Here is a term&lt;/dt&gt;
  &lt;dd&gt;Here is the information about that term.&lt;/dd&gt;
  &lt;dt&gt;Here is a term&lt;/dt&gt;
  &lt;dd&gt;Here is the information about that term.&lt;/dd&gt;
  &lt;dt&gt;Here is a term&lt;/dt&gt;
  &lt;dd&gt;Here is the information about that term.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>

    <h4 class="adx-markup-label">Glossary Tooltip</h4>
    <p><em>Note: this depends on some JavaScript being added to the OUA/LEI Development/Alliance sub-accounts. This won't work in-course until that's been completed!</em></p>
    <p>Glossary page needs to be created in the same course, using a definition list layout. A script will then get all of the terms and matching definitions and apply a tooltip to the content.</p>
    <br>
    <div style="width: 60%;margin:auto;">
      <p>A <span class="tooltip">glossary<span class="tooltiptext">A page in MyUni containing terms and definitions </span></span> will provide definitions for a <span class="tooltip">term<span class="tooltiptext">Definition text</span></span> inside a course content page.</p>
    </div>

    <pre><code class="language-markup">&lt;!-- Tooltip manual HTML Usage; this should be automated though --&gt;
&lt;p&gt;
  A &lt;span class="tooltip"&gt;glossary&lt;span class="tooltiptext"&gt;A page in MyUni containing terms and definitions&lt;/span&gt;&lt;/span&gt; will provide definitions for a&lt;span class="tooltip"&gt;term&lt;span class="tooltiptext"&gt;Definition text&lt;/span&gt;&lt;/span&gt; inside a course content page.
&lt;/p&gt;</code></pre>

  </div>
</template>