//static keyword -> It allows you to use certain static functions (methods) or properties without making an obj of that class


class UtilityFunctions {
    constructor() { }

    static sum(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }

}


let obj = new UtilityFunctions();
obj.sum();

console.log(UtilityFunctions.sum(10, 20))
console.log(UtilityFunctions.a)


class Engine {
    start() {
        console.log("Engine started");
    }

    stop() {
        console.log("Engine stopped");
    }
}

class Car {
    constructor(engine) {
        this.engine = engine;
    }

    start() {
        console.log("AC Started")
    }
}

let carEngine = new Engine();
let car = new Car(carEngine);
console.log("car", car);

car.start();
car.engine.start(); // Engine started
car.engine.stop(); // Engine stopped




class Engine2 {
    start() {
        console.log("Engine 2 started");
    }

    stop() {
        console.log("Engine 2 stopped");
    }
}


class Car2 extends Engine2 {
    constructor() {
        super();
    }

    start() {
        console.log("AC started")
    }
}


let car2 = new Car2();
console.log("car2", car2)
car2.start();
car2.stop();


//child.house


