import './icon.css';
export default {
  title: "Components/Icon",
  parameters: {
    docs: { description: { component: "Inline SVG icon component. Pass the icon name to render the corresponding SVG." } },
    status: "ready",
  },
  tags: ["UI","icon"],
};

export const Default = () => `

<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" /></svg>
</span>
`;
Default.storyName = "Default";