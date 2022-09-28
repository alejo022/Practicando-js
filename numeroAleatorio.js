/* Número random - aleatorio de un rango de numeros */

let min = 10;
let max = 40;

let numRandom = Math.floor(Math.random() * (max - min + 1) + min);

console.log("El numero aleatorio entre " + min + " y " + max + " es: " + numRandom);


/* function reutilizable */

function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

let resultado = aleatorio(1, 3);
console.log("oe" + resultado);

/* ------------------------------------------------------------------------------------------------- */