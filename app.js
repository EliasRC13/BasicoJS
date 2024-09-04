
let juegos = ['Zelda', 'Mario 3', 'Metroid'];

console.log('Largo: ', juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {

    console.log(elemento, indice, arr);
    
    });

let juegoNuevo = juegos.push('Mortal Kombat');

console.log (juegoNuevo);
console.log(juegos);

let primerJuego = juegos.unshift('Batman Arkham City');

console.log(juegos);

juegos.pop();

console.log(juegos);

juegos.unshift('Mortal Kombat');

console.log(juegos);

juegos.splice(4, 1);

console.log(juegos);

console.log(juegos.indexOf('Zelda'));