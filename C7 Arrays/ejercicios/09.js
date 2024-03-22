function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var max = array.length
   return array[Math.floor(Math.random() * max)]
}


module.exports = obtenerElementoAleatorio;
