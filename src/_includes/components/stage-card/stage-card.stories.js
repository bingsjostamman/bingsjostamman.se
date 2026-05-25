import './stage-card.css';
export default {
  title: "Components/Stage Card",
  parameters: {
    docs: { description: { component: "A stage card with optional image and description that renders its slot list using the Stage List component." } },
    status: "ready",
  },
  tags: ["UI","schedule","content"],
};

export const Default = () => `
<div class="c-stage-card"><div class="c-stage-card__image">
      <img src="https://placehold.co/1200x720" alt="The Valley stage" loading="lazy">
    </div><div class="c-stage-card__body">
      <h3 class="c-stage-card__stage-name">The Valley</h3><p class="c-stage-card__stage-description">A hidden sanctuary at the valley floor, offering intimate proximity and natural acoustics.</p><ol class="c-stage-list u-list-unstyled c-stage-card__slots c-stage-list--split-narrow">
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">13:15</span>
        <strong class="c-stage-list__name">Sarah Thorne</strong>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">14:30</span>
        <strong class="c-stage-list__name">Whisper Creek Solo</strong>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">15:45</span>
        <strong class="c-stage-list__name">Mountain Breath</strong>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">17:00</span>
        <strong class="c-stage-list__name">Clara &amp; The Harp</strong>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">18:15</span>
        <strong class="c-stage-list__name">Old Ghost Trio</strong>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">19:30</span>
        <strong class="c-stage-list__name">The Echoing Vale</strong>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">20:45</span>
        <strong class="c-stage-list__name">Solstice Winds</strong>
      </li>
    </ol>
    </div>
  </div>
`;
Default.storyName = "Default";