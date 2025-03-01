// Task 1:

// Write a function stringToNumber that takes a string input and tries to convert 
// it to a number. If the conversion fails, return "Not a number".

function stringToNumber(input) {
  var num = Number(input);
  if (typeof(input) !== "number") {
    return "Not a number";
  } else {
    return "I'm a number!";
  }
}

var p = stringToNumber("21");
console.log(p);
