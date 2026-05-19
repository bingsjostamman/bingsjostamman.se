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
  <a href="#main-nav" data-menu-toggle class="c-menu__toggle">
    <span class="c-menu__toggle-label">Meny</span>
    
<span class="icon" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
</span>
  </a>

  <!-- Backdrop only used when JS is active -->
  <div class="c-menu__backdrop" data-menu-backdrop aria-hidden="true"></div>

  

  <nav id="main-nav" data-menu-panel class="c-menu__panel">
    <ul class="c-menu__items">
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/tisdag/" 
            
          >
            Tisdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/onsdag/" 
            
          >
            Onsdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/allspel/" 
            
          >
            Allspel
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/scen/" 
            
          >
            På scen
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/biljetter/" 
            
          >
            Entré och biljetter
          </a>
        </li>
      
    </ul>
    <ul class="c-menu__items">
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/tisdag/" 
            
          >
            Tisdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/onsdag/" 
            
          >
            Onsdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/allspel/" 
            
          >
            Allspel
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/scen/" 
            
          >
            På scen
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/biljetter/" 
            
          >
            Entré och biljetter
          </a>
        </li>
      
    </ul>
    <ul class="c-menu__items">
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/tisdag/" 
            
          >
            Tisdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/onsdag/" 
            
          >
            Onsdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/allspel/" 
            
          >
            Allspel
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/scen/" 
            
          >
            På scen
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/biljetter/" 
            
          >
            Entré och biljetter
          </a>
        </li>
      
    </ul>
    <ul class="c-menu__items">
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/tisdag/" 
            
          >
            Tisdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/onsdag/" 
            
          >
            Onsdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/allspel/" 
            
          >
            Allspel
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/scen/" 
            
          >
            På scen
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/biljetter/" 
            
          >
            Entré och biljetter
          </a>
        </li>
      
    </ul>
    <ul class="c-menu__items">
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/tisdag/" 
            
          >
            Tisdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/onsdag/" 
            
          >
            Onsdag
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/allspel/" 
            
          >
            Allspel
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/scen/" 
            
          >
            På scen
          </a>
        </li>
      
        <li class="c-menu__item">
          <a
            class="c-menu__link"
            href="/biljetter/" 
            
          >
            Entré och biljetter
          </a>
        </li>
      
    </ul>
  </nav>
</div>



</header>
`;
Default.storyName = "Default";