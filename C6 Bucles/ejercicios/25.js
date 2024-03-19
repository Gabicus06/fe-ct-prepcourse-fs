function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   var n = string.length
   var m = n/2
   for (i=0; i<m+1; i++){
      if (string.charAt(i) !== string.charAt(n-1-i)){
         return false
         break
      }else{ return true}
   }
}

module.exports = esPalindromo;
