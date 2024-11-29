
// function ordernarElArray(arrayOriginal){
//   // usá el método de burbujeo 
//   return arrayOrdenado;
// }

// // creá tu array de 40 números aleatorios
// const arrayAleatorio = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
// // usá función ordenarElArray para ordenar tu nuevo array
// console.log(arrayAleatorio);
const lista  = [32, 45, 9, 1234, 453,40 ]

for (let contadorUno = 0; contadorUno < lista.length; contadorUno++) {
  for ( let contadorDos = 0; contadorDos < lista.length; contadorDos++ ){
    const esMayor = lista[contadorDos] > lista[contadorDos + 1];
    if (esMayor) {
      var aux = lista[contadorDos + 1];
      lista[contadorDos + 1] = lista[contadorDos];
      lista[contadorDos] = aux;
  }
   
   
  
} }

const cliente = {
  nombre: "Juan",
  edad: 25,
  altura: 1.75,
}




exports.dato = lista;
exports.persona = cliente;