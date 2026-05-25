import './workshops-list.css';
export default {
  title: "Components/Workshops List",
  parameters: {
    docs: { description: { component: "List of workshop cards with name, description, location, and time." } },
    status: "ready",
  },
  tags: ["UI","content","workshops"],
};

export const Default = () => `

<div class="c-workshops-list">
  <ul class="c-workshops-list__list u-list-unstyled">
    <li class="c-workshops-list__item o-split">
      <div class="o-split__content c-workshops-list__body">
        <h2 class="c-workshops-list__name">Lär dig en polska</h2>
        <p class="c-workshops-list__description">Gemensam genomgång av en låt med fokus på melodi, puls och spelkänsla.</p>
        <div class="c-workshops-list__meta">
          <div class="c-schedule-item c-workshops-list__meta-item">
    <div class="c-schedule-item__info c-workshops-list__meta-label c-schedule-item__location">
<span class="icon c-schedule-item__icon c-workshops-list__meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Låttältet</div>
    <div class="c-schedule-item__info c-workshops-list__meta-label c-workshops-list__meta-time">
<span class="icon c-schedule-item__icon c-workshops-list__meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>Tisdag 10:00–12:00</div>
  </div>
        </div>
      </div>
      <div class="o-split__image c-workshops-list__image">
        <img src="https://placehold.co/1200x900?text=L%C3%A4r%20dig%20en%20polska" alt="Lär dig en polska" loading="lazy" width="1200" height="900">
      </div>
    </li>
    <li class="c-workshops-list__item o-split">
      <div class="o-split__content c-workshops-list__body">
        <h2 class="c-workshops-list__name">Bygg upp en stämma</h2>
        <p class="c-workshops-list__description">Vi provar att lägga en andrastämma på gehör och spelar tillsammans i grupp.</p>
        <div class="c-workshops-list__meta">
          <div class="c-schedule-item c-workshops-list__meta-item">
    <div class="c-schedule-item__info c-workshops-list__meta-label c-schedule-item__location">
<span class="icon c-schedule-item__icon c-workshops-list__meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Logen</div>
    <div class="c-schedule-item__info c-workshops-list__meta-label c-workshops-list__meta-time">
<span class="icon c-schedule-item__icon c-workshops-list__meta-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>Onsdag 14:00–15:30</div>
  </div>
        </div>
      </div>
      <div class="o-split__image c-workshops-list__image">
        <img src="https://placehold.co/1200x900?text=Bygg%20upp%20en%20st%C3%A4mma" alt="Bygg upp en stämma" loading="lazy" width="1200" height="900">
      </div>
    </li>
  </ul>
</div>`;
Default.storyName = "Default";