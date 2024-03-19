function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  var div3 = "fizz"
  var div5 = "buzz"
  var res = null
  if (num%3 == 0 && num%5 == 0) res = div3+div5
  else if (num%3 == 0) res = div3
  else if (num%5 == 0) res = div5
  else res = false

  return res

}

module.exports = fizzBuzz;
