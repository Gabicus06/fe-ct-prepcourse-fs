function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  var resp = null
  if (valor == null) {
    resp = true
  }else{
    resp = false
  }
  return resp

}

module.exports = esNuloOIndefinido;