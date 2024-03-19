function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var res = 1
  for(let i=a; i<b+1; i++){
    if (i==0){
      return 0
      break
    }
    res = res * i
  }
  return res
}

module.exports = productoEntreNúmeros;