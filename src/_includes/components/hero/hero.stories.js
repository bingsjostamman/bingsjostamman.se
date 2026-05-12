import './hero.css';
export default {
  title: "Components/Hero",
  parameters: {
    docs: { description: { component: "Hero section with image background and text overlay." } },
    status: "wip",
  },
  tags: ["UI","hero","layout"],
};

export const Default = () => `<section class="c-hero o-container__breakout">
  <div class="c-hero__media">
    <picture>
      <img
        src="https://placehold.co/1600x900"
        alt="Dans på Bingsjöstämman"
        width="1600"
        height="900"
        loading="eager"
      >
    </picture>
  </div>

  <div class="c-hero__overlay">
    <div class="c-hero__content o-container">
      
        <p class="c-hero__eyebrow">Bingsjöstämman</p>
      

      
        <h2 class="c-hero__title">Välkommen till årets festival</h2>
      

      
        <p class="c-hero__text">Spel, dans och möten i Bingsjö.</p>
      

      
    </div>
  </div>
</section>`;
Default.storyName = "Default";
export const With_CTA = () => `<section class="c-hero o-container__breakout">
  <div class="c-hero__media">
    <picture>
      <img
        src="https://placehold.co/1600x900"
        alt="Dans på Bingsjöstämman"
        width="1600"
        height="900"
        loading="eager"
      >
    </picture>
  </div>

  <div class="c-hero__overlay">
    <div class="c-hero__content o-container">
      
        <p class="c-hero__eyebrow">Biljetter</p>
      

      
        <h2 class="c-hero__title">Säkra din plats</h2>
      

      
        <p class="c-hero__text">Biljetter finns i flera kategorier.</p>
      

      
        <a class="c-hero__cta" href="/biljetter/">Se biljetter</a>
      
    </div>
  </div>
</section>`;
With_CTA.storyName = "With CTA";