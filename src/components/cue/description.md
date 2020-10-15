---

name: Cue
status: #
description: #
css-base: #
variant: [simple, shadow, flat, gradient, icon]
modifiers: 
note: 

---

<section class="{{ css-base }}">
  <h3>{{ heading }}</h3> 
  <p>{{ text }}</p>
  {% if page.action %}
    <button>  <a href="#">{{ action }}</a>  </button>
  {% endif %}
</section>
