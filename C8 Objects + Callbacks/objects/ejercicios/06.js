const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var res = []
  for (const prop in objeto){
    res.push(prop)
  }
  return res.length

};

module.exports = contarPropiedades;
