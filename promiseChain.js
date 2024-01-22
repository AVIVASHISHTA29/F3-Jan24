// //converting callback hell into promise chain

function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, welcome to restaurant!");
        }, 1000)
    })
}

function giveMenu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Here is the Menu, please order food...");
        }, 500);
    })
}

function askOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("What is your order?")
        }, 2000);
    })

}

function giveFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Here is your food...")
        }, 2500);
    })

}

function billing() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Here is your bill...")
        }, 1000);
    })

}

function bye() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Thanks for visiting!")
        }, 500);
    })

}

// greet().then((data1) => {
//     console.log(data1);
//     return giveMenu();
// }).then((data2) => {
//     console.log(data2);
//     return askOrder();
// }).then((data3) => {
//     console.log(data3);
//     return giveFood();
// }).then((data4) => {
//     console.log(data4);
//     return billing();
// }).then((data5) => {
//     console.log(data5);
//     return bye();
// }).then((data6) => {
//     console.log(data6)
// });

// async function myFnc() {

//     const data1 = await greet();
//     const data2 = await giveMenu();
//     const data3 = await askOrder();
//     const data4 = await giveFood();
//     const data5 = await billing();
//     const data6 = await bye();
// }

// myFnc();



//OTHER VERSION ------

//converting callback hell into promise chain

// function greet() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hello, welcome to restaurant!");
//             const data = {
//                 step1: true
//             }
//             resolve(data);
//         }, 1000)
//     })
// }

// function giveMenu(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Here is the Menu, please order food...");
//             data = { ...data, step2: true };
//             resolve(data);
//         }, 500);
//     })
// }

// function askOrder(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("What is your order?")
//             data = { ...data, step3: true };
//             resolve(data);
//         }, 2000);
//     })

// }

// function giveFood(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Here is your food...")
//             data = { ...data, step4: true }
//             resolve(data);
//         }, 2500);
//     })

// }

// function billing(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Here is your bill...")
//             data = { ...data, step5: true }
//             resolve(data);
//         }, 1000);
//     })

// }

// function bye(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Thanks for visiting!")
//             data = { ...data, step6: true }
//             resolve(data);
//         }, 500);
//     })

// }

// greet().then((data1) => {
//     return giveMenu(data1);
// }).then((data2) => {
//     return askOrder(data2);
// }).then((data3) => {
//     return giveFood(data3);
// }).then((data4) => {
//     return billing(data4);
// }).then((data5) => {
//     return bye(data5);
// }).then((data6) => {
//     console.log("Final Data", data6)
// });





// Example 3:

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 ...")
            let data = { step1: "Boil Water - Done" };
            resolve(data);
        }, 1000);
    })
}

function step2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 ...")
            data = { ...data, step2: "Put Maggi - Done" };
            resolve(data);
            // reject("Rejected!")
        }, 2000);
    })
}


function step3(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3 ...")
            data = { ...data, step3: "Cooking - Done" };
            resolve(data);
        }, 1500);
    })
}



// step1()
//     .then((data1) => step2(data1))
//     .then((data2) => step3(data2))
//     .then((data3) => console.log(data3))
// .catch ((err) => console.log(err));


// async function handlePromises() {
//     try {
//         let data1 = await step1();
//         let data2 = await step2(data1);
//         let data3 = await step3(data2);
//         console.log(data3);
//     } catch (err) {
//         console.log(err)
//     }
// }


// handlePromises();



// const fnc = () => {
//     return "Avi"
// }
// const fnc2 = () => "Avi"
