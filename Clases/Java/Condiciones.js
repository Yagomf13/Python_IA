// && devuelve true si ambas condiciones se cumplen.
console.log(1 < 2 && 2 < 4);

// || devuelve true si una de las condiciones se cumple.
console.log(1 < 2 || 2 > 4);

// funcion que devuelve un string con la condicion que se cumple.
// devuelve un string con la condicion que se cumple.
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
console.log(findGreaterOrEqual(2, 3));


// Ejemplos

// Ejemplo 1

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
};