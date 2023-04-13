function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
  }

  const titulo = document.querySelector('h2');
  typeWriter(titulo);

  //*fade in imagem olhos*//

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('body')
            .classList
            .add('loaded');
  });