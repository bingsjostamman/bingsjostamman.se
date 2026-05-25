import './schedule-item.css';
export default {
  title: "Components/Schedule Item",
  parameters: {
    docs: { description: { component: "A location and time row for schedule-style listings. Used on day program pages and Allspel via a Nunjucks macro." } },
    status: "ready",
  },
  tags: ["UI","schedule","content"],
};

export const Default = () => `
<div class="c-schedule-item">
    <div class="c-schedule-item__info c-schedule-item__location">
<span class="icon c-schedule-item__icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Logen</div>
    <div class="c-schedule-item__info">
<span class="icon c-schedule-item__icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="15:30">15:30</time>–<time datetime="16:30">16:30</time></div>
  </div>`;
Default.storyName = "Default";
export const Without_end_time = () => `
<div class="c-schedule-item">
    <div class="c-schedule-item__info c-schedule-item__location">
<span class="icon c-schedule-item__icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480t56.5-23.5M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"/>
</svg>
</span>Bystugan</div>
    <div class="c-schedule-item__info">
<span class="icon c-schedule-item__icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960">
    <path d="m612-292 56-56-148-148v-184h-80v216zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q133 0 226.5-93.5T800-480t-93.5-226.5T480-800t-226.5 93.5T160-480t93.5 226.5T480-160"/>
</svg>
</span><time datetime="16:00">16:00</time></div>
  </div>`;
Without_end_time.storyName = "Without end time";