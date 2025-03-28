import './hello-world-button.scss';

class HelloWorldButton {
  buttonCssClass = 'hello-world-button';
  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');
    button.innerHTML = 'Hello word';
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerText = 'Hello world.';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    }
    button.classList.add(this.buttonCssClass);
    body.appendChild(button);
  }
}
export default HelloWorldButton;