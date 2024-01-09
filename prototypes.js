// let arr = [1, 2, 3];
// console.log(arr);
let arr = new Array(1, 2, 3);

Array.prototype.getSum = function () {
    let sum = 0;
    this.forEach((item, i) => {
        sum += item
    })
    return sum;
}

let arr2 = [4, 5, 6, 7, 8, 9, 10]

console.log(arr.getSum());

console.log(arr2.getSum());

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
    }
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

console.log(obj1)
