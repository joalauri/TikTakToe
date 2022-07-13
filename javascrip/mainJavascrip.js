let playerGeneralAlert = function (parametro) {
  Toastify({
    text: parametro,
    duration: 2000,
    newWindow: true,
    close: false,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};

//if para resolver si hay información guradada en local storage, asi no produce error
//por null.
if ("jugador1" in localStorage) {
  jugador1Storage = localStorage.getItem("jugador1");
  localStorageBackJugador1 = JSON.parse(jugador1Storage);
} else {
  console.log("no hay registro de jugador1");
}
if ("jugador2" in localStorage) {
  jugador2Storage = localStorage.getItem("jugador2");
  localStorageBackJugador2 = JSON.parse(jugador2Storage);
} else {
  console.log("no hay registro de jugador2");
}
//almacenamiento de array para jugadores, que será para recuperar la información de la partida.
let jugador1StorageArray = localStorageBackJugador1;
let jugador2StorageArray = localStorageBackJugador2;

let switchOfPlayers = 0;
//contenedores generales:
const tikTakToe = document.getElementById("conteinerTikTak");
const containerScore = document.getElementById("containerScore");
const buttonReset = document.getElementById("buttonReset");
const buttonRestartGame = document.getElementById("buttonRestartGame");
const reanudarPartidaAnterior = document.getElementById("reanudarPartidaAnterior");
const jugador1Contador = document.getElementById("tablaPuntaje1");
const jugador2Contador = document.getElementById("tablaPuntaje2");
const boxJugador1 = document.getElementById("firstPlayerBox");
const boxJugador2 = document.getElementById("secondPlayerBox");
const primerJugadorName = document.getElementById("primerJugadorName");
const segundoJugadorName = document.getElementById("segundoJugadorName");
const conmutadorPC = document.getElementById("1VsComputadora");
const conmutador1Vs1 = document.getElementById("1Vs1");
const switchGame = document.getElementById("containerToggle")
const reloj = document.getElementById("relojnumerico")

switchGame.onclick = function(){
  switchGame.classList.toggle('activeToggle')
  containerScore.classList.toggle('batmanClass')
  divContenido1.classList.toggle('boxBlanc')
  divContenido2.classList.toggle('boxBlanc')
  divContenido3.classList.toggle('boxBlanc')
  divContenido4.classList.toggle('boxBlanc')
  divContenido5.classList.toggle('boxBlanc')
  divContenido6.classList.toggle('boxBlanc')
  divContenido7.classList.toggle('boxBlanc')
  divContenido8.classList.toggle('boxBlanc')
  divContenido9.classList.toggle('boxBlanc')
  changeImage()
  reloj.classList.toggle('reloj2')
  
}
function changeImage(){
classicOrBatman===0?classicOrBatman=1:classicOrBatman=0
}
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
        //resuelve un empate
      
      } else {
        playerGeneralAlert("casillero inválido");
      }
      color();
    });
  });
}
restartGame();
function restartGame() {
  if (
    localStorageBackJugador1.length == 0 &&
    localStorageBackJugador2.length == 0
  ) {
    console.log("no hay registro de partidas guardadas");
  } else if (jugador1Storage.length >= 1 || jugador2Storage.length >= 1) {
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
    playerGeneralAlert("No se puede acceder a una partida anterior");
  }
}
function agregarImagenX(parametroX) {
  //crea una constante
  const imagenX = document.createElement(`div`);
  //proporciona un id
  imagenX.setAttribute("id", contadorJugadas + "-imagen");
  //le incorpora una clase
  imagenX.classList.add("imagenTikTakToe");
  //escribe la etiqueta HTML
  classicOrBatman===0 ? imagenX.innerHTML = `<img class="imagenTikTakToe" src="./img/cerrar.png" alt="">` : imagenX.innerHTML = `<img class="imagenTikTakToe" src="./img/batman-logo.png" alt="">`
  
  //setea la informacion al contenedor padre
  parametroX.appendChild(imagenX);
}

