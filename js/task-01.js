const categoriesNum = document.querySelector('#categories');
console.log('Number of categories:', categoriesNum.children.length);

const categoryEl = document.querySelectorAll('#categories>li');
categoryEl.forEach(el => {
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Elements:', el.lastElementChild.children.length);
});