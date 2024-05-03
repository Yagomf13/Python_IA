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

// in comprueba si un objeto tiene una propiedad especificada.
var persona = {
  nombre: 'Yago',
  edad: 20,
  ciudad: 'Barcelona'
}
Yago in persona;

// Object.freeze() congela un objeto e impide que se modifiquen sus propiedades.
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome"
};
Object.freeze(obj);

//Object.keys() devuelve un array con todas las propiedades de un objeto.
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};
function getArrayOfUsers(obj) {
  return Object.keys(obj)
}

// this. se refiere a la instancia de la clase.
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

//añade una propiedad a un objeto que este hecho a partir de un constructor.
Bird.prototype.numLegs = 2;

// Mira si el candidato es una instancia de la clase Dog.
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false
  }
}

// constructor define cual es la clase a la que pertenece un objeto.
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Comprueba si un objeto es una instancia de una clase.
Dog.prototype.isPrototypeOf(beagle);

// Asigna un valor a diferentes objeos
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding");
  }
};








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

// Ejemplo 3

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let count = 0;
  for (let person in allUsers) {
    if (allUsers[person].online) {
      count++
    }
  }
  return count
}

console.log(countOnline(users));