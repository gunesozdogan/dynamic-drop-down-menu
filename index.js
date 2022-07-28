export { dropDown };

function dropDown(options) {
  const wrapper = document.createElement('div');
  const parent = options.parentElement;

  wrapper.classList.add('wrapper');
  parent.appendChild(wrapper);

  // EVENT LISTENER ON PARENT ELEMENT
  parent.addEventListener('mouseover', function () {
    this.classList.add('visible');
  });
  parent.addEventListener('mouseout', function () {
    this.classList.remove('visible');
  });

  options.menuElements.forEach((value, index) => {
    // CREATING MENU ELEMENTS
    const menuElement = document.createElement('a');
    menuElement.textContent = value;
    menuElement.classList.add('item', `item-${index}`);
    menuElement.href = '#';
    wrapper.appendChild(menuElement);
  });
}
