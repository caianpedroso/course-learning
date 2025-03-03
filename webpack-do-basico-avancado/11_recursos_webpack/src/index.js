import print from "./msg";

console.log(_.difference([1, 2, 3], [1, 4, 5]));

console.log(_.lastIndexOf([1,2,3]))

if(module.hot) {
  module.hot.accept('./msg.js', function () {
    console.log('O modulo do msg atualizou!');
    print();
  });
}