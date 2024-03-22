function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var res = []
  for (n= 0; n < 11; n++){
    res.push(n*6)
  }
  return res

}

module.exports = tablaDelSeis;
