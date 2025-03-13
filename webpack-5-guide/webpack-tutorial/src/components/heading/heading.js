class Heading {
  render () {
    const h1 =  document.querySelector('h1');
    const body =  document.querySelector('body');
    h1.innerHTML = 'Web Developer';
    body.appendChild(h1);
  }
}

export default Heading;