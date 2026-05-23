import './workshops-list.css';
export default {
  title: "Components/Workshops List",
  parameters: {
    docs: { description: { component: "List of workshop cards with name, description, location, and time." } },
    status: "ready",
  },
  tags: ["UI","content","workshops"],
};

export const Default = () => `<div class="c-workshops-list">
  <ul class="c-workshops-list__list u-list-unstyled">
    <li class="c-workshops-list__item o-split">
      <div class="o-split__content c-workshops-list__body">
        <h2 class="c-workshops-list__name">Lär dig en polska</h2>
        <p class="c-workshops-list__description">Gemensam genomgång av en låt med fokus på melodi, puls och spelkänsla.</p>
        <div class="c-workshops-list__meta">
          <div class="c-workshops-list__meta-item">
            <div class="c-workshops-list__meta-label">Låttältet</div>
          </div>
          <div class="c-workshops-list__meta-item">
            <div class="c-workshops-list__meta-label">Tisdag 10:00–12:00</div>
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
          <div class="c-workshops-list__meta-item">
            <div class="c-workshops-list__meta-label">Logen</div>
          </div>
          <div class="c-workshops-list__meta-item">
            <div class="c-workshops-list__meta-label">Onsdag 14:00–15:30</div>
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