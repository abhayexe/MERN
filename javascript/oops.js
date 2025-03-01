let car = {
  brand: "BMW",
  model: "X3",
  year: 2020,

  start: function () {
    return `    ${this.brand} ${this.model} started`;
  },
};
console.log(car.start());
// What is the output?