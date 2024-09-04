
let juegos = ['Zelda', 'Mario 3', 'Metroid'];

console.log('Largo: ', juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {

    console.log(elemento, indice, arr);
    
    });