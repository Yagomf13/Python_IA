function telephoneCheck(str) {
    // Regular expression pattern to match valid US phone numbers
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$/;
  
    // Test the string against the regular expression
    return regex.test(str);
  }
console.log(telephoneCheck(" 1+555-55(5-5555"));


// function telephoneCheck(str) {
//     let myRegex1= /\s+|\W+|[_]/g;
//     let telefono = str.replace(myRegex1, "");
//     if (telefono.length == 10 || (telefono.length == 11) && (telefono[0] == 1)) {
//         return true;
//     }  else {
//         return false;
//     }
//   }
  