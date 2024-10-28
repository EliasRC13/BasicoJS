const nombre = prompt("Por favor, ingresa tu nombre:");
const apellido = prompt("Por favor, ingresa tu apellido:");

// Seleccionar el elemento del header por su ID y actualizar su contenido
const headerSaludo = document.getElementById("saludo");
headerSaludo.textContent = 'Hola, ' + nombre + ' ' + apellido +'! Bienvenido a nuestra página.';