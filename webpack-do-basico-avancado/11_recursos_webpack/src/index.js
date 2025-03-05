import print from "./msg";
import $ from "jquery";

console.log(_.difference([1, 2, 3], [1, 4, 5]));

console.log(_.lastIndexOf([1,2,3]))

if(module.hot) {
  module.hot.accept('./msg.js', function () {
    console.log('O modulo do msg atualizou!');
    print();
  });
}

const body = $('body');

function createButton() {
  const btn = document.createElement('button');
  btn.innerText = 'Clica Aqui!';

  document.querySelector('body').appendChild(btn);

  btn.onclick = e => import('./lazy').then(module => {
    const lazy = module.default;

    lazy();
  })
}

createButton();