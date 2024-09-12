

let equipos = ['Rosario Central', 'Velez', 'Racing'];

console.log(equipos.length);

let equipoNuevo = equipos.push('San Lorenzo');

console.log(equipos);

equipos.pop();

console.log(equipos);

let equiposNuevos = equipos.push('Huracan', 'Lanus');

console.log(equipos);

equipos.splice(1, 3);

console.log(equipos);

console.log(equipos.indexOf('Rosario Central'));