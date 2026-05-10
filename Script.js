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




//CUENTA REGRESIVA 

const fechaObjetivo = new Date("Jul 21, 2027 16:30:00").getTime();

        const actualizarContador = () => {

            const ahora = new Date().getTime();
            const diferencia = fechaObjetivo - ahora;

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

            const horas = Math.floor(
                (diferencia % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );

            const minutos = Math.floor(
                (diferencia % (1000 * 60 * 60))
                / (1000 * 60)
            );

            const segundos = Math.floor(
                (diferencia % (1000 * 60))
                / 1000
            );

            document.getElementById("dias").innerHTML = dias;
            document.getElementById("horas").innerHTML = horas;
            document.getElementById("minutos").innerHTML = minutos;
            document.getElementById("segundos").innerHTML = segundos;

            // Cuando termina
            if(diferencia < 0){
                clearInterval(intervalo);

                document.querySelector(".contador").innerHTML = `
                    <h1>¡La cuenta terminó!</h1>
                `;
            }
        };

        actualizarContador();

        const intervalo = setInterval(actualizarContador, 1000);



// 🔥 Ejecutar también al cargar
window.addEventListener('scroll', mostrarElementos);
window.addEventListener('load', mostrarElementos);
window.addEventListener('scroll', mostrarElementosIzquierda);
window.addEventListener('load', mostrarElementosIzquierda);

