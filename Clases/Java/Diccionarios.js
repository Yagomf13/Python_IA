// hasOwnProperty comprueba si un objeto tiene una propiedad especificada.
var persona = {
    nombre: 'Yago',
    edad: 20,
    ciudad: 'Barcelona'
}; if (persona.hasOwnProperty('nombre')) {
    console.log('El objeto persona tiene la propiedad "nombre"');
} else {
    console.log('El objeto persona no tiene la propiedad "nombre"');
}

// Object.freeze() congela un objeto e impide que se modifiquen sus propiedades.
let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);


// Ejemplos

// Ejemplo 1

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
    if (profile.length == 0) {
        return "No such contact"
    }

    if (profile[0].hasOwnProperty(prop)) {
        return profile[0][prop]
    } else {
        return "No such property"
    }
    // Only change code above this line
};

// Ejemplo 2

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {                              // devuelve un array con los valores de un objeto.
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        let str = `<li class="text-warning">${arr[i]}</li>`;
        failureItems.push(str)
        // Only change code above this line
    }
    return failureItems;
}