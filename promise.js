// const promise = new Promise((resolve, reject) => {
//     //mimic that promise takes some time
//     setTimeout(() => {
//         resolve({ name: "Avi" });
//     }, 2000)
// });
// console.log("initial", promise);


// promise.then((data) => {
//     console.log("my resolved data is", data);
// })


// const promise = new Promise((resolve, reject) => {
//     //mimic that promise takes some time
//     setTimeout(() => {
//         reject({ message: "Sorry Could not find data" });
//     }, 2000)
// });

// console.log("initial", promise);


// promise.then((data) => {
//     console.log("my resolved data is", data);
// }).catch((err) => {
//     console.log("my error is", err);
// })

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hiiii")
//         }, 1000);
//     })
// }


// myPromise().then((data) => {
//     console.log(data);
// })

// function fnc() {
//     return "Avi"
// }

// console.log(fnc().toLowerCase());




function myPromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise1 Resolved");
            // reject("Promise1 Rejected!");
        }, 1000);
    })
}


function myPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise2 Resolved");
            // reject("Promise2 Rejected!");
        }, 1500);
    })
}

function myPromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("Promise3 Resolved");
            reject("Promise3 Rejected!");
        }, 1000);
    })
}


// myPromise1().then((data1) => {
//     console.log(data1);
//     myPromise2().then((data2) => {
//         console.log(data2);
//         myPromise3().then((data3) => {
//             console.log(data3);
//         })
//     })
// })


//Promise Chaining

myPromise1().then((data1) => {
    console.log(data1);
    return myPromise2();
}).then((data2) => {
    console.log(data2);
    return myPromise3();
}).then((data3) => {
    console.log(data3);
}).catch((err) => {
    console.log(err);
})



