function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var mult = array.map((e, index) =>{
    return e*index
  })
  return mult
}

module.exports = multiplicarElementosPorIndice;
