let arr1 = [1, 2, 3];
// console.log(arr);
// let arr1 = new Array(1, 2, 3);

// Array.prototype.getSum = function () {
//     let sum = 0;
//     this.forEach((item, i) => {
//         sum += item
//     })
//     return sum;
// }

// let arr2 = [4, 5, 6, 7, 8, 9, 10];


// console.log(arr2.getSum());

// let name = "AVi";

// String.prototype.getFullName = function () {
//     return `My Name is ${this}`
// }


// let arr3 = [10, 10, 329823, 1298, 209283, 1029812, 1288713];
// console.log(arr3.map2())

// Array.prototype.map = function () {
//     let newArr = this.filter((item) => item % 2 == 0);
//     return newArr
// }
// console.log(arr1);
// console.log(arr1.map());

// console.log(arr.getSum());

// console.log(arr2.getSum());

// let obj = new Object();
// obj.name = "Avi";
// obj.email = "avi@gmail.com";

// Object.prototype.getNameAndEmail = function () {
//     return `My Name is ${this.name} and Email is ${this.email}`
// }

// console.log(obj);

// Object.prototype.abc = function () {
//     return "abc"
// }


let values = {
    a: 10,
    b: 20,
    c: 30
}


let functionsObj = {
    getName: function () {
        return `My Name is ${this.name}`;
    },
    getEmail: function () {
        return `My Email is ${this.email}`;
    },
    getAll: function () {
        return this.getName() + " " + this.getEmail();
    },
    toString: function () {
        return JSON.stringify(this);
    },
    __proto__: values
}



let obj1 = {
    name: "avi",
    email: "avi@gmail.com",
    __proto__: functionsObj
}

let obj2 = {
    name: "salman",
    email: "salman@gmail.com",
    __proto__: functionsObj
}

let obj3 = {
    name: "aniket",
    email: "aniket@gmail.com",
    __proto__: functionsObj
}

// console.log(obj1)


let grandfather = {
    house: "Grand father house"
}


let myFather = {
    car: "suzuki",
    house: "father new house",
    __proto__: grandfather
}


let me = {
    name: "myself",
    __proto__: myFather,
    // house: myFather.__proto__.house,
}


// console.log(grandfather.house);
// console.log(myFather.house);
console.log(me);

console.log([1, 2, 3]);


function myFunc() {
    console.log("HI")
}

console.log(myFunc.prototype);