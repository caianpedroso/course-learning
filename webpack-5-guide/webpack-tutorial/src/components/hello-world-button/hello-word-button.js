class HelloWordButton {
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello word';
    button.classList.add('hello-word-button');
    const body = document.querySelector('body');
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerText = 'Hello world.';
      p.classList.add('hello-word-text');
      body.appendChild(p);
    }
    body.appendChild(button);
  }
}
export default HelloWordButton;