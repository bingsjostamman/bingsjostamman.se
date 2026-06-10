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

<div class="c-timeline o-block o-block--margin-medium" aria-hidden="true" style="--timeline-cols: 1; --timeline-rows: 18;">
  
  <div class="c-timeline__header" style="grid-row: 1;">
    <div class="c-timeline__corner"></div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-a" style="grid-column: 2;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Bystugubanan</div>
  </div>

  <div class="c-timeline__time" style="grid-row: 2; grid-column: 1;">
      19:00
    </div><div class="c-timeline__time" style="grid-row: 8; grid-column: 1;">
      20:00
    </div><div class="c-timeline__time" style="grid-row: 14; grid-column: 1;">
      21:00
    </div><div class="c-timeline__hour-line" style="grid-row: 2; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 8; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 14; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-a"
             style="grid-row: 2 / 11; grid-column: 2;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>19:00–20:30</span>
          <span class="c-timeline__act-name">Täby Spelmansgille</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-b"
             style="grid-row: 11 / 14; grid-column: 2;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>20:30–21:00</span>
          <span class="c-timeline__act-name">Nordanstigs spelmanslag</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-a"
             style="grid-row: 14 / 20; grid-column: 2;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>21:00–22:00</span>
          <span class="c-timeline__act-name">Malungs folkhögskola</span>
        </div></div>
`;
Tuesday_Bystugubanan.storyName = "Tuesday Bystugubanan";
export const Wednesday_three_stages = () => `

<div class="c-timeline o-block o-block--margin-medium" aria-hidden="true" style="--timeline-cols: 3; --timeline-rows: 18;">
  
  <div class="c-timeline__header" style="grid-row: 1;">
    <div class="c-timeline__corner"></div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-a" style="grid-column: 2;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Logen</div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-b" style="grid-column: 3;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Tunet</div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-a" style="grid-column: 4;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Låttältet</div>
  </div>

  <div class="c-timeline__time" style="grid-row: 2; grid-column: 1;">
      19:00
    </div><div class="c-timeline__time" style="grid-row: 8; grid-column: 1;">
      20:00
    </div><div class="c-timeline__time" style="grid-row: 14; grid-column: 1;">
      21:00
    </div><div class="c-timeline__hour-line" style="grid-row: 2; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 8; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 14; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-a"
             style="grid-row: 5 / 8; grid-column: 2;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>19:30–20:00</span>
          <span class="c-timeline__act-name">Dalarnas ungdomsspelmanslag</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-b"
             style="grid-row: 8 / 14; grid-column: 2;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>20:00–21:00</span>
          <span class="c-timeline__act-name">Ungtfolk på logen</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-a"
             style="grid-row: 14 / 17; grid-column: 2;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>21:00–21:30</span>
          <span class="c-timeline__act-name">Dragkroka</span>
        </div><div class="c-timeline__act c-timeline__act--col-b c-timeline__act--slot-a"
             style="grid-row: 4 / 7; grid-column: 3;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>19:15–19:45</span>
          <span class="c-timeline__act-name">Bröderna</span>
        </div><div class="c-timeline__act c-timeline__act--col-b c-timeline__act--slot-b"
             style="grid-row: 7 / 10; grid-column: 3;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>19:45–20:15</span>
          <span class="c-timeline__act-name">Vallmusik</span>
        </div><div class="c-timeline__act c-timeline__act--col-b c-timeline__act--slot-a"
             style="grid-row: 10 / 13; grid-column: 3;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>20:15–20:45</span>
          <span class="c-timeline__act-name">Ethno</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-a"
             style="grid-row: 8 / 14; grid-column: 4;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>20:00–21:00</span>
          <span class="c-timeline__act-name">Ore spelmän</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-b"
             style="grid-row: 14 / 20; grid-column: 4;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>21:00–22:00</span>
          <span class="c-timeline__act-name">Nordanstigs spelmanslag</span>
        </div></div>
`;
Wednesday_three_stages.storyName = "Wednesday three stages";
export const Wednesday_all_stages = () => `

