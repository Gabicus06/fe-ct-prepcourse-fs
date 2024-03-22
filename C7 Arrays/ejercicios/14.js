function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var i = 0
  array.forEach(element => {
    if (element > 10) i++
  });

  return i
}

module.exports = contarElementosMayoresA10;
