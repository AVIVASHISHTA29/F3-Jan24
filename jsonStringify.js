// let obj = {
//     name: "avi",
//     age: 22,
//     isAdult: true,
//     numbers: [99999, 11111, 22222],
//     email: "avi@gmail.com"
// };

let obj = [{ name: "avi" }, { name: "vivek" }, { name: "himanshi" }, { name: "ankita" }];

let myString = JSON.stringify(obj);

console.log(typeof (obj), obj);
console.log(typeof (myString), myString);

console.log(typeof (JSON.parse(myString)), JSON.parse(myString))




