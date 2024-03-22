function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var par = 0
  numeros.forEach(element => {
    if(element%2==0){
      par++
    }
  });
  return par
}

module.exports = contarParesConContinue;
