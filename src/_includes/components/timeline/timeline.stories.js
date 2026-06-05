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

<div class="c-timeline u-tl-cols-1 u-tl-rows-12" aria-hidden="true">
  
  <div class="c-timeline__header">
    <div class="c-timeline__corner"></div>
    <div class="c-timeline__stage-label u-gc-2">Bystugubanan</div>
  </div>

  <div class="c-timeline__time u-gr-2">
      19:00
    </div><div class="c-timeline__time u-gr-6">
      20:00
    </div><div class="c-timeline__time u-gr-10">
      21:00
    </div><div class="c-timeline__hour-line u-gr-2" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-6" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-10" aria-hidden="true"></div><div class="c-timeline__act c-timeline__act--dansa u-grs-2 u-gre-8 u-gc-2">
      <span class="c-timeline__act-time">19:00–20:30</span>
      <span class="c-timeline__act-name">Täby Spelmansgille</span>
    </div><div class="c-timeline__act c-timeline__act--dansa u-grs-8 u-gre-10 u-gc-2">
      <span class="c-timeline__act-time">20:30–21:00</span>
      <span class="c-timeline__act-name">Nordanstigs spelmanslag</span>
    </div><div class="c-timeline__act c-timeline__act--dansa u-grs-10 u-gre-14 u-gc-2">
      <span class="c-timeline__act-time">21:00–22:00</span>
      <span class="c-timeline__act-name">Malungs folkhögskola</span>
    </div></div>
`;
Tuesday_Bystugubanan.storyName = "Tuesday Bystugubanan";
export const Wednesday_three_stages = () => `

<div class="c-timeline u-tl-cols-3 u-tl-rows-12" aria-hidden="true">
  
  <div class="c-timeline__header">
    <div class="c-timeline__corner"></div>
    <div class="c-timeline__stage-label u-gc-2">Logen</div>
    <div class="c-timeline__stage-label u-gc-3">Tunet</div>
    <div class="c-timeline__stage-label u-gc-4">Låttältet</div>
  </div>

  <div class="c-timeline__time u-gr-2">
      19:00
    </div><div class="c-timeline__time u-gr-6">
      20:00
    </div><div class="c-timeline__time u-gr-10">
      21:00
    </div><div class="c-timeline__hour-line u-gr-2" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-6" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-10" aria-hidden="true"></div><div class="c-timeline__act c-timeline__act--lyssna u-grs-4 u-gre-6 u-gc-2">
      <span class="c-timeline__act-time">19:30–20:00</span>
      <span class="c-timeline__act-name">Dalarnas ungdomsspelmanslag</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-6 u-gre-10 u-gc-2">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ungtfolk på logen</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-10 u-gre-12 u-gc-2">
      <span class="c-timeline__act-time">21:00–21:30</span>
      <span class="c-timeline__act-name">Dragkroka</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-3 u-gre-5 u-gc-3">
      <span class="c-timeline__act-time">19:15–19:45</span>
      <span class="c-timeline__act-name">Bröderna</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-5 u-gre-7 u-gc-3">
      <span class="c-timeline__act-time">19:45–20:15</span>
      <span class="c-timeline__act-name">Vallmusik</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-7 u-gre-9 u-gc-3">
      <span class="c-timeline__act-time">20:15–20:45</span>
      <span class="c-timeline__act-name">Ethno</span>
    </div><div class="c-timeline__act c-timeline__act--spela u-grs-6 u-gre-10 u-gc-4">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ore spelmän</span>
    </div><div class="c-timeline__act c-timeline__act--spela u-grs-10 u-gre-14 u-gc-4">
      <span class="c-timeline__act-time">21:00–22:00</span>
      <span class="c-timeline__act-name">Nordanstigs spelmanslag</span>
    </div></div>
`;
Wednesday_three_stages.storyName = "Wednesday three stages";
export const Wednesday_all_stages = () => `

<div class="c-timeline u-tl-cols-7 u-tl-rows-36" aria-hidden="true">
  
  <div class="c-timeline__header">
    <div class="c-timeline__corner"></div>
    <div class="c-timeline__stage-label u-gc-2">Nygårdsgården</div>
    <div class="c-timeline__stage-label u-gc-3">Bagarstugan</div>
    <div class="c-timeline__stage-label u-gc-4">Dansbanan</div>
    <div class="c-timeline__stage-label u-gc-5">Kapellet</div>
    <div class="c-timeline__stage-label u-gc-6">Logen</div>
    <div class="c-timeline__stage-label u-gc-7">Tunet</div>
    <div class="c-timeline__stage-label u-gc-8">Låttältet</div>
  </div>

  <div class="c-timeline__time u-gr-2">
      13:00
    </div><div class="c-timeline__time u-gr-6">
      14:00
    </div><div class="c-timeline__time u-gr-10">
      15:00
    </div><div class="c-timeline__time u-gr-14">
      16:00
    </div><div class="c-timeline__time u-gr-18">
      17:00
    </div><div class="c-timeline__time u-gr-22">
      18:00
    </div><div class="c-timeline__time u-gr-26">
      19:00
    </div><div class="c-timeline__time u-gr-30">
      20:00
    </div><div class="c-timeline__time u-gr-34">
      21:00
    </div><div class="c-timeline__hour-line u-gr-2" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-6" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-10" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-14" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-18" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-22" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-26" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-30" aria-hidden="true"></div><div class="c-timeline__hour-line u-gr-34" aria-hidden="true"></div><div class="c-timeline__act c-timeline__act--spela u-grs-2 u-gre-6 u-gc-2">
      <span class="c-timeline__act-time">13:00–14:00</span>
      <span class="c-timeline__act-name">Spelmansmöte</span>
    </div><div class="c-timeline__act c-timeline__act--utställning u-grs-4 u-gre-12 u-gc-3">
      <span class="c-timeline__act-time">13:30–15:30</span>
      <span class="c-timeline__act-name">Dräktskick i Bingsjö</span>
    </div><div class="c-timeline__act c-timeline__act--dansa u-grs-17 u-gre-21 u-gc-4">
      <span class="c-timeline__act-time">16:45–17:45</span>
      <span class="c-timeline__act-name">Hoven Droven</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-30 u-gre-34 u-gc-5">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ellika Frisell och Emma Reid</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-30 u-gre-34 u-gc-6">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ungtfolk på logen</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-34 u-gre-36 u-gc-6">
      <span class="c-timeline__act-time">21:00–21:30</span>
      <span class="c-timeline__act-name">Dragkroka</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-27 u-gre-29 u-gc-7">
      <span class="c-timeline__act-time">19:15–19:45</span>
      <span class="c-timeline__act-name">Bröderna</span>
    </div><div class="c-timeline__act c-timeline__act--lyssna u-grs-31 u-gre-33 u-gc-7">
      <span class="c-timeline__act-time">20:15–20:45</span>
      <span class="c-timeline__act-name">Ethno</span>
    </div><div class="c-timeline__act c-timeline__act--spela u-grs-30 u-gre-34 u-gc-8">
      <span class="c-timeline__act-time">20:00–21:00</span>
      <span class="c-timeline__act-name">Ore spelmän</span>
    </div></div>
`;
Wednesday_all_stages.storyName = "Wednesday all stages";