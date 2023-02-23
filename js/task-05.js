const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  event.currentTarget.value
    ? refs.nameLabel.textContent = this.value
    : refs.nameLabel.textContent = 'Anonymous';
};
