const destroyableAccordeon = document.querySelectorAll('[data-accordion="parent"][data-destroy]');

const initAccordionTabindex = () => {
  if (destroyableAccordeon && destroyableAccordeon.length) {
    destroyableAccordeon.forEach((accordeon) => {
      const buttons = accordeon.querySelectorAll('[data-accordion="button"]');

      const updateElements = () => {
        let viewport = window.innerWidth;
        if (viewport < 768) {
          buttons.forEach((button) => {
            button.setAttribute('tabindex', 0);
          });
        } else {
          buttons.forEach((button) => {
            button.removeAttribute('tabindex');
          });
        }
      };

      updateElements(buttons);
      window.addEventListener('resize', updateElements);
    });
  }
};

export {initAccordionTabindex};
