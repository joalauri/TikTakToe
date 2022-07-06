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
let localStorageJugador1JSON = []
let localStorageJugador2JSON = []
let localStorageBackJugador1 = []
let localStorageBackJugador2 = []
let punajeJugador1 = [];
let punajeJugador2 = [];
let contadorJugadas = 0;
let jugador1Storage = "";
let jugador2Storage = "";
//if para resolver si hay información guradada en local storage, asi no produce error
//por null.
if ("jugador1" in localStorage) {
  jugador1Storage = localStorage.getItem('jugador1')
  localStorageBackJugador1 = JSON.parse(jugador1Storage)
  console.log("hay registros de jugador 1");
} else {
  console.log("no hay registro de jugador1");
}
if ("jugador2" in localStorage) {
  jugador2Storage = localStorage.getItem('jugador2')
 localStorageBackJugador2 = JSON.parse(jugador2Storage)
  console.log("hay registros de jugador 2");
} else {
  console.log("no hay registro de jugador2");
}
//almacenamiento de array para jugadores, que será para recuperar la información de la partida.
let jugador1StorageArray = localStorageBackJugador1;
let jugador2StorageArray = localStorageBackJugador2;
//contenedores generales:
const tikTakToe = document.getElementById("conteinerTikTak");
const containerScore = document.getElementById("containerScore");
const buttonReset = document.getElementById("buttonReset");
const buttonRestartGame = document.getElementById("buttonRestartGame");
const reanudarPartidaAnterior = document.getElementById(
  "reanudarPartidaAnterior"
);
const jugador1Contador = document.getElementById("tablaPuntaje1");
const jugador2Contador = document.getElementById("tablaPuntaje2");
const boxJugador1 = document.getElementById("firstPlayerBox");
const boxJugador2 = document.getElementById("secondPlayerBox");
const primerJugadorName = document.getElementById("primerJugadorName");
const segundoJugadorName = document.getElementById("segundoJugadorName");
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
      color();
    });
  });
}
restartGame();
function restartGame() {
  if (localStorageBackJugador1.length == 0 && localStorageBackJugador2.length == 0) {
    console.log("no hay registro de partidas guardadas");
  } else if (jugador1Storage.length >= 1 || jugador2Storage.length >= 1) {
    //lo unico que me queda hacer acá es solucionar el problema de cuando el click se hace y hay 1 sola partida ganada. Ahi carga una pareja de 1 porque toma " " como array.
    reanudarPartidaAnterior.addEventListener(`click`, () => {
      if (jugador1StorageArray.length >= 1) {
        jugador1StorageArray.forEach((element) => {
          punajeJugador1.push(element);
        });
      } else {
        jugador1StorageArray = [];
      }
      if (jugador2StorageArray.length >= 1) {
        jugador2StorageArray.forEach((element) => {
          punajeJugador2.push(element);
        });
      } else {
        jugador2StorageArray = [];
      }
      sumarAlContador();
    });
  } else {
    alert("No se puede acceder a una partida anterior");
  }
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
    contadorJugadas === 8 ||
    contadorJugadas === 10
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
  if (contadorJugadas % 2 == 0) {
    contadorJugadas = 0;
  } else {
    contadorJugadas = 1;
  }
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
  //se encargará de eliminar uno por  uno los elementos de puntaje.
  while (punajeJugador1.length != 0) {
    punajeJugador1.pop();
  }
  while (punajeJugador2.length !== 0) {
    punajeJugador2.pop();
  }
  //poner el contador de jugadas en 0
  contadorJugadas = 0;
  localStorage.removeItem("jugador1");
  localStorage.removeItem("jugador2");
  sumarAlContador();
  color();
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
        verticalLeftX.push(divXO);
        horizTopX.push(divXO);
        firstDiagonalX.push(divXO);
        comprararPosicionesX();
        break;
      case divContenido2:
        verticalMiddleX.push(divXO);
        horizTopX.push(divXO);
        comprararPosicionesX();
        break;
      case divContenido3:
        horizTopX.push(divXO);
        verticalRightX.push(divXO);
        secondDiagonalX.push(divXO);
        comprararPosicionesX();
        break;
      case divContenido4:
        verticalLeftX.push(divXO);
        horizMiddleX.push(divXO);
        comprararPosicionesX();
        break;
      case divContenido5:
        horizMiddleX.push(divXO);
        verticalMiddleX.push(divXO);
        firstDiagonalX.push(divXO);
        secondDiagonalX.push(divXO);
        comprararPosicionesX();
        break;
      case divContenido6:
        verticalRightX.push(divXO);
        horizMiddleX.push(divXO);
        comprararPosicionesX();
        break;
      case divContenido7:
        verticalLeftX.push(divXO);
        horizBottomX.push(divXO);
        secondDiagonalX.push(divXO);
        comprararPosicionesX();
        break;
      case divContenido8:
        horizBottomX.push(divXO);
        verticalMiddleX.push(divXO);
        comprararPosicionesX();
        break;
      case divContenido9:
        verticalRightX.push(divXO);
        horizBottomX.push(divXO);
        firstDiagonalX.push(divXO);
        comprararPosicionesX();
        break;
    }
  } else if (
    contadorJugadas === 2 ||
    contadorJugadas === 4 ||
    contadorJugadas === 6 ||
    contadorJugadas === 8 ||
    contadorJugadas === 10
  ) {
    switch (divXO) {
      case divContenido1:
        verticalLeftO.push(divXO);
        horizTopO.push(divXO);
        firstDiagonalO.push(divXO);
        comprararPosicionesO();
        break;
      case divContenido2:
        verticalMiddleO.push(divXO);
        horizTopO.push(divXO);
        comprararPosicionesO();
        break;
      case divContenido3:
        horizTopO.push(divXO);
        verticalRightO.push(divXO);
        secondDiagonalO.push(divXO);
        comprararPosicionesO();
        break;
      case divContenido4:
        verticalLeftO.push(divXO);
        horizMiddleO.push(divXO);
        comprararPosicionesO();
        break;
      case divContenido5:
        horizMiddleO.push(divXO);
        verticalMiddleO.push(divXO);
        firstDiagonalO.push(divXO);
        secondDiagonalO.push(divXO);
        comprararPosicionesO();
        break;
      case divContenido6:
        verticalRightO.push(divXO);
        horizMiddleO.push(divXO);
        comprararPosicionesO();
        break;
      case divContenido7:
        verticalLeftO.push(divXO);
        horizBottomO.push(divXO);
        secondDiagonalO.push(divXO);
        comprararPosicionesO();
        break;
      case divContenido8:
        horizBottomO.push(divXO);
        verticalMiddleO.push(divXO);
        comprararPosicionesO();
        break;
      case divContenido9:
        verticalRightO.push(divXO);
        horizBottomO.push(divXO);
        firstDiagonalO.push(divXO);
        comprararPosicionesO();
        break;
    }
  }
}
color();
function color() {
  if (contadorJugadas % 2 == 0) {
    boxJugador1.classList.add("active1");
    primerJugadorName.classList.add("active1");
    boxJugador2.classList.remove("active2");
    segundoJugadorName.classList.remove("active2");
  } else {
    boxJugador2.classList.add("active2");
    segundoJugadorName.classList.add("active2");
    boxJugador1.classList.remove("active1");
    primerJugadorName.classList.remove("active1");
  }
}
//Funcion para identificar ganador X
function comprararPosicionesX() {
  arrayDeJugadasX.forEach((element) => {
    if (element.length == 3) {
      alert("player 1 win");
      punajeJugador1.push("1");
      localStorageJugador1JSON  = JSON.stringify(punajeJugador1)
      localStorage.setItem("jugador1", localStorageJugador1JSON);
    //   element.forEach(divID => {
    //     console.log(divID)
    //  });
     sumarAlContador();
      resetTablero();
    }
  });
}
//Funcion para identificar ganador O
function comprararPosicionesO() {
  arrayDeJugadasO.forEach((element) => {
    if (element.length == 3) {
      alert("player 2 win");
      punajeJugador2.push("1");
      localStorageJugador2JSON  = JSON.stringify(punajeJugador2)
      localStorage.setItem("jugador2", localStorageJugador2JSON);
    //  element.forEach(divID => {
    //     console.log(divID)
    //  });
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