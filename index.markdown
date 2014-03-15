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

## Projects I have recently worked on

### Websites

<ul class="Works">
  {% for post in site.categories.website %}
    <li>
      <p><img src="{{ post.picture }}" alt="{{ post.title }}"></p>
      <p>{{ post.categories }}</p>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt }}</p>
      <p><a href="{{ post.link }}">{{ post.link }}</a></p>
    </li>
  {% endfor %}
</ul>

### Games

### Digital Art

[contact]: #contact
