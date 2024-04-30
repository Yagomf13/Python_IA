// regex te busca si en el string hay las palabras dog, cat, bird o fish.
// i es para que no importe mayusculas y minusculas.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/i; 
let result = petRegex.test(petString);

// g es para que busque todas las coincidencias.
let petString = "James has a pet cat cat cat.";
let petRegex = /cat/g; 
let result = petRegex.test(petString);

// . es para buscar cualquier caracter que coincida.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);

// [ ] es para buscar cualquier caracter dentro de los corchetes.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 

// [a-z] es para buscar cualquier caracter dentro de los corchetes.
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; 
let result = quoteSample.match(myRegex); 

// [^ ] es para buscar cualquier caracter que no este dentro de los corchetes.
let quoteSample = "3 blind mice.";
let myRegex = /[^a,e,i,o,u0-9]/gi;
let result = quoteSample.match(myRegex); 

// + es para buscar cualquier caracter que se repita una o mas veces.
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);

// $ es para buscar cualquier caracter que se repita una o mas veces al final de la cadena.
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose);

// \w es para buscar cualquier caracter alfanumerico, es equivalente a [a-zA-Z0-9_].
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length;

// \W es para buscar cualquier caracter que no sea alfanumerico, es equivalente a [^a-zA-Z0-9_].
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

// \d es para buscar cualquier caracter numerico, es equivalente a [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;

// \D es para buscar cualquier caracter que no sea numerico, es equivalente a [0-9]
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;

// \s es para buscar cualquier espacio en blanco, es equivalente a [ \r\t\n\f].
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

// \S es para buscar cualquier caracter que no sea espacio en blanco, es equivalente a [^ \r\t\n\f].
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

// {n} es para buscar cualquier caracter que se repita n veces.
// {n,} es para buscar cualquier caracter que se repita n o mas veces
// {n,m} es para buscar cualquier caracter que se repita entre n y
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Cambia esta línea
let result = ohRegex.test(ohStr);

// ? es para buscar palabras que contengan o no el caracter que le sigue.
let favWord = "favorite";
let favRegex = /favou?rite/; // Cambia esta línea
let result = favRegex.test(favWord);

// replace reemplaza las coincidencias del regex por $3 $2 $1 que son las palabras al reves
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Cambia esta línea
let replaceText = "$3 $2 $1"; // Cambia esta línea
let result = str.replace(fixRegex, replaceText);




// Ejemplo

let hello = "   Hello, World!  ";
let wsRegex = /^\s*(.*\S)\s*$/; // Cambia esta línea
let result = hello.replace(wsRegex, "$1"); // Cambia esta línea
