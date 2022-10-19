<template>
  <div id="Buttons" class="component-item">
    <h3>Buttons</h3>
    <p><em>Note: Canvas automatically strips out
      <code>button</code> elements, but the following styles can be applied to
      <code>a</code> tags to mimic the look and experience.</em></p>
    <h4 class="adx-markup-label">Base Buttons</h4>

    <div class="flex">
      <div class="my-auto">
        <button class="adx-button">base</button>
      </div>
      <pre><code class="language-markup">&lt;!-- Buttons using button elements HTML Usage --&gt;
    &lt;button class="adx-button"&gt;base&lt;/button&gt;</code></pre>
    </div>

    <div class="flex">
      <div class="my-auto"><a class="adx-button">base</a></div>
      <pre><code class="language-markup">&lt;!-- Buttons using button elements HTML Usage --&gt;
    &lt;a class="adx-button"&gt;base&lt;/a&gt;</code></pre>
    </div>


    <h4 class="adx-markup-label">Button Variations</h4>

    <p>To add colour, add the <code>colour</code> reference class.</p>
    <div class="grid-4">
      <button class="adx-button brand-red">brand-red</button>
      <button class="adx-button primary">primary</button>
      <button class="adx-button accent">accent</button>
      <button class="adx-button complimentary">complimentary</button>
      <button class="adx-button brand-midblue">midblue</button>
    </div>

    <pre><code class="language-markup">&lt;!-- Buttons using button elements HTML Usage --&gt;
    &lt;button class="adx-button brand-red"&gt;Click Me&lt;/button&gt;
    &lt;button class="adx-button primary"&gt;Click Me&lt;/button&gt;
    &lt;button class="adx-button accent"&gt;Click Me&lt;/button&gt;
    &lt;button class="adx-button complimentary"&gt;Click Me&lt;/button&gt;
    &lt;button class="adx-button brand-midblue"&gt;Click Me&lt;/button&gt;</code></pre>

    <div class="grid-4">
      <a class="adx-button brand-red">Click Me</a>
      <a class="adx-button primary">Click Me</a>
      <a class="adx-button accent">Click Me</a>
      <a class="adx-button complimentary">Click Me</a>
      <a class="adx-button brand-midblue">Click Me</a>
    </div>

    <pre><code class="language-markup">&lt;!-- Buttons using a link elements HTML Usage --&gt;
    &lt;a class="adx-button brand-red"&gt;Click Me&lt;/a&gt;
    &lt;a class="adx-button primary"&gt;Click Me&lt;/a&gt;
    &lt;a class="adx-button accent"&gt;Click Me&lt;/a&gt;
    &lt;a class="adx-button complimentary"&gt;Click Me&lt;/a&gt;
    &lt;a class="adx-button brand-midblue"&gt;Click Me&lt;/a&gt;</code></pre>

    <h4 class="adx-markup-label">Button groups</h4>

    <p>Button groups can be made from an <code>ul</code> and <code>li</code> elements,</p>

    <ul class="adx-button-group">
      <li class="adx-button brand-midblue">Click Me</li>
      <li class="adx-button brand-midblue">Click Me</li>
      <li class="adx-button brand-midblue">Click Me</li>
    </ul>

    <pre><code class="language-markup">&lt;!-- List button group HTML Usage --&gt;
    &lt;ul class="adx-button-group"&gt;
      &lt;li class="adx-button brand-midblue"&gt;Click Me&lt;/li&gt;
      &lt;li class="adx-button brand-midblue"&gt;Click Me&lt;/li&gt;
      &lt;li class="adx-button brand-midblue"&gt;Click Me&lt;/li&gt;
    &lt;/ul&gt;</code></pre>

    <p>Or from <code>divs</code> and <code>p</code> tags,</p>

    <div class="adx-button-group">
      <button class="adx-button accent">Click Me</button>
      <button disabled class="adx-button complimentary disabled">You can't Click Me</button>
      <button class="adx-button primary">Click Me</button>
    </div>

    <pre><code class="language-markup">&lt;!-- Div button group HTML Usage --&gt;
    &lt;div class="adx-button-group"&gt;
      &lt;button class="adx-button accent"&gt;Click Me&lt;/button&gt;
      &lt;button disabled class="adx-button complimentary disabled"&gt;You can't Click Me&lt;/button&gt;
      &lt;button class="adx-button primary"&gt;Click Me&lt;/button&gt;
    &lt;/div&gt;</code></pre>

    <p>And you can arrange them in a stack using <code>.adx-button-stack</code>.</p>

    <div class="adx-button-stack">
      <p class="adx-button brand-red">Click Me</p>
      <p class="adx-button brand-red">Click Me</p>
      <p class="adx-button brand-red">Click Me</p>
    </div>

    <pre><code class="language-markup">&lt;!-- Button stack HTML Usage --&gt;
    &lt;div class="adx-button-stack"&gt;
      &lt;p class="adx-button brand-red"&gt;Click Me&lt;/p&gt;
      &lt;p class="adx-button brand-red"&gt;Click Me&lt;/p&gt;
      &lt;p class="adx-button brand-red"&gt;Click Me&lt;/p&gt;
    &lt;/div&gt;</code></pre>
  </div>
</template>