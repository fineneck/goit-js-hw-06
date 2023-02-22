const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputChangeText);

function onInputChangeText(event) {
  refs.text.style.fontSize = event.currentTarget.value + 'px';
}



// const fontEl = document.getElementById('text');
//   document.getElementById('font-size-control')
//   .addEventListener('input', function () {
//     fontEl.style.fontSize = this.value + 'px';
// });