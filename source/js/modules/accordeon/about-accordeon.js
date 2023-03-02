const aboutAccordeon = document.querySelector('[data-about-accordion="parent"]');
const aboutAccordeonButton = aboutAccordeon.querySelector('[data-about-accordion="button"]');
const aboutAccordeonElement = aboutAccordeon.querySelector('[data-about-accordion="element"]');
const aboutAccordeonMobile = aboutAccordeon.querySelector('[data-about-accordion="mobile"]');

const onAccordeonButtonClick = () => {
  if (!aboutAccordeonButton.classList.contains('is-open')) {
    aboutAccordeonButton.classList.add('is-open');
    aboutAccordeonButton.textContent = 'свернуть';
    if (window.innerWidth < 768) {
      aboutAccordeonMobile.classList.add('is-open');
    }
    aboutAccordeonElement.setAttribute('style', 'max-height: 3000px');
  } else {
    aboutAccordeonButton.classList.remove('is-open');
    aboutAccordeonButton.textContent = 'подробнее';
    if (window.innerWidth < 768) {
      aboutAccordeonMobile.classList.remove('is-open');
    }
    aboutAccordeonElement.setAttribute('style', 'max-height: 0');
  }
};

const initAboutAccordeon = () => {
  if (aboutAccordeon && aboutAccordeonButton && aboutAccordeonElement) {
    aboutAccordeonButton.addEventListener('click', onAccordeonButtonClick);

    window.addEventListener('resize', () => {
      let viewportWidth = window.innerWidth;
      if (viewportWidth >= 768) {
        aboutAccordeonMobile.hidden = false;
      }
    });
  }
};


export {initAboutAccordeon};
