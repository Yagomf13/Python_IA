// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i<11);
console.log(myArray)


poner push shift unshift pop for while Math.random Math.floor hasOwnProperty parseInt(string, radix) && || ( a ? b : c)



function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}


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
}

console.log(lookUpProfile("Bob", "potato"));





function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" :  "zero";
}




function rangeOfNumbers(startNum, endNum) {
  if(startNum == endNum) {
    return [startNum];
  } else {
    const countArr = rangeOfNumbers(startNum + 1, endNum)
    countArr.unshift(startNum);
    return countArr;
  }
};




JAVASCRIPT
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed