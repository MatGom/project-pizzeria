import { select, templates } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initCarousel();
  }

  render(element) {
    const thisHome = this;

    const generatedHTML = templates.homePage();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.orderLink = element.querySelector(select.home.order);
    thisHome.dom.bookLink = element.querySelector(select.home.book);
    thisHome.dom.carousel = element.querySelector(select.home.carousel);
  }

  initCarousel() {
    const thisHome = this;

    // eslint-disable-next-line no-undef, no-unused-vars
    const flkty = new Flickity(thisHome.dom.carousel, {
      autoPlay: 3000,
      prevNextButtons: false,
      fullscreen: true,
      adaptiveHeight: true,
    });
  }
}

export default Home;
