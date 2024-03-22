function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var doble = array.map(element => {
    return element*2
  });
  return doble
}



module.exports = duplicarElementos;
