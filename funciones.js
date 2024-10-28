
let dato = prompt('Ingresa tu nombre:');

function saludar3(nombre) {

    document.write('Hola '+ nombre);
    
    }
    
saludar3(dato);

const getAleatorio = ()=> Math.random();

console.log(getAleatorio());

const imprimeArg = (...arg) => {
    console.log(arg);
}

imprimeArg("Elias", 20, true);

let Tony = {

    nombre: 'Tony',
    
    codeName: 'IronMan',
    
    vivo: false,
    
    edad: 40,
    
    coord: {
    
    lat: 123,
    
    long: 424,
    
    },
    
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
    
    'ultima-pelicula': 'Infinity War',
    
    };


const imprimePersonaje = ({nombre, codeName, vivo, edad, trajes} ) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePersonaje(Tony);

const imprimePersonaje2 = ({nombre, codeName})=> {
    document.write(nombre);
    document.write(codeName);
}

imprimePersonaje2(Tony);