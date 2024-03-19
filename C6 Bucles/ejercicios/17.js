function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  var pre = "This is "
  var res = null
  switch(color){
    case "blue":
      return pre+ "blue"
      break;
    case "red":
      return pre+  "red"
      break;
    case "green":
      return pre+  "green"
      break;
    case "orange":
      return pre+  "orange"
      break;
    default:
      return "Color not found"
  }
}

module.exports = colors;
