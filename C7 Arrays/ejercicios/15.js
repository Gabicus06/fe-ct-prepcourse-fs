function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var a = array[0]
  var b = 0

  for (i=0; i<array.length; i++){
    if(array[i] > a){
      a = array[i]
      b = i
    }
  }
  return b
}

module.exports = encontrarIndiceMayor;
