import './button.css';
import './button.js';
export default {
  title: "Components/Button",
  parameters: {
    docs: { description: { component: "A simple button component used throughout the site." } },
    status: "ready",
  },
  tags: ["UI","form","interactive"],
};

export const Default = () => `<button class="button" >
  Click me
</button>`;
export const Primary = () => `<button class="button primary" >
  Submit
</button>`;