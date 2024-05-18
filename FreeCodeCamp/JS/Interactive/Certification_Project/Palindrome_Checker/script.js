const texto = document.getElementById("text-input");
const boton = document.getElementById("check-btn");
const resultado = document.getElementById("result");

function palindrome(texto) {
    let minuscula = texto.toLowerCase();                                  // convierte la frase a minuscula
  
    let regex = /\s+|\W+|[_]/g;                                         // elimina los espacios y los caracteres especiales
    let resultado = minuscula.replace(regex, "");                       // sustituye los caracteres especiales por espacios
  
    let inverse_str = resultado.split('').reverse().join('');           // invierte la frase
  
    if (resultado === inverse_str) {                                    // compara la frase con su inversa
      return true;
    } else {
      return false;
    }
  }
  
function añadirResultado () {
    const textoValor = texto.value;
    if (textoValor === "") {
        alert("Please input a value");
    } else if (palindrome(textoValor)) {
        resultado.textContent = `${textoValor} is a palindrome`;
    } else {
        resultado.textContent = `${textoValor} is not a palindrome`;
    }
}
boton.addEventListener("click", añadirResultado);
  
