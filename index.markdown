---
layout: default
description: I’m a front-end developer and versatile digital artist. I’m into building lovingly hand-crafted websites and creating content for real-time rendering, film and animation. I’m also a bearded hacker making games with my friends.
---

<div class="Introduction">
  <strong>Hi, I’m Manuel.</strong><br>
  I make websites,<br>
  games and digital art.
</div>

## Who am I?

<div class="h-resume hResume">
  <p class="p-summary summary">
    I’m a front-end developer and versatile digital artist. I’m into <span class="p-skill skill">building lovingly hand-crafted websites</span> and <span class="p-skill skill">creating content for real-time rendering, film and animation</span>. I’m also a bearded hacker <span class="p-skill skill">making games</span> with my friends.
  </p>
</div>

Yes, [you can hire me][contact] to create your websites, games and digital art.

<ul class="Grid Grid--gutter">
  {% for post in site.posts %}
    <li class="Grid-item Work u-sizeOneWhole smaller-u-sizeOneHalf medium-u-sizeOneThird large-u-sizeOneFourth larger-u-sizeOneFifth">
      <img class="Work-thumbnail" src="{{ post.picture }}" alt="{{ post.title }}">
      <p class="Work-category">{{ post.categories }}</p>
      <h2 class="Work-title">{{ post.title }}</h2>
      <p class="Work-excerpt">{{ post.excerpt }}</p>

      {% if post.article %}
        <p><a href="{{ post.url }}">{{ post.url }}</a></p>
      {% endif %}

      {% if post.link %}
        <p><a href="{{ post.link }}">{{ post.link }}</a></p>
      {% endif %}
    </li>
  {% endfor %}
</ul>

[contact]: #contact
