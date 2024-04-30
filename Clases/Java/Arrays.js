// declaramos un array vacio.
let array = [];

// for crea un bucle que esta definido por la variable i que va de 0 a 5 y no para hasta que se cumple esa condicion.
// push añade un elemento al final del array.
for (let i = 0; i < 5; i++) {
    array.push(i);
}

// pop borra el ultimo elemento del array.
let array2 = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < 5; i++) {
    array2.pop(i);
}

// shift borra el primer elemento del array.
let array3 = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < 5; i++) {
    array3.shift(i);
}

// unshift añade un elemento al principio del array.
let array4 = [];
for (let i = 0; i < 5; i++) {
    array4.unshift(i);
}

// while crea un bucle que esta definido por la variable i que va de 0
//borra elecemntos hasta que se cumpla esa condicion, que el while de se detiene
while (array.length > 2) {
    array.pop();
}

//dice el valor maximo de un array.
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

// copia el array arr1 en arr2.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];


// Ejemplos

// Ejemplo 1
const myArray = [];
let i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 11);
console.log(myArray);

// Ejemplo 2

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
};