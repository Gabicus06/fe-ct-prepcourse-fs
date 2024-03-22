function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  var a = []
  var b 
  for (i=0; i<numeros.length; i++){
    if (a.includes(numeros[i])){
      b = numeros[i]
    }
    a.push(numeros[i])
    
  }
  return b
}

module.exports = encontrarElementoRepetido;