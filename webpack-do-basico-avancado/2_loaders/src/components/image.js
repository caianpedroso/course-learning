import Playstation from '../img/playstation.png';

class Image {
  insertImage() {

    const img = document.createElement('img');

    img.src = Playstation;
    img.width = 200;

    document.querySelector('body').appendChild(img);
  }
}

export default Image;