function agregarImagenO(parametroO) {
  //crea una constante
  const imagenO = document.createElement(`div`);
  //proporciona un id
  imagenO.setAttribute("id", contadorJugadas + "-imagen");
  //le incorpora una clase
  imagenO.classList.add("imagenTikTakToe");
  //escribe la etiqueta HTML
  classicOrBatman===0 ? imagenO.innerHTML = `<img class="imagenTikTakToe" src="./img/o.png" alt="">` : imagenO.innerHTML = `<img class="imagenTikTakToe" src="./img/joker-card.png" alt="">`
  
  //setea la informacion al contenedor padre
  parametroO.appendChild(imagenO);
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
    agregarImagenX(divXO);
  } else if (
    contadorJugadas === 2 ||
    contadorJugadas === 4 ||
    contadorJugadas === 6 ||
    contadorJugadas === 8 ||
    contadorJugadas === 10 
  ) {
    agregarImagenO(divXO);
  }
}
//boton para resetear el tablero
resetTableroButton();
function resetTableroButton() {
  //escuchamos la llamada del boton
  buttonReset.addEventListener(`click`, () => {
    resetTablero();
    jugadaGanadoraO = [];
    jugadaGanadoraX = [];
    contadorJugadas % 2 == 0 ? (contadorJugadas = 0) : (contadorJugadas = 1);
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
  //usando operador ternario para simplificar un if:
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
    jugadaGanadoraO = [];
    jugadaGanadoraX = [];
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
      element.forEach((pushear) => {
        jugadaGanadoraX.push(pushear);
      });
      playerGeneralAlert("El jugador 1 gana la partida");
      punajeJugador1.push("1");
      localStorageJugador1JSON = JSON.stringify(punajeJugador1);
      localStorage.setItem("jugador1", localStorageJugador1JSON);
      sumarAlContador();
      resetTablero();
      mostrarJugadaGanadora();
    }
  });
  computadoraPlay();
  desempate()
}
//Funcion para identificar ganador O
function comprararPosicionesO() {
  arrayDeJugadasO.forEach((element) => {
    if (element.length == 3) {
      element.forEach((pushear) => {
        jugadaGanadoraO.push(pushear);
      });
      playerGeneralAlert("El jugador 2 gana la partida");
      punajeJugador2.push("1");
      localStorageJugador2JSON = JSON.stringify(punajeJugador2);
      localStorage.setItem("jugador2", localStorageJugador2JSON);
      sumarAlContador();
      resetTablero();
      mostrarJugadaGanadora();
    }
  });
  desempate()
}

//funcion llamar al contador para que se inicien los contadores
sumarAlContador();
//contador de juego, aquí se van a sumar a sus correspondientes lugares los puntos
function sumarAlContador() {
  jugador1Contador.innerText = punajeJugador1.length;
  jugador2Contador.innerText = punajeJugador2.length;
}


function mostrarJugadaGanadora() {
  jugadaGanadoraX.forEach((element) => {
    agregarImagenX(element);
    contadorJugadas += 10;
    setTimeout(() => {
      resetTablero();
      jugadaGanadoraO = [];
      jugadaGanadoraX = [];
      contadorJugadas % 2 == 0 ? (contadorJugadas = 0) : (contadorJugadas = 1);
  
    }, 2000);
  });
  jugadaGanadoraO.forEach((element) => {
    agregarImagenO(element);
    contadorJugadas += 10;
    setTimeout(() => {
      resetTablero();
    jugadaGanadoraO = [];
    jugadaGanadoraX = [];
    contadorJugadas % 2 == 0 ? (contadorJugadas = 0) : (contadorJugadas = 1);
  
    }, 2000);
  });
}

