let car = {
  brand: "BMW",
  model: "X3",
  year: 2020,

  start: function () {
    return `    ${this.brand} ${this.model} started`;
  },
};
console.log(car.start());

Array.prototype.start = function () {
  return `${this[0]} started`;
};

let myArray = [1, 1, 2, 3];
console.log(myArray.start());

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    return `${this.make} is a car from ${this.year}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} ${this.model} is driving`;
  }
}

let vehicle = new Vehicle("Toyota", "Corolla", 2019);
console.log(vehicle.year);
console.log(vehicle.start());

class BankAcc {
  #balance = 100;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance(){
    return this.#balance;
  }
}

let acc = new BankAcc();
acc.deposit(100);
console.log(acc.getBalance());
// console.log(acc.#balance); // Error