import Playstation from './playstation.png';
import altText from './altText.txt';

function addImage() {
  const img = document.createElement('img');
  img.alt = altText;
  img.width = 300;
  img.height = 300;
  img.src = Playstation;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;