<template>
  <div id="Tables" class="component-item">
    <h3>Tables</h3>
    <h4 class="adx-markup-label">Basic table</h4>

    <table class="adx">
      <caption>Here's an example basic table caption.</caption>
      <thead>
        <tr>
          <th class="">Name</th>
          <th>Contact</th>
          <th>Team</th>
          <th class="">Section</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dom</td>
          <td>6000</td>
          <td>Detroit</td>
          <td>Back to front</td>
          <td>40</td>
        </tr>
        <tr class="active-row">
          <td>Melissa</td>
          <td>5150</td>
          <td>Paris</td>
          <td>Midfield</td>
          <td>31</td>
        </tr>
      </tbody>
    </table>

    <pre class="w-full"><code class="language-markup">&lt;!-- Basic table HTML Usage --&gt;
    &lt;table class="adx"&gt;
      &lt;caption&gt;Here's an example basic table caption.&lt;/caption&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th class=""&gt;Name&lt;/th&gt;
          &lt;th&gt;Contact&lt;/th&gt;
          &lt;th&gt;Team&lt;/th&gt;
          &lt;th class=""&gt;Section&lt;/th&gt;
          &lt;th&gt;Points&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Dom&lt;/td&gt;
        &lt;td&gt;6000&lt;/td&gt;
        &lt;td&gt;Detroit&lt;/td&gt;
        &lt;td&gt;Back to front&lt;/td&gt;
        &lt;td&gt;40&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr class="active-row"&gt;
        &lt;td&gt;Melissa&lt;/td&gt;
        &lt;td&gt;5150&lt;/td&gt;
        &lt;td&gt;Paris&lt;/td&gt;
        &lt;td&gt;Midfield&lt;/td&gt;
        &lt;td&gt;31&lt;/td&gt;
      &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;</code></pre>


    <h4 class="adx-markup-label">Dual-axis table</h4>

    <table class="adx">
      <caption>Here's an example basic table with two axes</caption>
      <tr>
        <th>A</th>
        <th>B</th>
        <th>C</th>
        <th>D</th>
        <th>E</th>
        <th>F</th>
        <th>G</th>
        <th>H</th>
      </tr>
      <tr>
        <th>B</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr>
        <th>C</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr>
        <th>D</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
      <tr>
        <th>E</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
      </tr>
    </table>

    <pre class="w-full"><code class="language-markup">&lt;!-- Basic table HTML Usage --&gt;
    &lt;table class="adx"&gt;
      &lt;caption&gt;Here's an example basic table with two axes&lt;/caption&gt;
      &lt;tr&gt;
        &lt;th&gt;A&lt;/th&gt;
        &lt;th&gt;B&lt;/th&gt;
        &lt;th&gt;C&lt;/th&gt;
        &lt;th&gt;D&lt;/th&gt;
        &lt;th&gt;E&lt;/th&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;B&lt;/th&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;4&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;C&lt;/th&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;4&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;D&lt;/th&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;4&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th&gt;E&lt;/th&gt;
        &lt;td&gt;1&lt;/td&gt;
        &lt;td&gt;2&lt;/td&gt;
        &lt;td&gt;3&lt;/td&gt;
        &lt;td&gt;4&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;</code></pre>

    <h4 class="adx-markup-label">Simple table</h4>

    <table class="adx simple">
      <caption>Here's an example simple table caption.</caption>
      <thead>
        <tr>
          <th class="">Name</th>
          <th>Contact</th>
          <th>Team</th>
          <th class="">Section</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dom</td>
          <td>6000</td>
          <td>Detroit</td>
          <td>Back to front</td>
          <td>40</td>
        </tr>
        <tr class="active-row">
          <td>Melissa</td>
          <td>5150</td>
          <td>Paris</td>
          <td>Midfield</td>
          <td>31</td>
        </tr>
      </tbody>
    </table>

    <pre class="w-full"><code class="language-markup">&lt;!-- Simple table HTML Usage --&gt;
    &lt;table class="adx simple"&gt;
      &lt;caption&gt;Here's an example simple table caption.&lt;/caption&gt;
      &lt;thead&gt;
        &lt;tr&gt;
          &lt;th class=""&gt;Name&lt;/th&gt;
          &lt;th&gt;Contact&lt;/th&gt;
          &lt;th&gt;Team&lt;/th&gt;
          &lt;th class=""&gt;Section&lt;/th&gt;
          &lt;th&gt;Points&lt;/th&gt;
        &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;Dom&lt;/td&gt;
        &lt;td&gt;6000&lt;/td&gt;
        &lt;td&gt;Detroit&lt;/td&gt;
        &lt;td&gt;Back to front&lt;/td&gt;
        &lt;td&gt;40&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr class="active-row"&gt;
        &lt;td&gt;Melissa&lt;/td&gt;
        &lt;td&gt;5150&lt;/td&gt;
        &lt;td&gt;Paris&lt;/td&gt;
        &lt;td&gt;Midfield&lt;/td&gt;
        &lt;td&gt;31&lt;/td&gt;
      &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;</code></pre>

  </div>
</template>