<div class="c-timeline o-block o-block--margin-medium" aria-hidden="true" style="--timeline-cols: 7; --timeline-rows: 54;">
  
  <div class="c-timeline__header" style="grid-row: 1;">
    <div class="c-timeline__corner"></div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-a" style="grid-column: 2;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Nygårdsgården</div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-b" style="grid-column: 3;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Bagarstugan</div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-a" style="grid-column: 4;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Dansbanan</div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-b" style="grid-column: 5;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Kapellet</div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-a" style="grid-column: 6;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Logen</div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-b" style="grid-column: 7;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Tunet</div>
    <div class="c-timeline__stage-label c-timeline__stage-label--col-a" style="grid-column: 8;">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Låttältet</div>
  </div>

  <div class="c-timeline__time" style="grid-row: 2; grid-column: 1;">
      13:00
    </div><div class="c-timeline__time" style="grid-row: 8; grid-column: 1;">
      14:00
    </div><div class="c-timeline__time" style="grid-row: 14; grid-column: 1;">
      15:00
    </div><div class="c-timeline__time" style="grid-row: 20; grid-column: 1;">
      16:00
    </div><div class="c-timeline__time" style="grid-row: 26; grid-column: 1;">
      17:00
    </div><div class="c-timeline__time" style="grid-row: 32; grid-column: 1;">
      18:00
    </div><div class="c-timeline__time" style="grid-row: 38; grid-column: 1;">
      19:00
    </div><div class="c-timeline__time" style="grid-row: 44; grid-column: 1;">
      20:00
    </div><div class="c-timeline__time" style="grid-row: 50; grid-column: 1;">
      21:00
    </div><div class="c-timeline__hour-line" style="grid-row: 2; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 8; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 14; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 20; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 26; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 32; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 38; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 44; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__hour-line" style="grid-row: 50; grid-column: 1 / -1;" aria-hidden="true"></div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-a"
             style="grid-row: 2 / 8; grid-column: 2;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>13:00–14:00</span>
          <span class="c-timeline__act-name">Spelmansmöte</span>
        </div><div class="c-timeline__act c-timeline__act--col-b c-timeline__act--slot-a"
             style="grid-row: 5 / 17; grid-column: 3;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>13:30–15:30</span>
          <span class="c-timeline__act-name">Dräktskick i Bingsjö</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-a"
             style="grid-row: 25 / 31; grid-column: 4;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>16:45–17:45</span>
          <span class="c-timeline__act-name">Hoven Droven</span>
        </div><div class="c-timeline__act c-timeline__act--col-b c-timeline__act--slot-a"
             style="grid-row: 44 / 50; grid-column: 5;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>20:00–21:00</span>
          <span class="c-timeline__act-name">Ellika Frisell och Emma Reid</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-a"
             style="grid-row: 44 / 50; grid-column: 6;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>20:00–21:00</span>
          <span class="c-timeline__act-name">Ungtfolk på logen</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-b"
             style="grid-row: 50 / 53; grid-column: 6;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>21:00–21:30</span>
          <span class="c-timeline__act-name">Dragkroka</span>
        </div><div class="c-timeline__act c-timeline__act--col-b c-timeline__act--slot-a"
             style="grid-row: 40 / 43; grid-column: 7;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>19:15–19:45</span>
          <span class="c-timeline__act-name">Bröderna</span>
        </div><div class="c-timeline__act c-timeline__act--col-b c-timeline__act--slot-b"
             style="grid-row: 46 / 49; grid-column: 7;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>20:15–20:45</span>
          <span class="c-timeline__act-name">Ethno</span>
        </div><div class="c-timeline__act c-timeline__act--col-a c-timeline__act--slot-a"
             style="grid-row: 44 / 50; grid-column: 8;">
          <span class="c-timeline__act-time">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span>20:00–21:00</span>
          <span class="c-timeline__act-name">Ore spelmän</span>
        </div></div>
`;
Wednesday_all_stages.storyName = "Wednesday all stages";