const aboutContainer = document.querySelector('[data-about-accordion]');
const accordionElement = aboutContainer.querySelector('[data-accordion="element"]');
const accordionButton = aboutContainer.querySelector('[data-accordion="button"]');

const accordionButtonClickHandler = () => {
  if (!accordionElement.classList.contains('is-active')) {
    accordionButton.textContent = 'Свернуть';
  } else {
    accordionButton.textContent = 'Подробнее';
  }
};

const initAboutButton = () => {
  if (aboutContainer && accordionButton && accordionElement) {
    accordionButton.addEventListener('click', accordionButtonClickHandler);
  }
};

export {initAboutButton};
