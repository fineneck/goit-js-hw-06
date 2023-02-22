function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  spanColor: document.querySelector('.color'),
  btnColor: document.querySelector('.change-color'),
};

refs.btnColor.addEventListener('click', onBtnClick);

function onBtnClick() {
  const changeColor = getRandomHexColor();
  refs.spanColor.textContent = changeColor;
  refs.body.style.backgroundColor = changeColor;
}
