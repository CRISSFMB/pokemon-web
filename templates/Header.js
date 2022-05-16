// un template  no es una pagina es una parte de una pagina que se va a repetir como un header

const Header = () => {
  const view = `
  <button class="dark-theme-btn">🌑</button>
      <nav class="nav" data-dark>
      <div class="nav__content container">
      <a href="/">
        <img
          class="icon-poke"
          src="../assets/icons/poke-icon.png"
          alt="icon-poke"
        />
      </a>
   

      <div class="flags">
        <div class="flags__wrapper" data-languages="de">
          <img class="flags__img" src= '../assets/flags/de.svg' alt="" />
        </div>
        <div class="flags__wrapper" data-languages="en">
          <img class="flags__img" src="../assets/flags/gb.svg" alt="" />
        </div>
        <div class="flags__wrapper" data-languages="es">
          <img class="flags__img" src='../assets/flags/es.svg' alt="" />
        </div>
      </div>

      <ul class="navbar">
        <li class="navbar__list">
          <a
            class="navbar__link"
            data-dark
            href="#/find/"
            data-section="section-nav"
            data-value="search"
            >finde pokemon</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <div class="center">
    <!-- btn-dark-theme -->
  </div>

  <!-- hamburger -->
  <div id="menu-toggle">
    <div id="hamburger">
      <span class="span"></span>
      <span class="span"></span>
      <span class="span"></span>
    </div>
    <div id="cross">
      <span></span>
      <span></span>
    </div>
  </div>
  `;

  return view;
};

export default Header;
