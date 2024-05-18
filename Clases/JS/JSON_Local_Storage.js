const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const diaActual = new Date().getDay();
const diaDeLaSemana = diasDeLaSemana[diaActual];

console.log("Hoy es " + diaDeLaSemana, diaActual);

if (diaActual === 1 || diaActual === 3) {
  console.log("laboral");
} else {
  console.log("fin de semana");
}