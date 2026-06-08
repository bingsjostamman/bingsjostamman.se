import './button.css';
import './button.js';
export default {
  title: "Components/Button",
  parameters: {
    docs: { description: { component: "Shared button styles for anchors and semantic buttons. Primary is the default variant." } },
    status: "beta",
  },
  tags: ["UI","form","interactive"],
};

export const Default = () => `


  
  
  
  
  
  
  
  
  
  

  

  

  

  
    <button class="c-button" type="button">
      
      <span class="c-button__label">Primary button</span>
      
      
    </button>
  
`;
Default.storyName = "Default";
export const Mini = () => `


  
  
  
  
  
  
  
  
  
  

  

  
    
  

  

  
    <button class="c-button c-button--mini" type="button">
      
      <span class="c-button__label">Mini button</span>
      
      
    </button>
  
`;
Mini.storyName = "Mini";
export const Jumbo = () => `


  
  
  
  
  
  
  
  
  
  

  

  
    
  

  

  
    <button class="c-button c-button--jumbo" type="button">
      
      <span class="c-button__label">Jumbo button</span>
      
      
    </button>
  
`;
Jumbo.storyName = "Jumbo";
export const PrefixIcon = () => `


  
  
  
  
  
  
  
  
  
  

  

  

  

  
    <button class="c-button" type="button">
      
        <span class="c-button__icon c-button__icon--prefix">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2 4.89 2 6V10C3.11 10 4 10.9 4 12S3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12S20.9 10 22 10M20 8.54C18.81 9.23 18 10.53 18 12S18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.5 5.2 9.23 4 8.54L4 6H20V8.54M11 15H13V17H11M11 11H13V13H11M11 7H13V9H11Z" /></svg>
</span></span>
      
      <span class="c-button__label">Book ticket</span>
      
      
    </button>
  
`;
PrefixIcon.storyName = "PrefixIcon";
export const SuffixIcon = () => `


  
  
  
  
  
  
  
  
  
  

  

  

  

  
    <a class="c-button" href="/" target="_blank" rel="external noopener noreferrer">
      
      <span class="c-button__label">Visit website</span>
      
        <span class="u-visually-hidden"> (Öppnas i nytt fönster)</span>
      
      
        <span class="c-button__icon c-button__icon--suffix">
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" /></svg>
</span></span>
      
    </a>
  
`;
SuffixIcon.storyName = "SuffixIcon";
export const Secondary = () => `


  
  
  
  
  
  
  
  
  
  

  
    
  

  

  

  
    <a class="c-button c-button--secondary" href="/">
      
      <span class="c-button__label">Secondary button</span>
      
      
    </a>
  
`;
Secondary.storyName = "Secondary";
export const Ghost = () => `


  
  
  
  
  
  
  
  
  
  

  
    
  

  

  

  
    <a class="c-button c-button--ghost" href="/">
      
      <span class="c-button__label">Ghost button</span>
      
      
    </a>
  
`;
Ghost.storyName = "Ghost";
export const Semantic = () => `


  
  
  
  
  
  
  
  
  
  

  

  

  

  
    <button class="c-button" type="button">
      
      <span class="c-button__label">Semantic button</span>
      
      
    </button>
  
`;
Semantic.storyName = "Semantic";