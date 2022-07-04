//array de guardado para comprobar posiciones X.
let verticalRightX = [];
let horizBottomX = [];
let verticalLeftX = [];
let horizMiddleX = [];
let verticalMiddleX = [];
let firstDiagonalX = [];
let secondDiagonalX = [];
let horizTopX = [];
const arrayDeJugadasX = [
  (verticalRightX = []),
  (horizBottomX = []),
  (verticalLeftX = []),
  (horizMiddleX = []),
  (verticalMiddleX = []),
  (firstDiagonalX = []),
  (secondDiagonalX = []),
  (horizTopX = []),
];
//array de guardado para comprobar posiciones O.
let verticalRightO = [];
let horizBottomO = [];
let verticalLeftO = [];
let horizMiddleO = [];
let verticalMiddleO = [];
let firstDiagonalO = [];
let secondDiagonalO = [];
let horizTopO = [];
const arrayDeJugadasO = [
  (verticalRightO = []),
  (horizBottomO = []),
  (verticalLeftO = []),
  (horizMiddleO = []),
  (verticalMiddleO = []),
  (firstDiagonalO = []),
  (secondDiagonalO = []),
  (horizTopO = []),
];
//divs contenidos:
let divContenido1 = document.getElementById("divT1");
let divContenido2 = document.getElementById("divT2");
let divContenido3 = document.getElementById("divT3");
let divContenido4 = document.getElementById("divT4");
let divContenido5 = document.getElementById("divT5");
let divContenido6 = document.getElementById("divT6");
let divContenido7 = document.getElementById("divT7");
let divContenido8 = document.getElementById("divT8");
let divContenido9 = document.getElementById("divT9");
let divContenidos = [
  divContenido1,
  divContenido2,
  divContenido3,
  divContenido4,
  divContenido5,
  divContenido6,
  divContenido7,
  divContenido8,
  divContenido9,
];
//
let punajeJugador1 = [];
let punajeJugador2 = [];
//variable contador de jugadas
let contadorJugadas = 0;
// Array objeto jugador
//contenedores:
const tikTakToe = document.getElementById("conteinerTikTak");
const containerScore = document.getElementById("containerScore");
const buttonReset = document.getElementById("buttonReset");
const buttonRestartGame = document.getElementById("buttonRestartGame");
const jugador1Contador = document.getElementById("tablaPuntaje1");
const jugador2Contador = document.getElementById("tablaPuntaje2");
//activar la funcion para invocar el listener.
agregarXOO();
//Esta función escucha dónde se está clickeando para poder avisar al programa donde:
//agregar una imagen y
function agregarXOO() {
  //compara el div llamado con la lista de div contenidos
  divContenidos.find((divXO) => {
    divXO.addEventListener(`click`, () => {
      if (divXO.hasChildNodes() === false) {
        //incrementa en uno el contador de jugadas
        contadorJugadas++;
        //activa la función agregar imagen, y envía el identificador del div.
        agregarImagen(divXO);
        //información que se envia para declarar la partida
        distribuirPuntos(divXO);
      } else {
        alert("casillero invalido");
      }
    });
  });
}
//recibe como parámetro la información proveniente de la funcion invocadora del
//html, convirtiendo ese mensaje, en una imagen en el html.
function agregarImagen(divXO) {
  //contador de jugadas activa X
  if (
    contadorJugadas === 1 ||
    contadorJugadas === 3 ||
    contadorJugadas === 5 ||
    contadorJugadas === 7 ||
    contadorJugadas === 9
  ) {
    //crea una constante
    const imagenX = document.createElement(`div`);
    //proporciona un id
    imagenX.setAttribute("id", contadorJugadas + "-imagen");
    //le incorpora una clase
    imagenX.classList.add("imagenTikTakToe");
    //escribe la etiqueta HTML
    imagenX.innerHTML = `<img class="imagenTikTakToe" src="./img/cerrar.png" alt="">`;
    //setea la informacion al contenedor padre
    divXO.appendChild(imagenX);

    //contador de jugadas activa crea el O
  } else if (
    contadorJugadas === 2 ||
    contadorJugadas === 4 ||
    contadorJugadas === 6 ||
    contadorJugadas === 8
  ) {
    //crea una constante
    const imagenO = document.createElement(`div`);
    //proporciona un id
    imagenO.setAttribute("id", contadorJugadas + "-imagen");
    //le incorpora una clase
    imagenO.classList.add("imagenTikTakToe");
    //escribe la etiqueta HTML
    imagenO.innerHTML = `<img class="imagenTikTakToe" src="./img/o.png" alt="">`;
    //setea la informacion al contenedor padre
    divXO.appendChild(imagenO);
  }
}
//boton para resetear el tablero
resetTableroButton();
function resetTableroButton() {
  //escuchamos la llamada del boton
  buttonReset.addEventListener(`click`, () => {
    resetTablero();
  });
}
//función para resetear todos los valores.
function resetTablero() {
  //activamos un bucle for each para localizar a cada contenedor padre
  divContenidos.forEach((element) => {
    //mientras contenedor padre tenga hijos, seguir eliinando.
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  });
  for (i = 0; i < 5; i++) {
    arrayDeJugadasX.forEach((element) => {
      element.pop();
    });
    arrayDeJugadasO.forEach((element) => {
      element.pop();
    });
  }

  //poner el contador de jugadas en 0
  contadorJugadas = 0;
}
resetAllButton();
function resetAllButton() {
  buttonRestartGame.addEventListener(`click`, () => {
    resetAll();
  });
}
function resetAll() {
  //activamos un bucle for each para localizar a cada contenedor padre
  divContenidos.forEach((element) => {
    //mientras contenedor padre tenga hijos, seguir eliinando.
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  });
  for (i = 0; i < 5; i++) {
    arrayDeJugadasX.forEach((element) => {
      element.pop();
    });
    arrayDeJugadasO.forEach((element) => {
      element.pop();
    });
  }

  while (punajeJugador1.length != 0) {
    punajeJugador1.pop();
  }
  while (punajeJugador2.length !== 0) {
    punajeJugador2.pop();
  }
  //poner el contador de jugadas en 0
  contadorJugadas = 0;
  sumarAlContador();
}

