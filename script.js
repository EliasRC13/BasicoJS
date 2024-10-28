const nombre = prompt("Por favor, ingresa tu nombre:");
const apellido = prompt("Por favor, ingresa tu apellido:");

// Seleccionar el elemento del header por su ID y actualizar su contenido
const headerSaludo = document.getElementById("saludo");
headerSaludo.textContent = 'Hola, ' + nombre + ' ' + apellido +'! Bienvenido a nuestra página.';

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

    const footerHeroe = document.getElementById("iron");

    footerHeroe.textContent = Tony.nombre + Tony.codeName;