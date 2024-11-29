const crearArrayAleatorio = (cantidad) => {
    const array = [];
    
    for (let i = 0; i < cantidad; i++) {
      // Genera un número aleatorio entre 0 y 100
      const numeroAleatorio = Math.floor(Math.random() * 100); 
      array.push(numeroAleatorio);
    }
    
    return array;
  };
  
  // Crear un array de 40 números aleatorios
  const arrayAleatorio = crearArrayAleatorio(40);
  console.log(arrayAleatorio);

//   function ordenarNumero(arrayAleatorio){
//     const ordenado = [];
//     for (let index = 0; index < arrayAleatorio.length; index++) {
//         const element = arrayAleatorio[index];
//         if (element  < arrayAleatorio[index + 1]) {
//             ordenado.push(element);
            
//         }
//         console.log("array " + ordenado);
        
//     }
//   }
  
  

  function ordenarNumero(arrayAleatorio) {
    const n = arrayAleatorio.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Comparar elementos adyacentes
            if (arrayAleatorio[j] > arrayAleatorio[j + 1]) {
                // Intercambiar si están en el orden incorrecto
                const temp = arrayAleatorio[j];
                arrayAleatorio[j] = arrayAleatorio[j + 1]; 
                arrayAleatorio[j + 1] = temp;
            }
        }
    }
    return arrayAleatorio; // Retornar el array ordenado
}

// Creá tu array de 40 números aleatorios

console.log("Array original:", arrayAleatorio);
console.log("Array ordenado:", ordenarNumero(arrayAleatorio));
