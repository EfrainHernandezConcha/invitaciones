//Declaracion de la constante elementos tomando del documento HTML la clase "oculto"
const elementos = document.querySelectorAll('.oculto');

//Funcion mostrarElementos con la constante alturaPantalla que sera igual al valor window.innerHeight
function mostrarElementos() {
  const alturaPantalla = window.innerHeight;

  elementos.forEach(el => {
    const distancia = el.getBoundingClientRect().top;

    if (distancia < alturaPantalla - 100) {
      el.classList.add('visible');
    }
    else {
        el.classList.remove('visible')
      }
  });
}

//Declaracion de la constante elementos tomando del documento HTML la clase "oculto"
const elementosIzq = document.querySelectorAll('.oculto-izquierdo');

//Funcion mostrarElementos con la constante alturaPantalla que sera igual al valor window.innerHeight
function mostrarElementosIzquierda() {
  const alturaPantalla = window.innerHeight;

  elementosIzq.forEach(el => {
    const distanciaIzq = el.getBoundingClientRect().top;

    if (distanciaIzq < alturaPantalla - 100) {
      el.classList.add('visible-izquierdo');
    }
    else {
        el.classList.remove('visible-izquierdo')
      }
  });
}



// 🔥 Ejecutar también al cargar
window.addEventListener('scroll', mostrarElementos);
window.addEventListener('load', mostrarElementos);
window.addEventListener('scroll', mostrarElementosIzquierda);
window.addEventListener('load', mostrarElementosIzquierda);

