import './timeline.css';
export default {
  title: "Components/Timeline",
  parameters: {
    docs: { description: { component: "A visual CSS Grid timeline showing stage slots as blocks. Stages on columns, time on rows. Supports filtering by day, stage, and type." } },
    status: "ready",
  },
  tags: ["UI","schedule","timeline"],
};

export const Tuesday_Bystugubanan = () => `

<div class="c-timeline" aria-hidden="true" style="--timeline-cols: 1; --timeline-rows: 12;">
  
  <div class="c-timeline__header" style="grid-row: 1;">
    <div class="c-timeline__corner"></div>
    <div class="c-timeline__stage-label" style="grid-column: 2;">Bystugubanan</div>
  </div>

  <div class="c-timeline__time" style="grid-row: 2; grid-column: 1;">
      19:00
    </div><div class="c-timeline__time" style="grid-row: 6; grid-column: 1;">
      20:00
    </div><div class="c-timeline__time" style="grid-row: 10; grid-column: 1;">
      21:00
    </div><div class="c-timeline__hour-line" style="grid-row: 2; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 6; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 10; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__act c-timeline__act--dansa"
         style="grid-row: 2 / 8; grid-column: 2;">
      <span class="c-timeline__act-time">19:00–20:30</span>
      <span class="c-timeline__act-name">Täby Spelmansgille</span>
    </div><div class="c-timeline__act c-timeline__act--dansa"
         style="grid-row: 8 / 10; grid-column: 2;">
      <span class="c-timeline__act-time">20:30–21:00</span>
      <span class="c-timeline__act-name">Nordanstigs spelmanslag</span>
    </div><div class="c-timeline__act c-timeline__act--dansa"
         style="grid-row: 10 / 14; grid-column: 2;">
      <span class="c-timeline__act-time">21:00–22:00</span>
      <span class="c-timeline__act-name">Malungs folkhögskola</span>
    </div></div>
`;
Tuesday_Bystugubanan.storyName = "Tuesday Bystugubanan";
export const Wednesday_three_stages = () => `

<div class="c-timeline" aria-hidden="true" style="--timeline-cols: 3; --timeline-rows: 12;">
  
  <div class="c-timeline__header" style="grid-row: 1;">
    <div class="c-timeline__corner"></div>
    <div class="c-timeline__stage-label" style="grid-column: 2;">Logen</div>
    <div class="c-timeline__stage-label" style="grid-column: 3;">Tunet</div>
    <div class="c-timeline__stage-label" style="grid-column: 4;">Låttältet</div>
  </div>

  <div class="c-timeline__time" style="grid-row: 2; grid-column: 1;">
      19:00
    </div><div class="c-timeline__time" style="grid-row: 6; grid-column: 1;">
      20:00
    </div><div class="c-timeline__time" style="grid-row: 10; grid-column: 1;">
      21:00
    </div><div class="c-timeline__hour-line" style="grid-row: 2; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 6; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 10; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 4 / 6; grid-column: 2;">
      <span class="c-timeline__act-time">19:30–20:00</span>
      <span class="c-timeline__act-name">Dalarnas ungdomsspelmanslag</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 6 / 10; grid-column: 2;">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ungtfolk på logen</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 10 / 12; grid-column: 2;">
      <span class="c-timeline__act-time">21:00–21:30</span>
      <span class="c-timeline__act-name">Dragkroka</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 3 / 5; grid-column: 3;">
      <span class="c-timeline__act-time">19:15–19:45</span>
      <span class="c-timeline__act-name">Bröderna</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 5 / 7; grid-column: 3;">
      <span class="c-timeline__act-time">19:45–20:15</span>
      <span class="c-timeline__act-name">Vallmusik</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 7 / 9; grid-column: 3;">
      <span class="c-timeline__act-time">20:15–20:45</span>
      <span class="c-timeline__act-name">Ethno</span>
    </div><div class="c-timeline__act c-timeline__act--spela"
         style="grid-row: 6 / 10; grid-column: 4;">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ore spelmän</span>
    </div><div class="c-timeline__act c-timeline__act--spela"
         style="grid-row: 10 / 14; grid-column: 4;">
      <span class="c-timeline__act-time">21:00–22:00</span>
      <span class="c-timeline__act-name">Nordanstigs spelmanslag</span>
    </div></div>
`;
Wednesday_three_stages.storyName = "Wednesday three stages";
export const Wednesday_all_stages = () => `

<div class="c-timeline" aria-hidden="true" style="--timeline-cols: 7; --timeline-rows: 36;">
  
  <div class="c-timeline__header" style="grid-row: 1;">
    <div class="c-timeline__corner"></div>
    <div class="c-timeline__stage-label" style="grid-column: 2;">Nygårdsgården</div>
    <div class="c-timeline__stage-label" style="grid-column: 3;">Bagarstugan</div>
    <div class="c-timeline__stage-label" style="grid-column: 4;">Dansbanan</div>
    <div class="c-timeline__stage-label" style="grid-column: 5;">Kapellet</div>
    <div class="c-timeline__stage-label" style="grid-column: 6;">Logen</div>
    <div class="c-timeline__stage-label" style="grid-column: 7;">Tunet</div>
    <div class="c-timeline__stage-label" style="grid-column: 8;">Låttältet</div>
  </div>

  <div class="c-timeline__time" style="grid-row: 2; grid-column: 1;">
      13:00
    </div><div class="c-timeline__time" style="grid-row: 6; grid-column: 1;">
      14:00
    </div><div class="c-timeline__time" style="grid-row: 10; grid-column: 1;">
      15:00
    </div><div class="c-timeline__time" style="grid-row: 14; grid-column: 1;">
      16:00
    </div><div class="c-timeline__time" style="grid-row: 18; grid-column: 1;">
      17:00
    </div><div class="c-timeline__time" style="grid-row: 22; grid-column: 1;">
      18:00
    </div><div class="c-timeline__time" style="grid-row: 26; grid-column: 1;">
      19:00
    </div><div class="c-timeline__time" style="grid-row: 30; grid-column: 1;">
      20:00
    </div><div class="c-timeline__time" style="grid-row: 34; grid-column: 1;">
      21:00
    </div><div class="c-timeline__hour-line" style="grid-row: 2; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 6; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 10; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 14; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 18; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 22; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 26; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 30; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 34; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__act c-timeline__act--spela"
         style="grid-row: 2 / 6; grid-column: 2;">
      <span class="c-timeline__act-time">13:00–14:00</span>
      <span class="c-timeline__act-name">Spelmansmöte</span>
    </div><div class="c-timeline__act c-timeline__act--utställning"
         style="grid-row: 4 / 12; grid-column: 3;">
      <span class="c-timeline__act-time">13:30–15:30</span>
      <span class="c-timeline__act-name">Dräktskick i Bingsjö</span>
    </div><div class="c-timeline__act c-timeline__act--dansa"
         style="grid-row: 17 / 21; grid-column: 4;">
      <span class="c-timeline__act-time">16:45–17:45</span>
      <span class="c-timeline__act-name">Hoven Droven</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 30 / 34; grid-column: 5;">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ellika Frisell och Emma Reid</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 30 / 34; grid-column: 6;">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ungtfolk på logen</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 34 / 36; grid-column: 6;">
      <span class="c-timeline__act-time">21:00–21:30</span>
      <span class="c-timeline__act-name">Dragkroka</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 27 / 29; grid-column: 7;">
      <span class="c-timeline__act-time">19:15–19:45</span>
      <span class="c-timeline__act-name">Bröderna</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna"
         style="grid-row: 31 / 33; grid-column: 7;">
      <span class="c-timeline__act-time">20:15–20:45</span>
      <span class="c-timeline__act-name">Ethno</span>
    </div><div class="c-timeline__act c-timeline__act--spela"
         style="grid-row: 30 / 34; grid-column: 8;">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ore spelmän</span>
    </div></div>
`;
Wednesday_all_stages.storyName = "Wednesday all stages";