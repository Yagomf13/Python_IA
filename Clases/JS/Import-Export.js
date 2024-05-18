// importa el archivo index.js como un modulo.
<script type="module" src="index.js"></script>

// metodo 1 para exportar una funcion.
export const add = (x, y) => {
    return x + y;
}

// metodo 2 para exportar una funcion.
const add = (x, y) => {
    return x + y;
}
export { add };

// metodo 3 para exportar varias funciones.
export { add, subtract };

// importa las funciones de string_functions.js.
import { uppercaseString, lowercaseString } from './string_functions.js';

// importa todas las funciones de string_functions.js.
// llama a la funcion add de string_functions.js.
import * as stringFunctions from "./string_functions.js";
stringFunctions.add(2, 3);

// metodo 2 para exportar una funcion default
// llama a la funcion add de math_functions.js. pero estava exportado en default
export default function add(x, y) {
    return x + y;
}
import add from "./math_functions.js";

// Ejemplos