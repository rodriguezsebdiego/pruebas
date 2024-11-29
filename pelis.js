const fs = require('fs');

// Leer el archivo JSON
const peliculas = JSON.parse(fs.readFileSync(__dirname + "/pelis.json"));

// Función para obtener todas las películas
const obtenerPeliculas = (nombre) => {
    return db.find({ nombre })
  return peliculas;
};

// Función para ordenar películas
const ordenarPeliculas = (propiedad) => {
  return peliculas.sort((a, b) => a[propiedad] > b[propiedad] ? 1 : -1);
};

// Otras funciones para buscar y filtrar...
console.log(peliculas)



exports.ordena = ordenarPeliculas;
exports.busca = obtenerPeliculas;