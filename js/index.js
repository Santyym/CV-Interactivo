const d = document;
let sprite = d.getElementById("sprite");
let fondo = d.getElementById("fondo");

let limitSprite = sprite.getBoundingClientRect();
let limitFondo = fondo.getBoundingClientRect();

let velocidad = 40;
let mTop = 0;
let mLeft = 0;

//CSS ANIMATION

//DERECHA
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowRight") {
    moverDerecha();
    e.preventDefault();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key == "ArrowRight") {
    sprite.style.animation = "";
    sprite.style.backgroundPosition = "-155px -945px";
  }
});

//IZQUIERDA
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowLeft") {
    moverIzquierda();
    e.preventDefault();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key == "ArrowLeft") {
    sprite.style.animation = "";
    sprite.style.backgroundPosition = "-10px -10px";
  }
});

//ARRIBA
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowUp") {
    moverArriba();
    e.preventDefault();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key == "ArrowUp") {
    sprite.style.animation = "";
    sprite.style.backgroundPosition = "4px -1400px";
  }
});

//ABAJO
document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowDown") {
    moverAbajo();
    e.preventDefault();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key == "ArrowDown") {
    sprite.style.animation = "";
    sprite.style.backgroundPosition = "-10px -480px";
  }
});

//MOVIMIENTO

function moverDerecha() {
  mLeft += velocidad;
  sprite.style.marginLeft = mLeft + "px";
  sprite.style.animation = "correr-der 0.5s steps(4) infinite";
}

function moverIzquierda() {
  mLeft -= velocidad;
  sprite.style.marginLeft = mLeft + "px";
  sprite.style.animation = "correr-izq 0.5s steps(4) infinite";
}

function moverArriba() {
  mTop -= velocidad;
  sprite.style.marginTop = mTop + "px";
  sprite.style.animation = "correr-arriba 0.5s steps(4) infinite";
}

function moverAbajo() {
  mTop += velocidad;
  sprite.style.marginTop = mTop + "px";
  sprite.style.animation = "correr-abajo 0.5s steps(4) infinite";
}

console.log(limitSprite);
