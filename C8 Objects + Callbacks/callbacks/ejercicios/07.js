function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var res = arrayOfStrings.filter((a)=> a[0] == 'a')
   return res
}

module.exports = filter;
