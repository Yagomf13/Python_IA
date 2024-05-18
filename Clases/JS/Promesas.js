// crea una promesa.
const makeServerRequest = new Promise((resolve, reject) => { });

// si se cumple la condicion se resuelve la promesa.
// si no se cumple la condicion se rechaza la promesa.
const myPromise = new Promise((resolve, reject) => {
    if (condition here) {
        resolve("Promise was fulfilled");                                               
  } else {
    reject("Promise was rejected");
}
});

// Ejemplos

// Ejemplo 1
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest.then(result => {
    console.log(result);
});
makeServerRequest.catch(error => {
    console.log(error);
});

