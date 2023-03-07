const noJsBlocks = document.querySelectorAll('.no-js');

const initJsElements = () => {
  if (noJsBlocks && noJsBlocks.length) {
    noJsBlocks.forEach((block) => block.classList.remove('no-js'));
  }
};

export {initJsElements};
