const input = document.getElementById("user-input");
const boton = document.getElementById("check-btn");
const limpiar = document.getElementById("clear-btn");
const display = document.getElementById("results-div");

const telephoneCheck = str => {
  //declaramos una función regex que no verifica si es un número valido
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/; 
  
  // vemos si cumple el regex y devuelve un boolean
  return regex.test(str);
}

const check = () => {
  if (event) {
    event.preventDefault();                                             // Hace que no recargue la página
  }

  if (input.value === "") {                                             //si en input es nulo enviamos esto
    alert("Please provide a phone number");
    input.value = "";
  } else if (!telephoneCheck(input.value)) {                            //si en input es nulo enviamos esto
    display.innerText += `Invalid US number: ${input.value}\n`;
    input.value = "";
  } else {                                                              //si en input es nulo enviamos esto
    display.innerText += `Valid US number: ${input.value}\n`;
    input.value = "";
  }
}
// añadimos un funcionamiento al boton para que ejecute check()
boton.addEventListener("click", check);                                 

// añadimos un funcionamiento al boton para que ejecute check() al presionar enter
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    check(e);
  }
});

// añadimos un funcionamiento al boton para que limpie el input
limpiar.addEventListener("click", () => {
  display.innerText = "";
});


//! Forma larga regex
// function telephoneCheck(str) {
//     let myRegex1= /\s+|\W+|[_]/g;
//     let telefono = str.replace(myRegex1, "");
//     if (telefono.length == 10 || (telefono.length == 11) && (telefono[0] == 1)) {
//         return true;
//     }  else {
//         return false;
//     }
//   }
  