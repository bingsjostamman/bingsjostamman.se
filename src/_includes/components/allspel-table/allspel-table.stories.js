import './allspel-table.css';
export default {
  title: "Components/Allspel Table",
  parameters: {
    docs: { description: { component: "Table of allspelslåtar with support for multiple sheet music and audio links per tune." } },
    status: "ready",
  },
  tags: ["UI","content","table","allspel"],
};

export const Default = () => `
<div class="c-allspel-table-wrap">
  <table class="c-allspel-table">
    <thead>
      <tr>
        <th scope="col">Låt</th>
        <th scope="col">Noter (PDF)</th>
        <th scope="col">Ljudfiler (MP3)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="c-allspel-table-name-cell">
          <span class="c-allspel-table-name">Bingsjöpolskan</span>
          <span class="c-allspel-table-note">Melodi + andrastämma</span>
        </th>
        <td>
          <ul class="c-allspel-table-links">
            <li><a href="https://example.com/bingsjopolskan-melodi.pdf">Melodi (PDF)</a></li>
            <li><a href="https://example.com/bingsjopolskan-andrastamma.pdf">Andrastämma (PDF)</a></li>
          </ul>
        </td>
        <td>
          <a href="https://example.com/bingsjopolskan-melodi.mp3">Melodi (MP3)</a>
        </td>
      </tr>
      <tr>
        <th scope="row" class="c-allspel-table-name-cell">
          <span class="c-allspel-table-name">Gammelvals</span>
        </th>
        <td>
          <a href="https://example.com/gammelvals.pdf">Notblad (PDF)</a>
        </td>
        <td>
          <ul class="c-allspel-table-links">
            <li><a href="https://example.com/gammelvals.mp3">Ljudfil (MP3)</a></li>
            <li><a href="https://example.com/gammelvals-andrastamma.mp3">Andrastämma (MP3)</a></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;
Default.storyName = "Default";