//sum upto 5 using while loop
var i = 1;
var sum = 0;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

var arr1 = [];
var arr = [2, 4, 9];
for (var i = 0; i < arr.length; i++) {
  arr[i] *= 2;
  arr1.push(arr[i]);

  //arr1.push(arr[i]*2);
}
console.log(arr1);

var copy = [];
var ciries = ["delhi", "mumbai", "kolkata", "chennai"];

for (var i = 0; i < ciries.length; i++) {
  copy.push(ciries[i]);
}

var arr4 = ["monish", "thug", "nigga", "pp"];
var arr5 = [];
for (var i = 0; i < arr4.length; i++) {
  if (arr4[i] == "nigga") {
    console.log("nigga has been detected");
    // break;
  } else {
    arr5.push(arr4[i]);
  }
}
console.log(arr5);

let color = ["gray", "orange", "red", "brown", "white", "poopjit"];
let availablecolor = [];

color.forEach(function (collor) {
  //...forEach((collor)=>{})
  if (collor.length === 7) {
    console.log(color[collor] + " has 7 lentgh");
  }
  //   availablecolor.push(collor);
});
// console.log(availablecolor);