//Funcion que distribuye los puntos en los casilleros correspondiente de X y O
function distribuirPuntos(divXO) {
  if (
    contadorJugadas === 1 ||
    contadorJugadas === 3 ||
    contadorJugadas === 5 ||
    contadorJugadas === 7 ||
    contadorJugadas === 9
  ) {
    switch (divXO) {
      case divContenido1:
        verticalLeftX.push("1");
        horizTopX.push("1");
        firstDiagonalX.push("1");
        comprararPosicionesX();
        break;
      case divContenido2:
        verticalMiddleX.push("1");
        horizTopX.push("1");
        comprararPosicionesX();
        break;
      case divContenido3:
        horizTopX.push("1");
        verticalRightX.push("1");
        secondDiagonalX.push("1");
        comprararPosicionesX();
        break;
      case divContenido4:
        verticalLeftX.push("1");
        horizMiddleX.push("1");
        comprararPosicionesX();
        break;
      case divContenido5:
        horizMiddleX.push("1");
        verticalMiddleX.push("1");
        firstDiagonalX.push("1");
        secondDiagonalX.push("1");
        comprararPosicionesX();
        break;
      case divContenido6:
        verticalRightX.push("1");
        horizMiddleX.push("1");
        comprararPosicionesX();
        break;
      case divContenido7:
        verticalLeftX.push("1");
        horizBottomX.push("1");
        secondDiagonalX.push("1");
        comprararPosicionesX();
        break;
      case divContenido8:
        horizBottomX.push("1");
        verticalMiddleX.push("1");
        comprararPosicionesX();
        break;
      case divContenido9:
        verticalRightX.push("1");
        horizBottomX.push("1");
        firstDiagonalX.push("1");
        comprararPosicionesX();
        break;
    }
  } else if (
    contadorJugadas === 2 ||
    contadorJugadas === 4 ||
    contadorJugadas === 6 ||
    contadorJugadas === 8
  ) {
    switch (divXO) {
      case divContenido1:
        verticalLeftO.push("1");
        horizTopO.push("1");
        firstDiagonalO.push("1");
        comprararPosicionesO();
        break;
      case divContenido2:
        verticalMiddleO.push("1");
        horizTopO.push("1");
        comprararPosicionesO();
        break;
      case divContenido3:
        horizTopO.push("1");
        verticalRightO.push("1");
        secondDiagonalO.push("1");
        comprararPosicionesO();
        break;
      case divContenido4:
        verticalLeftO.push("1");
        horizMiddleO.push("1");
        comprararPosicionesO();
        break;
      case divContenido5:
        horizMiddleO.push("1");
        verticalMiddleO.push("1");
        firstDiagonalO.push("1");
        secondDiagonalO.push("1");
        comprararPosicionesO();
        break;
      case divContenido6:
        verticalRightO.push("1");
        horizMiddleO.push("1");
        comprararPosicionesO();
        break;
      case divContenido7:
        verticalLeftO.push("1");
        horizBottomO.push("1");
        secondDiagonalO.push("1");
        comprararPosicionesO();
        break;
      case divContenido8:
        horizBottomO.push("1");
        verticalMiddleO.push("1");
        comprararPosicionesO();
        break;
      case divContenido9:
        verticalRightO.push("1");
        horizBottomO.push("1");
        firstDiagonalO.push("1");
        comprararPosicionesO();
        break;
    }
  }
}
//Funcion para identificar ganador X
function comprararPosicionesX() {
  arrayDeJugadasX.forEach((element) => {
    if (element.length == 3) {
      alert(" X win");
      punajeJugador1.push("1");
      sumarAlContador();
      resetTablero();
    }
  });
}
//Funcion para identificar ganador O
function comprararPosicionesO() {
  arrayDeJugadasO.forEach((element) => {
    if (element.length == 3) {
      alert("O win");
      punajeJugador2.push("1");
      sumarAlContador();
      resetTablero();
    }
  });
}
//funcion llamar al contador para que se inicien los contadores
sumarAlContador();
//contador de juego, aquí se van a sumar a sus correspondientes lugares los puntos
function sumarAlContador() {
  jugador1Contador.innerText = punajeJugador1.length;
  jugador2Contador.innerText = punajeJugador2.length;
}
