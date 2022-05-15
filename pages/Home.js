// crear una funcion para que nos retorne la vista

const Home = () => {
  const view = `
  <div class="wrapper-video">
  <video
    src="./assets/video/poke-video.mp4"
    autoplay="autoplay"
    loop
    class="video"
    muted
  ></video>
</div>
<!-- section start cards  -->
<div class="section-slider" data-dark>
  <h3
    class="new__title text-center title-section-default"
    data-section="slider"
    data-value="title"
  >
    Aktuelle Neuigkeiten
  </h3>
  <section class="news">
    <div class="wrapper-cards">
      <article class="card">
        <a href="#">
          <img
            class="card__img"
            src="./assets/images-news/new-3.jpg"
            alt="new-april"
          />
          <div class="card__content">
            <div
              class="card__date"
              data-section="slider"
              data-value="date-pokemon-fest"
            >
              4.April.2022
            </div>
            <span
              class="card__description"
              data-section="slider"
              data-value="card-pokemon-Fest"
              >Pokemon Go Fest 2022: Tickets, Shaymin und alle Details der
              Veranstaltung
            </span>
          </div>
          <div class="overlay"></div>
        </a>
      </article>
      <article class="card">
        <a href="#">
          <img
            class="card__img"
            src="./assets/images-news/new-5.png"
            alt="new-april"
          />
          <div class="card__content">
            <div
              class="card__date"
              data-section="slider"
              data-value="date-pokemon-go"
            >
              13.August.2022
            </div>
            <span
              class="card__description"
              data-section="slider"
              data-value="card-pokemon-go"
              >Vielen Dank für einen wundervollen Community Day im April!
            </span>
          </div>
          <div class="overlay"></div>
        </a>
      </article>
      <article class="card">
        <a href="#">
          <img
            class="card__img"
            src="./assets/images-news/new-4.jpg"
            alt="new-april"
          />
          <div class="card__content">
            <div
              class="card__date"
              data-section="slider"
              data-value="date-nigth"
            >
              4.September.2022
            </div>
            <span
              class="card__description"
              data-section="slider"
              data-value="card-diarios-Night"
              >Bald
            </span>
          </div>
          <div class="overlay"></div>
        </a>
      </article>
      <article class="card">
        <a href="#">
          <img
            class="card__img"
            src="./assets/images-news/new-2.jpg"
            alt="new-april"
          />
          <div class="card__content">
            <div
              class="card__date"
              data-section="slider"
              data-value="date-day-comunity"
            >
              10.September.2022
            </div>
            <span
              class="card__description"
              data-section="slider"
              data-value="card-day-community"
              >Community Day Mai 2022
            </span>
          </div>
          <div class="overlay"></div>
        </a>
      </article>
      <article class="card">
        <a href="#">
          <img
            class="card__img"
            src="./assets/images-news/new-1.jpg"
            alt="new-april"
          />
          <div class="card__content">
            <div
              class="card__date"
              data-section="slider"
              data-value="date-tips"
            >
              12.May.2022
            </div>
            <span
              class="card__description"
              data-section="slider"
              data-value="card-tips"
              >Sieben Tipps für den Community Day von Stufful
            </span>
          </div>
          <div class="overlay"></div>
        </a>
      </article>
    </div>
  </section>
  <a
    href="#"
    class="btn btn--gosth"
    data-dark
    data-section="slider"
    data-value="next-news"
  >
    Weitere Neuigkeiten
  </a>
</div>

<!-- section end  cards  -->

<!-- section start  pokemon -->

<section>
  <div class="pokemon-grid">
    <!-- component pokemon -->
    <div class="pokemon">
      <img
        src="./assets/background/background-img.webp"
        alt="catch-pokemon"
      />
      <div class="pokemon-description">
        <div class="pokemon-description__title">
          <div class="pokemon-description__icon">
            <img src="./assets/icons/poke-icon.png" alt="icon-poke" />
          </div>
          <div class="pokemon-description__wrapper-paragraph">
            <p data-section="section-catch-pokemon" data-value="title">
              Fangt Pokémon und Wählt einen Kumpel!
            </p>
          </div>
        </div>
        <p
          class="pokemon-description__info"
          data-section="section-catch-pokemon"
          data-value="description"
        >
          Pokémon zu fangen ist eine Möglichkeit, sie alle zu schnappen.
          Ihr könnt aber auch Eier ausbrüten und Pokémon mit anderen
          Trainern tauschen.
        </p>
      </div>
    </div>

    <!-- component background -->
    <div class="pokemon-background">
      <img src="./assets/images-news/catch.jpg" alt="pokemon" />
    </div>
  </div>
</section>

<!-- section end  pokemon -->

<!-- section start  adventure -->

<section class="adventure-section">
  <div class="adventure-wrapper">
    <h4
      class="adventure-wrapper__title"
      data-section="section-hero-sky"
      data-value="title"
    >
      Items für euer Abenteuer
    </h4>
    <p
      class="adventure-wrapper__description"
      data-section="section-hero-sky"
      data-value="description"
    >
      Dreht die Fotoscheiben von PokéStops und Arenen, um nützliche Items
      wie Pokébälle, Beeren, Entwicklungssteine und vieles mehr für eure
      Pokémon GO-Reise zu erhalten.
    </p>
  </div>
</section>

<!-- section end  adventure -->

<!-- section start  rocket -->

<section id="section-rocket">
  <!-- contenedor principal -->
  <div class="rocket">
    <span class="rocket__icon">R</span>
    <h3
      class="rocket__title"
      data-section="section-team-rocket"
      data-value="title"
    >
      Team GO Rocket
    </h3>
    <p
      class="rocket__paragraph"
      data-section="section-team-rocket"
      data-value="description"
    >
      Team GO Rocket hat die Welt von Pokémon GO infiltriert! Ihr könnt
      die Schurken im Rahmen von Spezialforschungen oder einfach unterwegs
      herausfordern, um Crypto-Pokémon zu retten und die finsteren Pläne
      von Team GO Rocket zu durchkreuzen.
    </p>
  </div>
  <div class="wrapper-slider">
    <div class="wrapper-slider__background"></div>
    <div class="slider-component" id="slider">
      <div class="slider__section">
        <img
          class="slider__img"
          src="./assets/slider-img/hero-2.webp"
          alt=""
        />
      </div>
      <div class="slider__section">
        <img
          class="slider__img"
          src="./assets/slider-img/hero-1.webp"
          alt=""
        />
      </div>
      <div class="slider__section">
        <img
          class="slider__img"
          src="./assets/slider-img/hero-3.webp"
          alt=""
        />
      </div>
    </div>
    <div class="controls">
      <div class="controls__btn" id="btn--left">&#60;</div>
      <div class="controls__btn" id="btn--right">&#62;</div>
    </div>
  </div>
</section>
<!-- section end rocket -->

<!-- btn float  -->
<button class="button-scroll hidden" data-dark>&#11014;</button>
    `;
  return view;
};

export default Home;
