import Playstation from './playstation.png';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'Playstation';
  img.width = 300;
  img.height = 300;
  img.src = Playstation;
  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;