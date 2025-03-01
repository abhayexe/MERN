arr7 = ["super", "wow", "aloha", "damnthatsinsane"];
for (i of arr7) {
  if (i.length > 10) {
    console.log(i);
  } else {
    console.log("ignore");
  }
}

function createtea() {
  return function (type) {
    return `Making ${type}`;
  };
}

let teamake = createtea("Green");
let result = teamake("green tea");
console.log(teamake);
