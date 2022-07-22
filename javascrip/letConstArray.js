

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
  (verticalLeftX = []),
  (verticalMiddleX = []),
  (verticalRightX = []),
  (horizTopX = []),
  (horizMiddleX = []),
  (horizBottomX = []),
  (firstDiagonalX = []),
  (secondDiagonalX = []),
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
  (verticalLeftO = []),
  (verticalMiddleO = []),
  (verticalRightO = []),
  (horizTopO = []),
  (horizMiddleO = []),
  (horizBottomO = []),
  (firstDiagonalO = []),
  (secondDiagonalO = []),
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

const arrayDeJugadasXVsPc = [
    (vL = [divContenido1, divContenido4, divContenido7]),
    (vM = [divContenido2, divContenido5, divContenido8]),
    (vR = [divContenido3, divContenido6, divContenido9]),
    (hT = [divContenido1, divContenido2, divContenido3]),
    (hM = [divContenido4, divContenido5, divContenido6]),
    (hB = [divContenido7, divContenido8, divContenido9]),
    (fD = [divContenido1, divContenido5, divContenido9]),
    (sD = [divContenido3, divContenido5, divContenido7]),
  ];
let localStorageJugador1JSON = [];
let localStorageJugador2JSON = [];
let localStorageBackJugador1 = [];
let localStorageBackJugador2 = [];
let punajeJugador1 = [];
let punajeJugador2 = [];
let contadorJugadas = 0;
let jugador1Storage = "";
let jugador2Storage = "";
let classicOrBatman = 0
let prohibidoJugarX = 0
let prohibidoJugarO = 0
let desempateContador = 0

let jugadaGanadoraX = [];
let jugadaGanadoraO = [];




