function convertToRoman(num) {
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
    let falta = num;
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

   
console.log(convertToRoman(29));