function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var cuadrado = numero/2
  while (cuadrado != 1 ){
    if (!Number.isInteger(cuadrado)){
      return false
      break
    }
    cuadrado = cuadrado/2
  }
  return true
}

module.exports = esPotenciaDeDos;
