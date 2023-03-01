const accordeonButtons = document.querySelectorAll('[data-accordeon-button]');
const accordeonElements = document.querySelectorAll('[data-accordeon-element]');

const onAccordeonButtonClick = (evt) => {
  let id = evt.currentTarget.dataset.accordeonButton;
  let accordeonElement = document.querySelector(`[data-accordeon-element="${id}"]`);
  if (accordeonElement && accordeonElements && accordeonElements.length) {
    accordeonElements.forEach((element) => {
      element.setAttribute('style', 'max-height: 0.1px; padding-bottom: 0;');
    });
    if (!evt.currentTarget.classList.contains('is-open')) {
      accordeonElement.setAttribute('style', 'max-height:1000px; padding-bottom: 13px;');
      accordeonButtons.forEach((button) => {
        button.classList.remove('is-open');
      });
      evt.currentTarget.classList.add('is-open');
    } else {
      evt.currentTarget.classList.remove('is-open');
    }
  }
};

const initAccordeonButtons = () => {
  if (accordeonButtons && accordeonButtons.length && accordeonElements && accordeonElements.length) {
    accordeonButtons.forEach((button) => {
      button.addEventListener('click', onAccordeonButtonClick);
    });
  }

  let viewportWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    viewportWidth = window.innerWidth;
    if (viewportWidth >= 768) {
      accordeonElements.forEach((element) => {
        element.setAttribute('style', 'max-height: auto;');
      });
    }
  });
};


export {initAccordeonButtons};
