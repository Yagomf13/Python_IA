/* JAVASCRIPT
\'	single quote           \"	double quote                \\	backslash                 \n	newline               
\t	tab                    \r	carriage return             \b	backspace                 \f	form feed */

let array = [];               // declaramos un array vacio.

for (let i = 0; i < 5; i++) { // for crea un bucle que esta definido por la variable i que va de 0 a 5 y no para hasta que se cumple esa condicion.
  array.push(i);              // push añade un elemento al final del array.
}

let array2 = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < 5; i++) { 
  array2.pop(i);               // pop borra el ultimo elemento del array.
}

let array3 = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < 5; i++) {
  array3.shift(i);            // shift borra el primer elemento del array.
}

let array4 = [];
for (let i = 0; i < 5; i++) { 
  array4.unshift(i);           // unshift añade un elemento al principio del array.
}

while (array.length > 2) {     // while crea un bucle que esta definido por la variable i que va de 0
  array.pop();                 //borra elecemntos hasta que se cumpla esa condicion, que el while de se detiene
}

Math.random();                  // genera un numero aleatorio entre 0 y 1.

Math.floor(Math.random() * 10); // genera un numero aleatorio entre 0 y 10 y este se redondea con el math floor

var persona = {
  nombre: 'Yago',
  edad: 20,
  ciudad: 'Barcelona'
}; if (persona.hasOwnProperty('nombre')) {    // hasOwnProperty comprueba si un objeto tiene una propiedad especificada.
  console.log('El objeto persona tiene la propiedad "nombre"');
} else {
  console.log('El objeto persona no tiene la propiedad "nombre"');
}

var num = "42";
console.log(parseInt(num));                 // parseInt convierte un string en un numero.

var numeroBinario = "101010";
console.log(parseInt(numeroBinario, 2));   // parseInt convierte un numero binario en un numero decimal.

console.log(1<2 && 2<4);                   // && devuelve true si ambas condiciones se cumplen.

console.log(1<2 || 2>4);                   // || devuelve true si una de las condiciones se cumple.

function findGreaterOrEqual(a, b) {        // funcion que devuelve un string con la condicion que se cumple.
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";   // devuelve un string con la condicion que se cumple.
}
console.log(findGreaterOrEqual(2, 3));

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);                        // Object.freeze() congela un objeto e impide que se modifiquen sus propiedades.

const myFunc = () => {                     // forma de declarar una funcion. Si no le quieres poner nombre a la funcion, se le pone una funcion anonima.
  const myVar = "value";
  return myVar;
}

const increment = (number, value = 1) => number + value;  //si el value no se declara se le pasa un valor por defecto

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);          //dice el valor maximo de un array.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];                               // copia el array arr1 en arr2.










// Ejempos de uso

// Ejemplo 1

// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i<11);
console.log(myArray);

// Ejemplo 2

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
};

// Ejemplo 3

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  console.log(name)
  var profile = [];
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      profile.push(contacts[i]);
    }
  }
if (profile.length == 0 ) {
      return "No such contact"
}

  if (profile[0].hasOwnProperty(prop)) {
    return profile[0][prop]
  } else {
    return "No such property"
  }
  // Only change code above this line
};

// Ejemplo 4

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" :  "zero";
};

// Ejemplo 5

function rangeOfNumbers(startNum, endNum) {
  if(startNum == endNum) {
    return [startNum];
  } else {
    const countArr = rangeOfNumbers(startNum + 1, endNum)
    countArr.unshift(startNum);
    return countArr;
  }
};

// Ejemplo 6
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

// Ejemplo 7
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;

// Ejemplo 8
function removeFirstTwo(list) {                         // elimina los primeros 2 elementos de un array y devuelve el resto.
  const [a,b,...shorterlist] = list          
  return shorterlist;
}

// Ejemplo 9
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0;        // selecciona los valores max y min del objeto stats y los divide entre 2.

// Ejemplo 10
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {                              // devuelve un array con los valores de un objeto.
  // Only change code below this line
  const failureItems = [];
  for ( let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let str = `<li class="text-warning">${arr[i]}</li>`;
    failureItems.push(str)
  // Only change code above this line
  }
  return failureItems;
}