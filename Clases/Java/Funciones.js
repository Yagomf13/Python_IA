// forma de declarar una funcion. Si no le quieres poner nombre a la funcion, se le pone una funcion anonima.
const myFunc = () => {
    const myVar = "value";
    return myVar;
}

//si el value no se declara se le pasa un valor por defecto
const increment = (number, value = 1) => number + value;

// Ejemplos

// Ejemplo 1

function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [startNum];
    } else {
        const countArr = rangeOfNumbers(startNum + 1, endNum)
        countArr.unshift(startNum);
        return countArr;
    }
};

// Ejemplo 2

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

// Ejemplo 3
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;

// Ejemplo 4
function removeFirstTwo(list) {                         // elimina los primeros 2 elementos de un array y devuelve el resto.
    const [a, b, ...shorterlist] = list
    return shorterlist;
}

// Ejemplo 5
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;        // selecciona los valores max y min del objeto stats y los divide entre 2.

// Ejemplo 6
const person = {
    name: "Taylor",
    sayHello() {                                        // es una funcion
        return `Hello! My name is ${this.name}.`;
    }
};

// Ejemplo 7
class SpaceShuttle {
    constructor(targetPlanet) {                       // constructor de la clase SpaceShuttle
        this.targetPlanet = targetPlanet;
    }
    takeOff() {
        console.log("To " + this.targetPlanet + "!");
    }
}

// Ejemplo 8
class Thermostat {
    constructor(temperatura) {
        this._temperatura = temperatura;
    }
    get temperature() {                               // get y set son metodos de la clase Thermostat.
        return 5 / 9 * (this._temperatura - 32);
    }
    set temperature(updatedTemperature) {
        this._temperatura = updatedTemperature * 9.0 / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius