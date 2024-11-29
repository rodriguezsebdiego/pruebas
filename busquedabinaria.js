var listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

function busquedaBinaria(numeros, busqueda){
  var desde = 0;
  var hasta = numeros.length - 1;
  console.log("esta es la ultima posicion " + hasta);

  while(desde <= hasta) {
    var laMitad = Math.floor((desde + hasta) / 2);
    console.log("esta es la mitad " + laMitad);
    var numeroDelMedio = numeros[laMitad];
    if(numeroDelMedio == busqueda){
      return laMitad;
    }
    if(numeroDelMedio > busqueda){
      hasta = laMitad - 1;
    } else {
      desde = laMitad + 1;
    }
  }
  return -1;
}

const donde = busquedaBinaria(listaDeNumeros, 987);

console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);