const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementBtn => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
incrementBtn.addEventListener('click', onIncrementBtn => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});




// const onDecrementBtn = () => {
//   counterValue -= 1;
//   valueRef.textContent = counterValue;
// };

// const onIncrementBtn = () => {
//   counterValue += 1;
//   valueRef.textContent = counterValue;
// };

// decrementBtn.addEventListener('click', onDecrementBtn);
// incrementBtn.addEventListener('click', onIncrementBtn);