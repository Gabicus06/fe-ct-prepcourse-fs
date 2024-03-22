function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var find = []
  
  array.forEach(element => {
    if (element == 'Enero') find.push(element)
    if (element == 'Marzo')find.push(element)
    if (element == 'Noviembre')find.push(element)
  })
  if (find.length == 3) return find
  else return 'No se encontraron los meses pedidos'
  
}

module.exports = mesesDelAño;
