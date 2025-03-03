class Bird{
    fly(){
        return `I can fly`;
    }
}
class Penguin extends Bird{
    fly(){
        return `I can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());