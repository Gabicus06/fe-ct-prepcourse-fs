function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var likesN = 0
  var posts = objetoUsuario.posts
  for (i = 0; i<posts.length; i++){
    likesN = likesN + posts[i].likes 
   }

   return likesN
  
}

module.exports = sumarLikesDeUsuario;
