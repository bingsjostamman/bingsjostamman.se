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
<div class="c-allspel-tunes-wrap">

  <ul class="c-allspel-tunes-tunes">
    <li class="c-allspel-tunes-tune o-tile t-intent-highlight">
      <div class="c-allspel-tunes-info">
        <span class="c-allspel-tunes-name">Bingsjöpolskan</span>
        <span class="c-allspel-tunes-note">Melodi + andrastämma</span>
      </div>
      <div class="c-allspel-tunes-media">

        <div>Noter</div>
          <ul class="c-allspel-tunes-links">
            <li><a href="https://example.com/bingsjopolskan-melodi.pdf">Melodi (PDF)</a></li>
            <li><a href="https://example.com/bingsjopolskan-andrastamma.pdf">Andrastämma (PDF)</a></li>
          </ul>

        <div>Ljudfil</div>
          <a href="https://example.com/bingsjopolskan-melodi.mp3">Melodi (MP3)</a>
      </div>
    </li>
    <li class="c-allspel-tunes-tune o-tile t-intent-highlight">
      <div class="c-allspel-tunes-info">
        <span class="c-allspel-tunes-name">Gammelvals</span>
      </div>
      <div class="c-allspel-tunes-media">

        <div>Noter</div>
          <a href="https://example.com/gammelvals.pdf">Notblad (PDF)</a>

        <div>Ljudfil</div>
          <ul class="c-allspel-tunes-links">
              <li><a href="https://example.com/gammelvals.mp3">Ljudfil (MP3)</a></li>
              <li><a href="https://example.com/gammelvals-andrastamma.mp3">Andrastämma (MP3)</a></li>
          </ul>
      </div>
    </li>

  </ul>

</div>`;
Default.storyName = "Default";