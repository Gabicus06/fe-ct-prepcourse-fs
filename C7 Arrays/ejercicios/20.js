function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
 
  var igu = 0
  for (i=0; i<array.length-1; i++){
    if(array[i]===array[i+1]){
      igu++
    }
  }

  if (igu === array.length-1) return true
  else return false
}

module.exports = todosIguales;
