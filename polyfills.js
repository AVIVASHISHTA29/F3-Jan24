// To imitate old browsers - we are making these values null as if they dont exist
Array.prototype.forEach = null;
Array.prototype.filter = null;
Array.prototype.map = null;
Array.prototype.push = null;
////////////////////////////////////////////////////////////////


let arr = [-1, 2, -3, -6, 10, 12, 4, -9]


// if (!Array.prototype.forEach) {
//     console.log("For Each doesnt exist")
//     Array.prototype.forEach = function (callbackFnc) {
//         for (let i = 0; i < this.length; i++) {
//             callbackFnc(this[i], i, this)
//         }
//     }
// }

// arr.forEach((item, i, arr) => console.log(item, i, arr))

// function fnc(item) {
//     console.log("hi", item)
// }

// arr.forEach((item) => fnc(item))


// if (!Array.prototype.map) {
//     console.log("Map doesnt exist")

//     Array.prototype.map = function (callbackFnc) {
//         let myArr = [];
//         for (let i = 0; i < this.length; i++) {
//             let item = callbackFnc(this[i], i, this)
//             myArr.push(item);
//         }
//         return myArr;
//     }
// }



// console.log(arr.map()
// if (!Array.prototype.filter) {
//     console.log("Array filter doesnt exist");
//     Array.prototype.filter = function (callbackFnc) {
//         let arr = [];
//         for (let i = 0; i < this.length; i++) {
//             let flag = callbackFnc(this[i], i, this);
//             if (flag) arr.push(this[i])
//         }
//         return arr;
//     }
// }


//[-1, 2, -3, -6, 10, 12, 4, -9]

// console.log(arr.filter((item, i) => {
//     if (item < 0) {
//         return true;
//     }
// }))


if (!Array.prototype.push) {
    console.log("Array push doesnt exist");
    Array.prototype.push = function (item) {
        this[this.length] = item;
    }
}


arr.push(10);
console.log(arr);