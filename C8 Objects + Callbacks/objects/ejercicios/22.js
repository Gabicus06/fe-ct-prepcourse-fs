function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   var res = true
   str1 = str1.toLowerCase()
   str2 = str2.toLowerCase()
   if(str1.length != str2.length){
      return false
   }
   for (i=0; i< str1.length; i++){
      if (!str2.includes(str1[i])){
         res = false
         break
      
      }
   }
   return res
}

module.exports = esAnagrama;
