import { select, templates, classNames } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initCarousel();
    thisHome.initWidgets();
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
    thisHome.dom.homeLinks = element.querySelectorAll(select.home.links);
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

  initWidgets() {
    const thisHome = this;

    for (let link of thisHome.dom.homeLinks) {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        // console.log(link);
        console.log(e.currentTarget);

        const hash = e.currentTarget.hash.replace('#', '');
        const currentLink = document.querySelector('.main-nav a[href="#home"]');
        const currentPageId = document.getElementById(select.containerOf.homeId);
        const newPageId = document.getElementById(hash);
        const newLink = document.querySelector(`.main-nav a[href="${e.currentTarget.hash}"]`);
        console.log(newLink);

        window.location.hash = `#/${hash}`;
        currentLink.classList.remove(classNames.nav.active);
        currentPageId.classList.remove(classNames.nav.active);
        newPageId.classList.add(classNames.pages.active);
        newLink.classList.add(classNames.pages.active);
      });
    }
  }
}

export default Home;
