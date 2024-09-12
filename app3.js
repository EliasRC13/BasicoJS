let personaje = {

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

    console.log(personaje.codeName);

    console.log(personaje["ultima-pelicula"]);

    console.log(personaje.trajes[2]);

    let equipo = {
        nombre: 'Rosario Central',
        apodo: 'Canalla',
        nacimiento: 1889,
    }

    equipo.ubicacion = 'Av. Genova 640';

    console.log(equipo);

    let resultado = Math.random() * 10;

    console.log(resultado);