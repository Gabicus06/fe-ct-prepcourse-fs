function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var MAY = array.map(e =>{
    return e.toUpperCase()
  } )
  return MAY
}

module.exports = convertirStringAMayusculas;
