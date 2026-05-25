import './stage-list.css';
export default {
  title: "Components/Stage List",
  parameters: {
    docs: { description: { component: "A schedule list of slots for a single stage, showing time, act name, and optional slot descriptions." } },
    status: "ready",
  },
  tags: ["UI","schedule","content"],
};

export const Default = () => `
<ol class="c-stage-list u-list-unstyled">
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="19:00">19:00</time>–<time datetime="20:00">20:00</time></span>
        <div class="c-stage-list__name">Bingsjölåtar med Täby spelmansgille</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="20:00">20:00</time>–<time datetime="21:00">21:00</time></span>
        <div class="c-stage-list__name">Orelåtar med Ore spelmän</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="21:00">21:00</time>–<time datetime="22:00">22:00</time></span>
        <div class="c-stage-list__name">Norra Hälsingland med Nordanstigs spelmanslag</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="22:00">22:00</time>–<time datetime="23:00">23:00</time></span>
        <div class="c-stage-list__name">Södra Dalarna med Korsmora spelmän</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="23:00">23:00</time></span>
        <div class="c-stage-list__name">Rättvikslåtar med Rättviks spelmanslag</div>
      </li>
    </ol>
`;
Default.storyName = "Default";
export const With_descriptions = () => `
<ol class="c-stage-list u-list-unstyled">
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="19:00">19:00</time>–<time datetime="20:30">20:30</time></span>
        <div class="c-stage-list__name">Täby Spelmansgille</div>
        <span class="c-stage-list__description">Täby Spelmansgille spelar polskor efter Peckos helmer</span>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="20:30">20:30</time>–<time datetime="21:00">21:00</time></span>
        <div class="c-stage-list__name">Nordanstigs spelmanslag</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="21:00">21:00</time>–<time datetime="22:00">22:00</time></span>
        <div class="c-stage-list__name">Malungs folkhögskola</div>
        <span class="c-stage-list__description">Gamla och nya Malungselever hälsas välkomna att spela till dans</span>
      </li>
    </ol>
`;
With_descriptions.storyName = "With descriptions";
export const Single_act = () => `
<div class="c-stage-list u-list-unstyled">
      <div class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="13:00">13:00</time>–<time datetime="14:00">14:00</time></span>
        <div class="c-stage-list__name">Spelmansmöte</div>
        <span class="c-stage-list__description">Sofia Sandén och Ulrika Bodén träffas i årets spelmansmöte.</span>
      </div>
    </div>
`;
Single_act.storyName = "Single act";