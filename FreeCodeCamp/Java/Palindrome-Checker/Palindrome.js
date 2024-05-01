function palindrome(str) {
  let minuscula = str.toLowerCase();                                  // convierte la frase a minuscula

  let regex = /\s+|\W+|[_]/g;                                         // elimina los espacios y los caracteres especiales
  let resultado = minuscula.replace(regex, "");                       // sustituye los caracteres especiales por espacios

  let inverse_str = resultado.split('').reverse().join('');           // invierte la frase

  if (resultado === inverse_str) {                                    // compara la frase con su inversa
    return true;
  } else {
    return false;
  }
}


