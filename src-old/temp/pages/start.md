---
layout: layouts/base
title: Eleventy
permalink: /starter/
templateEngineOverride: njk
---

<h1>Welcome to {{ title }}</h1>

<p>This is the homepage of my Eleventy project.</p>

{# Define props first #}
{% set buttonText = "Click Me Now!" %}

{# Include button template #}
{% include "components/button/button.njk" %}

{% set cardText = "Keep your cards to yourself!" %}
{% include "components/card/card.njk" %}

<p>Lineup:</p>
<ul class="lineup">
  {% for act in lineup2025 | sort(attribute='starttime') %}
    <li class="act">
      <h3 class="act__name">{{ act.name }}</h3>
      <p class="act__meta">
        {{ act.day }} &middot; {{ act.starttime }}–{{ act.endtime }} &middot; {{ act.stage }}
      </p>
      {% if act.description %}
        <p class="act__description">{{ act.description }}</p>
      {% endif %}
    </li>
  {% endfor %}
</ul>

<pre>{{ lineup2025 | dump }}</pre>
<p>end.</p>

<h1>Lineup Test</h1>
<ul>
{% for act in lineup2025 %}
  <li>{{ act.name }} ({{ act.starttime }}–{{ act.endtime }})</li>
{% endfor %}
</ul>
