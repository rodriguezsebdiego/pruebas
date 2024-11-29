// Se crea una variable llamada listaDeNumeros que contiene un arreglo con una serie de números.
const listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

// Se crea una función llamada buscar que recibe dos parámetros: una lista de números y el número a buscar.
function buscar(listaDeNumeros, numeroABuscar) {
  // Se crea un ciclo for que va a iterar por cada elemento del arreglo.
  for (let i = 0; i < listaDeNumeros.length; i++) {
    // Si el elemento actual es igual al número a buscar, se devuelve su posición en el arreglo.
    if (listaDeNumeros[i] === numeroABuscar) return i;
  }
  // Si no se encuentra el número, se devuelve -1.
  return -1;
}

// Se crea una variable llamada donde que almacena el resultado de llamar a la función buscar con la lista de números y el número a buscar.
const donde = buscar(listaDeNumeros, 987);

// Se imprime en consola un mensaje indicando la posición donde se encontró el número y el número mismo.
console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);
