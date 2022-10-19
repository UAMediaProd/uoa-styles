<template>
  <div id="Navigation" class="component-item">

    <h3>Navigation</h3>
    <h4 class="adx-markup-label">Nav Table</h4>
    <ul class="adx-nav-table">
      <li class="full"><h4><a href="#">About this course</a></h4></li>
      <li><h4><a href="#">Module 1</a></h4>
        <p>Digital Security</p></li>
      <li><h4><a href="#">Module 2</a></h4>
        <p>Security Audit</p></li>
      <li><h4><a href="#">Module 3</a></h4>
        <p>Cyber Security Attacks</p></li>
      <li><h4><a href="#">Module 4</a></h4>
        <p>Security Investigation</p></li>
      <li><h4><a href="#">Module 5</a></h4>
        <p>Security Management</p></li>
      <li><h4><a href="#">Module 6</a></h4>
        <p>Privacy and Ethics</p></li>
      <li class="full"><h4><a href="#">Online Orientations</a></h4>
        <p>Seperate MyUni course</p></li>
    </ul>

    <pre><code class="language-markup">&lt;!-- custom navigation table HTML usage --&gt;
    &lt;ul class="adx-nav-table"&gt;
      &lt;li class="full"&gt;&lt;h4&gt;&lt;a href="#"&gt;About this course&lt;/a&gt;&lt;/h4&gt;&lt;/li&gt;
      &lt;li&gt;&lt;h4&gt;&lt;a href="#"&gt;Module 1&lt;/a&gt;&lt;/h4&gt;&lt;p&gt;Digital Security&lt;/p&gt;&lt;/li&gt;
      &lt;li&gt;&lt;h4&gt;&lt;a href="#"&gt;Module 2&lt;/a&gt;&lt;/h4&gt;&lt;p&gt;Security Audit&lt;/p&gt;&lt;/li&gt;
      &lt;li&gt;&lt;h4&gt;&lt;a href="#"&gt;Module 3&lt;/a&gt;&lt;/h4&gt;&lt;p&gt;Cyber Security Attacks&lt;/p&gt;&lt;/li&gt;
      &lt;li&gt;&lt;h4&gt;&lt;a href="#"&gt;Module 4&lt;/a&gt;&lt;/h4&gt;&lt;p&gt;Security Investigation&lt;/p&gt;&lt;/li&gt;
      &lt;li&gt;&lt;h4&gt;&lt;a href="#"&gt;Module 5&lt;/a&gt;&lt;/h4&gt;&lt;p&gt;Security Management&lt;/p&gt;&lt;/li&gt;
      &lt;li&gt;&lt;h4&gt;&lt;a href="#"&gt;Module 6&lt;/a&gt;&lt;/h4&gt;&lt;p&gt;Privacy and Ethics&lt;/p&gt;&lt;/li&gt;
      &lt;li class="full"&gt;&lt;h4&gt;&lt;a href="#"&gt;Online Orientations&lt;/a&gt;&lt;/h4&gt;&lt;p&gt;Seperate MyUni course&lt;/p&gt;&lt;/li&gt;
    &lt;/ul&gt;</code></pre>

    <h4 class="adx-markup-label">Nav Cards</h4>

    <p>Styles added to the existing CIDILabs Navigation block which wraps correctly in MyUni. Using the default navigation block will produce the following:</p>

    <div id="kl_navigation" class="">
      <ul class="kl_nav_list_1">
        <li id="kl_nav_item_0" class="">
          <a class="" href="https://myuni.adelaide.edu.au/courses/67416/modules/495580"
             data-api-endpoint="https://myuni.adelaide.edu.au/api/v1/courses/67416/modules/495580"
             data-api-returntype="Module">Module 1</a>
        </li>
        <li id="kl_nav_item_1" class="">
          <a class="" href="https://myuni.adelaide.edu.au/courses/67416/modules/495530"
             data-api-endpoint="https://myuni.adelaide.edu.au/api/v1/courses/67416/modules/495530"
             data-api-returntype="Module">Module 2</a>
        </li>
        <li id="kl_nav_item_2" class="">
          <a class="" href="https://myuni.adelaide.edu.au/courses/67416/modules/489541"
             data-api-endpoint="https://myuni.adelaide.edu.au/api/v1/courses/67416/modules/489541"
             data-api-returntype="Module">Module 3</a>
        </li>
        <li id="kl_nav_item_3" class="">
          <a class="" href="https://myuni.adelaide.edu.au/courses/67416/modules/489540"
             data-api-endpoint="https://myuni.adelaide.edu.au/api/v1/courses/67416/modules/489540"
             data-api-returntype="Module">Module 4</a>
        </li>
        <li id="kl_nav_item_3" class="">
          <a class="" href="https://myuni.adelaide.edu.au/courses/67416/modules/489540"
             data-api-endpoint="https://myuni.adelaide.edu.au/api/v1/courses/67416/modules/489540"
             data-api-returntype="Module">Module 5</a>
        </li>
        <li id="kl_nav_item_3" class="">
          <a class="" href="https://myuni.adelaide.edu.au/courses/67416/modules/489540"
             data-api-endpoint="https://myuni.adelaide.edu.au/api/v1/courses/67416/modules/489540"
             data-api-returntype="Module">Module 6</a>
        </li>
      </ul>
    </div>
  </div>
</template>