import './header.css';
import './header.js';
export default {
  title: "Components/Header",
  parameters: {
    docs: { description: { component: "Site header containing the Bingsjöstämman logo and main navigation menu." } },
    status: "ready",
  },
  tags: ["UI","navigation","layout"],
};

export const Default = () => `<header class="c-header">
  <a href="/" class="c-header__logo" aria-label="Bingsjöstämman – startsida">
    <img
      src="/assets/logos/logo-bingsjostamman-color.svg"
      alt="Bingsjöstämman"
      class="c-header__logo-img"
      width="200"
      height="123"
    >
  </a>

  
<div data-menu class="c-menu">
  <!-- Starts as an <a> for no-JS fallback -->
  <a href="#main-nav" data-menu-toggle class="c-menu-toggle">
    ☰ <span class="u-visually-hidden">Meny</span>
  </a>

  <!-- Backdrop only used when JS is active -->
  <div class="c-menu-backdrop" aria-hidden="true"></div>

  

  <nav id="main-nav" data-menu-panel class="c-menu-panel">
    
      <a 
        href="/tisdag/" 
        
      >
        Tisdag
      </a>
    
      <a 
        href="/onsdag/" 
        
      >
        Onsdag
      </a>
    
      <a 
        href="/allspel/" 
        
      >
        Allspel
      </a>
    
      <a 
        href="/scen/" 
        
      >
        På scen
      </a>
    
      <a 
        href="/biljetter/" 
        
      >
        Entré och biljetter
      </a>
    
  </nav>
</div>



</header>
`;
Default.storyName = "Default";