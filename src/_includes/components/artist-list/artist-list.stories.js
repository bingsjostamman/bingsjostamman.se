export default {
  title: "Components/Artist List",
  parameters: {
    docs: { description: { component: "A list of non-headline artists with optional thumbnail image, link to artist page, and stage slot info. Used on the lineup page." } },
    status: "ready",
  },
  tags: ["UI","content","lineup"],
};

export const Default = () => `<section class="c-artist-list">
  <h2 class="c-artist-list__heading">Övriga artister</h2>
  <ul class="c-artist-list__list">
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <a class="c-artist-list__name" href="/scen/malungs-folkhögskola/">Malungs folkhögskola</a>
        <span class="c-artist-list__meta">Tisdag · 21:00–22:00 · Bystugubanan</span>
      </div>
    </li>
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <span class="c-artist-list__name">Nordanstigs spelmanslag</span>
        <span class="c-artist-list__meta">Tisdag · 20:30–21:00 · Bystugubanan</span>
      </div>
    </li>
    <li class="c-artist-list__item">
      <div class="c-artist-list__image">
        <img src="https://placehold.co/300x300?text=T%C3%A4by%20Spelmansgille" alt="Täby Spelmansgille" loading="lazy" width="300" height="300">
      </div>
      <div class="c-artist-list__body">
        <span class="c-artist-list__name">Täby Spelmansgille</span>
        <span class="c-artist-list__meta">Tisdag · 19:00–20:30 · Bystugubanan</span>
        <span class="c-artist-list__meta">Onsdag · 19:00–20:00 · Låttältet</span>
      </div>
    </li>
  </ul>
</section>`;
Default.storyName = "Default";
export const Without_images = () => `<section class="c-artist-list">
  <h2 class="c-artist-list__heading">Övriga artister</h2>
  <ul class="c-artist-list__list">
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <span class="c-artist-list__name">Bröderna</span>
        <span class="c-artist-list__meta">Onsdag · 19:15–19:45 · Tunet</span>
      </div>
    </li>
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <span class="c-artist-list__name">Eyra</span>
        <span class="c-artist-list__meta">Onsdag · 23:15–23:45 · Tunet</span>
      </div>
    </li>
    <li class="c-artist-list__item">
      <div class="c-artist-list__body">
        <a class="c-artist-list__name" href="/scen/kapell-malén/">Kapell Malén</a>
        <span class="c-artist-list__meta">Onsdag · 22:15–22:45 · Tunet</span>
      </div>
    </li>
  </ul>
</section>`;
Without_images.storyName = "Without images";