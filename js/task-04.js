const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

const decrementCounter = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const incrementCounter = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);