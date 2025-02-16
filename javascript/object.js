const obj={//const or let can be used
    name: "abhay",
    lastname: null,
    age: 21,
    role: "software developer",
    loggedin: true,
}

var eg = typeof(obj);
console.log(typeof obj);//or typeof(obj)
obj.name="nigger";
obj.lastname="choder";
obj.role="thugshaker";
obj.thug="yesking";

console.log(obj.name, obj.lastname);
console.log(obj);

var nig1 = Symbol("SEXBOT");
var nig2 = Symbol("SEXBOT");

nig1 = 21;
nig2 = 22;

var greet = `hello, ${obj.name}`;
console.log(greet);

console.log(nig1 == nig2)
