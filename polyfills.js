Array.prototype.forEach = null;

if (!Array.prototype.forEach) {
    console.log("For Each doesnt exist")

    Array.prototype.forEach = function (callbackFnc) {
        for (let i = 0; i < this.length; i++) {
            callbackFnc(this[i], i, this)
        }
    }
}


Array.prototype.map = null;

if (!Array.prototype.map) {
    console.log("Map doesnt exist")

    Array.prototype.map = function (callbackFnc) {
        let myArr = [];
        for (let i = 0; i < this.length; i++) {
            let item = callbackFnc(this[i], i, this)
            if (item) {
                if (typeof item == "boolean")
                    myArr.push(this[i]);
                else {
                    myArr.push(item);
                }

            }
        }
        return myArr;
    }
}


let arr = [1, 2, 3];


// function forEachFnc(item) {
//     console.log(item)
// }

// arr.forEach(forEachFnc);
arr.forEach((item, i, arr) => console.log(item, i, arr))



console.log(arr.map((item) => item % 2 == 0 ? 1 : 0))