var arr = ["abhay", 21, "software developer", true];
console.log(arr[0]);

console.log(true + false + 1 + 1 + "1"); //31 implecit convertion

var val = "a";
console.log(typeof Number(val));


console.log(typeof arr[0])
console.log(typeof arr[1])


var arr2 = ["buggati", "lamborgini", "ferrari", "audi"];
//or
var arr2 = new Array("buggati", "lamborgini", "ferrari", "audi");
console.log(arr2[0]);

arr2[arr2.length] = "bmw";
arr2.push("mercedes");
var arr3 = arr2;
var popped = arr2.pop();
console.log(arr2[4]);//undefined
console.log("popped element: " + popped);

console.log(arr2, arr3);

var arr4=arr2.concat(arr3);
console.log(arr4);
let shif = arr4.shift();
arr4.unshift("toyota", "honda");
console.log(shif);
console.log(arr4);

let arr5 = arr4.slice(1, 4);
console.log("arr5: "+arr5);

let includes = arr4.includes("bmw");//boolean
console.log(includes+typeof includes);