export default {
  title: "Components/Stage List",
  parameters: {
    docs: { description: { component: "A schedule list for a single stage, showing acts with times and descriptions. Used on day program pages via a Nunjucks macro." } },
    status: "ready",
  },
  tags: ["UI","schedule","content"],
};

export const Default = () => `
<section class="c-stage-list">
  <h2 class="c-stage-list__heading">Låttältet</h2>
  <ul class="c-stage-list__list">
    <li class="c-stage-list__item">
      <span class="c-stage-list__time">19:00–20:00</span>
      <strong class="c-stage-list__name">Bingsjölåtar med Täby spelmansgille</strong>
    </li>
    <li class="c-stage-list__item">
      <span class="c-stage-list__time">20:00–21:00</span>
      <strong class="c-stage-list__name">Orelåtar med Ore spelmän</strong>
    </li>
    <li class="c-stage-list__item">
      <span class="c-stage-list__time">21:00–22:00</span>
      <strong class="c-stage-list__name">Norra Hälsingland med Nordanstigs spelmanslag</strong>
    </li>
    <li class="c-stage-list__item">
      <span class="c-stage-list__time">22:00–23:00</span>
      <strong class="c-stage-list__name">Södra Dalarna med Korsmora spelmän</strong>
    </li>
    <li class="c-stage-list__item">
      <span class="c-stage-list__time">23:00</span>
      <strong class="c-stage-list__name">Rättvikslåtar med Rättviks spelmanslag</strong>
    </li>
  </ul>
</section>
`;
Default.storyName = "Default";
export const With_descriptions = () => `
<section class="c-stage-list">
  <h2 class="c-stage-list__heading">Bystugubanan</h2>
  <ul class="c-stage-list__list">
    <li class="c-stage-list__item">
      <span class="c-stage-list__time">19:00–20:30</span>
      <strong class="c-stage-list__name">Täby Spelmansgille</strong>
      <span class="c-stage-list__description">Täby Spelmansgille spelar polskor efter Peckos helmer</span>
    </li>
    <li class="c-stage-list__item">
      <span class="c-stage-list__time">20:30–21:00</span>
      <strong class="c-stage-list__name">Nordanstigs spelmanslag</strong>
    </li>
    <li class="c-stage-list__item">
      <span class="c-stage-list__time">21:00–22:00</span>
      <strong class="c-stage-list__name">Malungs folkhögskola</strong>
      <span class="c-stage-list__description">Gamla och nya Malungselever hälsas välkomna att spela till dans</span>
    </li>
  </ul>
</section>
`;
With_descriptions.storyName = "With descriptions";
export const Single_act = () => `
<section class="c-stage-list">
  <h2 class="c-stage-list__heading">Nygårdsgården</h2>
  <ul class="c-stage-list__list">
    <li class="c-stage-list__item">
      <span class="c-stage-list__time">13:00–14:00</span>
      <strong class="c-stage-list__name">Spelmansmöte</strong>
      <span class="c-stage-list__description">Sofia Sandén och Ulrika Bodén träffas i årets spelmansmöte.</span>
    </li>
  </ul>
</section>
`;
Single_act.storyName = "Single act";