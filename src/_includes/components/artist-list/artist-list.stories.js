import './artist-list.css';
export default {
  title: "Components/Artist List",
  parameters: {
    docs: { description: { component: "A list of non-headline artists with optional thumbnail image, link to artist page, and stage slot info. Used on the lineup page." } },
    status: "ready",
  },
  tags: ["UI","content","lineup"],
};

export const Default = () => `<section class="c-artist-list">
  <h2 class="c-artist-list__heading">Övriga akter</h2>
  <ul class="c-artist-list__list">
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <a class="c-artist-list__name" href="/scen/malungs-folkhögskola/">Malungs folkhögskola</a>
        <div class="c-artist-list__meta artist-meta-item">
    <div class="c-artist-list__meta-info artist-meta-info artist-meta-location">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Bystugubanan</div>
    <div class="c-artist-list__meta-info artist-meta-info">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>Tisdag <time datetime="21:00">21:00</time>–<time datetime="22:00">22:00</time></div>
  </div>
      </div>
    </li>
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <span class="c-artist-list__name">Nordanstigs spelmanslag</span>
        <div class="c-artist-list__meta artist-meta-item">
    <div class="c-artist-list__meta-info artist-meta-info artist-meta-location">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Bystugubanan</div>
    <div class="c-artist-list__meta-info artist-meta-info">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>Tisdag <time datetime="20:30">20:30</time>–<time datetime="21:00">21:00</time></div>
  </div>
      </div>
    </li>
    <li class="c-artist-list__item">
      <div class="c-artist-list__image">
        <img src="https://placehold.co/300x300?text=T%C3%A4by%20Spelmansgille" alt="Täby Spelmansgille" loading="lazy" width="300" height="300">
      </div>
      <div class="c-artist-list__body">
        <span class="c-artist-list__name">Täby Spelmansgille</span>
        <div class="c-artist-list__meta artist-meta-item">
    <div class="c-artist-list__meta-info artist-meta-info artist-meta-location">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Bystugubanan</div>
    <div class="c-artist-list__meta-info artist-meta-info">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>Tisdag <time datetime="19:00">19:00</time>–<time datetime="20:30">20:30</time></div>
  </div>
      </div>
    </li>
  </ul>
</section>`;
Default.storyName = "Default";
export const Without_images = () => `<section class="c-artist-list">
  <h2 class="c-artist-list__heading">Övriga akter</h2>
  <ul class="c-artist-list__list">
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <span class="c-artist-list__name">Bröderna</span>
        <div class="c-artist-list__meta artist-meta-item">
    <div class="c-artist-list__meta-info artist-meta-info artist-meta-location">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Tunet</div>
    <div class="c-artist-list__meta-info artist-meta-info">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>Onsdag <time datetime="19:15">19:15</time>–<time datetime="19:45">19:45</time></div>
  </div>
      </div>
    </li>
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <span class="c-artist-list__name">Eyra</span>
        <div class="c-artist-list__meta artist-meta-item">
    <div class="c-artist-list__meta-info artist-meta-info artist-meta-location">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Tunet</div>
    <div class="c-artist-list__meta-info artist-meta-info">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>Onsdag <time datetime="23:15">23:15</time>–<time datetime="23:45">23:45</time></div>
  </div>
      </div>
    </li>
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <a class="c-artist-list__name" href="/scen/kapell-malén/">Kapell Malén</a>
        <div class="c-artist-list__meta artist-meta-item">
    <div class="c-artist-list__meta-info artist-meta-info artist-meta-location">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Tunet</div>
    <div class="c-artist-list__meta-info artist-meta-info">
<span class="icon artist-meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>Onsdag <time datetime="22:15">22:15</time>–<time datetime="22:45">22:45</time></div>
  </div>
      </div>
    </li>
  </ul>
</section>`;
Without_images.storyName = "Without images";