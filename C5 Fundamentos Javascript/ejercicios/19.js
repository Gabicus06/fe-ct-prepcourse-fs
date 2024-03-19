function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  var pos = "Es positivo"
  var neg = "Es negativo"
  if(num === 0){
    return false
  }else if(num > 0){
    return pos  
  }else{
    return neg
  }
}

module.exports = esPositivo;