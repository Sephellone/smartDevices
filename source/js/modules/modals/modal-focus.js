const modal = document.querySelector('[data-modal]');
const firstField = modal.querySelector('input');

function onClassChange(mutationList) {
  mutationList.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      if (modal.classList.contains('is-active')) {
        window.setTimeout(() => firstField.focus(), 500);
      }
    }
  });
}

const initModalFocus = () => {
  if (modal && firstField) {
    const modalMutationObserver = new MutationObserver(onClassChange);

    modalMutationObserver.observe(modal, {attributes: true});
  }
};

export {initModalFocus};
