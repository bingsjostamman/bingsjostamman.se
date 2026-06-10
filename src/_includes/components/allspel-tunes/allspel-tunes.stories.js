import './allspel-tunes.css';
export default {
  title: "Components/Allspel Tunes",
  parameters: {
    docs: { description: { component: "List of allspelslåtar with support for multiple sheet music and audio links per tune." } },
    status: "ready",
  },
  tags: ["UI","content","table","allspel"],
};

export const Default = () => `
<div class="c-tunes-wrap">

  <ul class="c-tunes-tunes u-list-unstyled">
    <li class="c-tunes-tune o-tile t-intent-emphasis">
      <div class="c-tunes-info prose">
        <h3 class="c-tunes-name">Bingsjöpolskan</h3>
        <p class="c-tunes-note">Melodi + andrastämma</p>
      </div>
      <div class="c-tunes-media">

        <div class="c-tunes-media-label">Noter</div>
          <ul class="c-tunes-links u-list-unstyled">
            <li><a class="c-tunes-media-link" href="https://example.com/bingsjopolskan-melodi.pdf" data-track-event="allspel_media_click" data-track-label="Bingsjöpolskan - Melodi (PDF)" data-track-context="allspel-sheet-music">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
    <path d="M16,9H13V14.5A2.5,2.5 0 0,1 10.5,17A2.5,2.5 0 0,1 8,14.5A2.5,2.5 0 0,1 10.5,12C11.07,12 11.58,12.19 12,12.5V7H16V9M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M5,5V19H19V5H5Z" />
</svg>
</span><span>Melodi (PDF)</span></a></li>
            <li><a class="c-tunes-media-link" href="https://example.com/bingsjopolskan-andrastamma.pdf" data-track-event="allspel_media_click" data-track-label="Bingsjöpolskan - Andrastämma (PDF)" data-track-context="allspel-sheet-music">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
    <path d="M16,9H13V14.5A2.5,2.5 0 0,1 10.5,17A2.5,2.5 0 0,1 8,14.5A2.5,2.5 0 0,1 10.5,12C11.07,12 11.58,12.19 12,12.5V7H16V9M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M5,5V19H19V5H5Z" />
</svg>
</span><span>Andrastämma (PDF)</span></a></li>
          </ul>

        <div class="c-tunes-media-label">Ljudinspelning</div>
          <a class="c-tunes-media-link" href="https://example.com/bingsjopolskan-melodi.mp3" data-track-event="allspel_media_click" data-track-label="Bingsjöpolskan - Melodi (MP3)" data-track-context="allspel-audio">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
<path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z" /></svg>
</span><span>Melodi (MP3)</span></a>
      </div>
    </li>
    <li class="c-tunes-tune o-tile t-intent-emphasis">
      <div class="c-tunes-info prose">
        <h3 class="c-tunes-name">Gammelvals</h3>
      </div>
      <div class="c-tunes-media">

        <div class="c-tunes-media-label">Noter</div>
          <a class="c-tunes-media-link" href="https://example.com/gammelvals.pdf" data-track-event="allspel_media_click" data-track-label="Gammelvals - Notblad (PDF)" data-track-context="allspel-sheet-music">
<span class="icon c-tunes-media-icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
    <path d="M16,9H13V14.5A2.5,2.5 0 0,1 10.5,17A2.5,2.5 0 0,1 8,14.5A2.5,2.5 0 0,1 10.5,12C11.07,12 11.58,12.19 12,12.5V7H16V9M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M5,5V19H19V5H5Z" />
</svg>
</span><span>Notblad (PDF)</span></a>

        <div class="c-tunes-media-label">Ljudinspelning</div>
          <ul class="c-tunes-links u-list-unstyled">
              <li><a class="c-tunes-media-link" href="https://example.com/gammelvals.mp3" data-track-event="allspel_media_click" data-track-label="Gammelvals - Ljudfil (MP3)" data-track-context="allspel-audio">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
<path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z" /></svg>
</span><span>Ljudfil (MP3)</span></a></li>
              <li><a class="c-tunes-media-link" href="https://example.com/gammelvals-andrastamma.mp3" data-track-event="allspel_media_click" data-track-label="Gammelvals - Andrastämma (MP3)" data-track-context="allspel-audio">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
<path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z" /></svg>
</span><span>Andrastämma (MP3)</span></a></li>
          </ul>
      </div>
    </li>

  </ul>

</div>`;
Default.storyName = "Default";