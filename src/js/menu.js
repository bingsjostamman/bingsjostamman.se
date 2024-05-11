// menu

function menu() {
	const menuContainer = document.querySelector('#menu');

	if (menuContainer) console.log('menu.');
	else {
		console.log('found no menu.');
	}
}

export { menu };

/*

<nav>
  <div><a href="#">Home</a></div>
<a id="menu-btn" href="#menu-panel">Menu</a>
<div id="menu-panel">
  <p>MENU</p>
  <ul>
    <li><a href="#">Menu link 1</a></li>
    <li><a href="#">Menu link 1</a></li>
  </ul>

  <a id="menu-close" href="#">Back</a>
</div>

#menu-panel:not(:target) {
  display: none;
}

const menuBtn = document.querySelector('#menu-btn');

if (menuBtn) {
  console.log('there is a menu!');
  const menuPanel = document.querySelector('#menu-panel');
  const menuClose = document.querySelector('#menu-close');

  const navBtn = document.createElement('button');
  navBtn.textContent = menuBtn.text;
  navBtn.setAttribute('aria-controls', menuBtn.getAttribute('href'));
  navBtn.setAttribute('aria-expanded', 'false');
  navBtn.classList.add('btn');
  navBtn.setAttribute('id', 'menu-btn');
  menuBtn.replaceWith(navBtn);

  const navClose = document.createElement('button');
  navClose.textContent = menuClose.text;
  navClose.classList.add('btn');
  navClose.setAttribute('id', 'menu-close');
  menuClose.replaceWith(navClose);

  const jsMenuBtn = document.querySelector('#menu-btn');
  jsMenuBtn.addEventListener('click', (e)=> {
    e.preventDefault;
    console.log('toggle menu!');
    if (jsMenuBtn.getAttribute('aria-expanded') == 'true') {
      menuPanel.style.display = 'none';
      jsMenuBtn.setAttribute('aria-expanded', 'false');
    } else {
      menuPanel.style.display = 'block';
      jsMenuBtn.setAttribute('aria-expanded', 'true');
    }

  });

  const jsMenuClose = document.querySelector('#menu-close');
  jsMenuClose.addEventListener('click', (e)=> {
    e.preventDefault;
    console.log('close menu!');
    menuPanel.style.display = 'none';
    jsMenuBtn.setAttribute('aria-expanded', 'false');
  });

}




*/
