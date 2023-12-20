// Dar bons nomes de variáveis
var n1 = 10;
var n2 = 20;

console.log(n1+n2);

// Como devs, o que mais fazemos é LER código!
// Contexto é extremamente importante !
const userFirstInputNumer = 10;
const userSecondInputNumer = 10;

console.log(userFirstInputNumer + userSecondInputNumer);


// ===

var inputDoUsuario;

// No browser
// - string
// - elemento do DOM (Campo de busca do google)
const inputUsuario = document.querySelector('input').value;
const $inputUsuario = document.querySelector('input').value;

// Boolenos
// <input value="" />
document.querySelector('input').hasAttribute('value'); // true | false
// has , is
if( hasSommething || isAnything ) {}
if( !hasSommething ) {}

// should
if( shouldOpen ) {}