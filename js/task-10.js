function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function createBoxes(amount) { 
  const addBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    addBoxes.push(div);
  }
  return addBoxes;  
};

refs.btnCreate.addEventListener('click', onBtnClickCreate);
refs.btnDestroy.addEventListener('click', onBtnClickDestroy);

function onBtnClickCreate() { 
  const createBox = createBoxes(refs.input.value);
  boxes.append(...createBox);
};

function onBtnClickDestroy() { 
  boxes.innerHTML = '';
  refs.input.value = '';
};
