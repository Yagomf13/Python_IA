const number = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

function convertToRoman(number) {
  let conversor = {
     1000 : "M",
     900 : "CM",
     500 : "D", 
     400 : "CD",
     100 : "C", 
     90 : "XC", 
     50 : "L", 
     40 : "XL",
     10 : "X",  
     9 : "IX", 
     5 : "V",  
     4 : "IV", 
     1 : "I",  
  };
  let falta = number;
  let resultado = [];
  let conversorOrdenado = Object.keys(conversor).sort(function(a, b){return b - a});    // Convertimos el objeto en un array y lo ordenamos de mayor a menor.
  
  while (falta != 0) {
      for (let numeroStr of conversorOrdenado) {
          let numero = parseInt(numeroStr);  // Convertimos el string en un numero.
          while (numero <= falta) {
              falta -= numero;
              resultado.push(conversor[numero]);
          } 
      }
  }
  return resultado.join('');
}

function posibilidades() {
    const valor = parseInt(number.value); 
    if (isNaN(valor)) {
        output.textContent = "Please enter a valid number";
        output.style.backgroundColor = '#FFCCCC'; 
        output.style.display = "block";
    } else {
        if (valor < 1) {
            output.textContent = "Please enter a number greater than or equal to 1";
            output.style.backgroundColor = '#FFCCCC'; 
            output.style.display = "block";
        } else if (valor >= 4000) {
            output.textContent = "Please enter a number less than or equal to 3999";
            output.style.backgroundColor = '#FFCCCC'; 
            output.style.display = "block";
        } else {
            output.textContent = convertToRoman(valor);
            output.style.backgroundColor = ''; 
            output.style.display = "block";
        }
    }
}
convertButton.addEventListener("click", posibilidades);