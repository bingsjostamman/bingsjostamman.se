import './menu.css';
import './menu.js';
export default {
  title: "Components/Menu",
  parameters: {
    docs: { description: { component: "Main site navigation menu, static HTML version for Storybook." } },
    status: "ready",
  },
  tags: ["UI","navigation","interactive"],
};

export const Default = () => `
<div data-menu class="c-menu">
  <!-- Starts as an <a> for no-JS fallback -->
  <a href="#main-nav" data-menu-toggle class="c-menu-toggle">
    ☰ <span class="u-visually-hidden">Meny</span>
  </a>

  <!-- Backdrop only used when JS is active -->
  <div class="c-menu-backdrop" aria-hidden="true"></div>

  

  <nav id="main-nav" data-menu-panel class="c-menu-panel">
    
      <a 
        href="/" 
        
      >
        Hem
      </a>
    
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


`;
Default.storyName = "Default";
export const Open = () => `
<div data-menu class="c-menu">
  <!-- Starts as an <a> for no-JS fallback -->
  <a href="#main-nav" data-menu-toggle class="c-menu-toggle">
    ☰ <span class="u-visually-hidden">Meny</span>
  </a>

  <!-- Backdrop only used when JS is active -->
  <div class="c-menu-backdrop" aria-hidden="true"></div>

  

  <nav id="main-nav" data-menu-panel class="c-menu-panel">
    
      <a 
        href="/" 
        
      >
        Hem
      </a>
    
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


`;
Open.storyName = "Open";