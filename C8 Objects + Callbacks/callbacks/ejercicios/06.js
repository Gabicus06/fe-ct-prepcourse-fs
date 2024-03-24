function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var nuevoArray = []
  array.forEach(element => {
    var res = cb(element)
    nuevoArray.push(res)
  });
  return nuevoArray
}

module.exports = map;
