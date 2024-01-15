// class Animal {
//     constructor(myLegs, myTail) {
//         this.legs = myLegs;
//         this.tail = myTail;
//     }
//     speaks() {
//         console.log("Makes noise")
//     }
//     eats() {
//         console.log("Healthy food")
//     }
// }


// class Dog extends Animal {
//     constructor(breed, name, color, legs, tail) {
//         super(legs, tail);
//         this.breed = breed;
//         this.name = name;
//         this.color = color;
//     }

//     eats() {
//         console.log("Pedigree", super.eats())
//     }
// }

// const myDog = new Dog("german", "tommy", "brown", 4, true);
// console.log(myDog.eats())



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speaks() {
        console.log("Speaks mother tongue");
    }
}

class Student extends Person {
    constructor(name, age, email, module) {
        super(name, age);
        this.email = email;
        this.module = module;
    }
}

class Instructor extends Person {
    constructor(name, age, email, modules) {
        super(name, age);
        this.email = email;
        this.modules = modules;
    }

    speaks() {
        console.log("English only")
    }
}


let student = new Student("Yuvraj", 22, "yuvraj@gmail.com", "F3");
console.log(student);

let teacher = new Instructor("Avi", 22, "abi@gmail.com", ["F3", "F4 "])
console.log(teacher)


class Something {
    #property;

    constructor() {
        this.#property = "test";
    }

    #privateMethod() {
        return 'hello world';
    }

    //data leak
    getPrivateMessage() {
        console.log(this.#privateMethod())
        return this.#property;
    }
}




class Child extends Something {
    constructor() {
        super();
        this.property2 = "test2"
    }
}

const instance = new Child();
console.log("instance", instance);

console.log(instance.property); //=> undefined
// console.log(instance.#property); //=> Syntax error
console.log(instance.privateMethod); //=> undefined



console.log(instance.getPrivateMessage()); //=> test


//Abstraction - simplicity
//Inheritance - code cleanliness, zero code duplication
//Encapsulation - wrapping a lot of information inside one big container
//Poly(many)morphism(forms) - one class and so many different objects



