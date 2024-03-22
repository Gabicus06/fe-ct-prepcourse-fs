function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var arre = ''
  palabras.forEach((element, i) => {
    if (i==0){
      arre = arre + element
    }else{
      arre = arre + ' ' + element
    }
  });
  return arre
}

module.exports = dePalabrasAFrase;
