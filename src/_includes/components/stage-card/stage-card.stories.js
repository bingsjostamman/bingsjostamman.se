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
      
  
  
  
  
  
  
  
  
  

  
  
    
    
    
    
  

  
  
  
    
    
    
  
    
    
      
    
    
  
    
    
      
    
    
  

  
  

  
  

  
  
    <img
      src="https://res.cloudinary.com/bingsjostamman/image/upload/w_1200/https://placehold.co/1200x720.jpg"
      srcset="https://res.cloudinary.com/bingsjostamman/image/upload/f_auto,q_auto,w_400/https://placehold.co/1200x720.jpg 400w, https://res.cloudinary.com/bingsjostamman/image/upload/f_auto,q_auto,w_800/https://placehold.co/1200x720.jpg 800w, https://res.cloudinary.com/bingsjostamman/image/upload/f_auto,q_auto,w_1200/https://placehold.co/1200x720.jpg 1200w"
      sizes="33vw"
      alt="The Valley stage"
      width="1200"
      height="900"
      
      loading="lazy"
      decoding="async"
    >
  


    </div><div class="c-stage-card__body">
      <h3 class="c-stage-card__stage-name">
<span class="icon c-stage-card__icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>The Valley</h3><div class="c-stage-card__stage-description">&lt;p&gt;A hidden sanctuary at the valley floor, offering intimate proximity and natural acoustics.&lt;/p&gt;
</div><ol class="c-stage-list u-list-unstyled c-stage-card__slots c-stage-list--split-narrow">
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="13:15">13:15</time></span>
        <div class="c-stage-list__name">Sarah Thorne</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="14:30">14:30</time></span>
        <div class="c-stage-list__name">Whisper Creek Solo</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="15:45">15:45</time></span>
        <div class="c-stage-list__name">Mountain Breath</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="17:00">17:00</time></span>
        <div class="c-stage-list__name">Clara &amp; The Harp</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="18:15">18:15</time></span>
        <div class="c-stage-list__name">Old Ghost Trio</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="19:30">19:30</time></span>
        <div class="c-stage-list__name">The Echoing Vale</div>
      </li>
      <li class="c-stage-list__item">
        <span class="c-stage-list__time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="20:45">20:45</time></span>
        <div class="c-stage-list__name">Solstice Winds</div>
      </li>
    </ol>
    </div>
  </div>
`;
Default.storyName = "Default";