boton1Vs1();
function boton1Vs1() {
  conmutador1Vs1.addEventListener(`click`, () => {
    switchOfPlayers = 0;
    resetAll();
    playerGeneralAlert("¡1 VS 1!")
  });
}
boton1VsPc();
function boton1VsPc() {
  conmutadorPC.addEventListener(`click`, () => {
    switchOfPlayers = 1;
    resetAll();
    playerGeneralAlert("¡Jugas contra la Pc!")
  });
}
computadoraPlay();
function computadoraPlay() {
  if (
    (contadorJugadas === 1 && switchOfPlayers === 1) ||
    (contadorJugadas === 3 && switchOfPlayers === 1) ||
    (contadorJugadas === 5 && switchOfPlayers === 1) ||
    (contadorJugadas === 7 && switchOfPlayers === 1) ||
    (contadorJugadas === 9 && switchOfPlayers === 1)
  ) {
    contadorInterno = 0;
    contadorJugadas++;
    i = 0;
    if (contadorJugadas === 1 || contadorJugadas === 2) {
      if (divContenido5.hasChildNodes() === false) {
        setTimeout(() => {
          agregarImagenO(divContenido5);
          distribuirPuntos(divContenido5);
          color();
        }, 550);
        contadorInterno++;
      } else {
        setTimeout(() => {
          agregarImagenO(divContenido1);
          distribuirPuntos(divContenido1);
        }, 550);
        color();
        contadorInterno++;
      }
    } else if (contadorInterno != 1) {
      arrayDeJugadasO.forEach((element) => {
        if (element.length === 2) {
          arrayDeJugadasXVsPc.forEach((log) => {
            if (
              arrayDeJugadasXVsPc.indexOf(log) ===
                arrayDeJugadasO.indexOf(element) &&
              i === 0
            ) {
              log.forEach((posibilidad) => {
                if (posibilidad.hasChildNodes() === false && i === 0) {
                  setTimeout(() => {
                    agregarImagenO(posibilidad);
                    distribuirPuntos(posibilidad);
                  }, 550);
                 
                  color();
                  contadorInterno++;
                  i++;
                }
              });
            }
          });
        }
      });
      if (contadorInterno != 1) {
        arrayDeJugadasX.forEach((inElement) => {
          if (inElement.length === 2) {
            arrayDeJugadasXVsPc.forEach((log) => {
              if (
                arrayDeJugadasXVsPc.indexOf(log) ===
                  arrayDeJugadasX.indexOf(inElement) &&
                i === 0
              ) {
                log.forEach((posibilidad) => {
                  if (posibilidad.hasChildNodes() === false) {
                    setTimeout(() => {
                      agregarImagenO(posibilidad);
                      distribuirPuntos(posibilidad);
                    }, 550);
                    
                    color();
                    contadorInterno++;
                    i++;
                  }
                });
              }
            });
          }
        });
      }
      if (contadorInterno != 1) {
        arrayDeJugadasO.forEach((element) => {
          arrayDeJugadasXVsPc.forEach((log) => {
            if (
              arrayDeJugadasXVsPc.indexOf(log) ===
                arrayDeJugadasO.indexOf(element) &&
              i === 0
            ) {
              log.forEach((posibilidad) => {
                if (posibilidad.hasChildNodes() === false && i === 0) {
                  setTimeout(() => {
                    agregarImagenO(posibilidad);
                    distribuirPuntos(posibilidad);
                  }, 550);
                  
                  color();
                  contadorInterno++;
                  i++;
                }
              });
            }
          });
        });
      }
    }
    i = 0;
    contadorInterno = 0;
  }
}

function desempate(){
  divContenidos.forEach(div => {
    div.hasChildNodes()=== true && desempateContador ++
    if (desempateContador===9) {
      playerGeneralAlert("¡Esto fue empate!")
      setTimeout(() => {
        resetTablero();
        jugadaGanadoraO = [];
        jugadaGanadoraX = [];
        contadorJugadas % 2 == 0 ? (contadorJugadas = 0) : (contadorJugadas = 1);
      }, 2000);
    }
  });
  desempateContador = 0
}

