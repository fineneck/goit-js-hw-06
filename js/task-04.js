const refs = {
 decrementBtn: document.querySelector('[data-action="decrement"]'),
 incrementBtn: document.querySelector('[data-action="increment"]'),
 valueRef: document.querySelector('#value'),
};

let counterValue = 0;

const onDecrementBtnClick = () => {
  counterValue -= 1;
  refs.valueRef.textContent = counterValue;
};

const onIncrementBtnClick = () => {
  counterValue += 1;
  refs.valueRef.textContent = counterValue;
};

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);




// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueRef = document.querySelector('#value');

// decrementBtn.addEventListener('click', onDecrementBtn => {
//   counterValue -= 1;
//   valueRef.textContent = counterValue;
// });
// incrementBtn.addEventListener('click', onIncrementBtn => {
//   counterValue += 1;
//   valueRef.textContent = counterValue;
// });