function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var sum = 0
  resultadosTest.forEach(element => {
    sum = sum + element
  });
  return sum/resultadosTest.length
}

module.exports = promedioResultadosTest;
