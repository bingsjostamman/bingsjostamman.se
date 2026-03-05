import './headline-acts.css';
export default {
  title: "Components/Headline Acts",
  parameters: {
    docs: { description: { component: "Displays headline acts with images, used on start and lineup pages. Depends on image macros and lineup data." } },
    status: "ready",
  },
  tags: ["UI","content","lineup"],
};

export const Default = () => `
<section class="c-headline-acts">
  <h2 class="c-headline-acts__heading">Huvudakter</h2>
  <ul class="c-headline-acts__list">
    
      <li class="c-headline-acts__item">
        
          <div class="c-headline-acts__image">
            <img src="https://placehold.co/800x600?text=Spelmansm%C3%B6te" alt="Spelmansmöte" loading="lazy" width="800" height="600">
          </div>
        
        <div class="c-headline-acts__body">
          <h3 class="c-headline-acts__name">Spelmansmöte</h3>
          <p class="c-headline-acts__meta">
            Onsdag · 13:00–14:00 · Nygårdsgården
          </p>
        </div>
      </li>
    
      <li class="c-headline-acts__item">
        
          <div class="c-headline-acts__image">
            <img src="https://placehold.co/800x600?text=Hoven%20Droven" alt="Hoven Droven" loading="lazy" width="800" height="600">
          </div>
        
        <div class="c-headline-acts__body">
          <h3 class="c-headline-acts__name">Hoven Droven</h3>
          <p class="c-headline-acts__meta">
            Onsdag · 16:45–17:45 · Dansbanan
          </p>
        </div>
      </li>
    
      <li class="c-headline-acts__item">
        
          <div class="c-headline-acts__image">
            <img src="https://placehold.co/800x600?text=Ellika%20Frisell%20och%20Emma%20Reid" alt="Ellika Frisell och Emma Reid" loading="lazy" width="800" height="600">
          </div>
        
        <div class="c-headline-acts__body">
          <h3 class="c-headline-acts__name">Ellika Frisell och Emma Reid</h3>
          <p class="c-headline-acts__meta">
            Onsdag · 20:00–21:00 · Kapellet
          </p>
        </div>
      </li>
    
  </ul>
</section>

`;
Default.storyName = "Default";
export const Without_images = () => `
<section class="c-headline-acts">
  <h2 class="c-headline-acts__heading">Huvudakter</h2>
  <ul class="c-headline-acts__list">
    
      <li class="c-headline-acts__item">
        
        <div class="c-headline-acts__body">
          <h3 class="c-headline-acts__name">Spelmansmöte</h3>
          <p class="c-headline-acts__meta">
            Onsdag · 13:00–14:00 · Nygårdsgården
          </p>
        </div>
      </li>
    
      <li class="c-headline-acts__item">
        
        <div class="c-headline-acts__body">
          <h3 class="c-headline-acts__name">Hoven Droven</h3>
          <p class="c-headline-acts__meta">
            Onsdag · 16:45–17:45 · Dansbanan
          </p>
        </div>
      </li>
    
  </ul>
</section>

`;
Without_images.storyName = "Without images";
export const Single_headline = () => `
<section class="c-headline-acts">
  <h2 class="c-headline-acts__heading">Huvudakter</h2>
  <ul class="c-headline-acts__list">
    
      <li class="c-headline-acts__item">
        
          <div class="c-headline-acts__image">
            <img src="https://placehold.co/800x600?text=Hoven%20Droven" alt="Hoven Droven" loading="lazy" width="800" height="600">
          </div>
        
        <div class="c-headline-acts__body">
          <h3 class="c-headline-acts__name">Hoven Droven</h3>
          <p class="c-headline-acts__meta">
            Onsdag · 16:45–17:45 · Dansbanan
          </p>
        </div>
      </li>
    
  </ul>
</section>

`;
Single_headline.storyName = "Single headline";