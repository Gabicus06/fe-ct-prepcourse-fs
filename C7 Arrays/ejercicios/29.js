function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números. 3,4,5 // 3, 5,6
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var a = null
  for (i=0; i<numeros.length; i++){
    if(numeros[i] != numeros[0]+i){
      a = numeros[0]+i
    }
  }
  return a
}

module.exports = encontrarNumeroFaltante;