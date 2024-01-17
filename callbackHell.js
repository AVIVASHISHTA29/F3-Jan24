// // function greet(callbackFnc) {
// //     console.log("Hello, welcome to restaurant!");
// //     callbackFnc(askOrder);
// // }

// // function giveMenu(callbackFnc) {
// //     console.log("Here is the Menu, please order food...");
// //     callbackFnc(giveFood);
// // }

// // function askOrder(callbackFnc) {
// //     console.log("What is your order?")
// //     callbackFnc(billing);
// // }

// // function giveFood(callbackFnc) {
// //     console.log("Here is your food...")
// //     callbackFnc(bye);
// // }

// // function billing(callbackFnc) {
// //     console.log("Here is your bill...")
// //     callbackFnc();
// // }

// // function bye() {
// //     console.log("Thanks for visiting!")
// // }


// // greet(giveMenu);
// //callback hell, pyramid of doom - callback function inside of another callback function


// // function getUsername(getAge) {
// //     const data = { username: "Avi" };
// //     getAge(data, getGrade);
// // }

// // function getAge(data, getGrade) {
// //     var newData = { ...data, age: 21 };
// //     getGrade(newData, getPercentage);
// // }

// // function getGrade(data, getPercentage) {
// //     var newData = { ...data, grade: "A+" };
// //     getPercentage(newData, printData);
// // }

// // function getPercentage(data, printData) {
// //     var newData = { ...data, percentage: "90%" };
// //     printData(newData);
// // }

// // function printData(data) {
// //     console.log("DATA>>>", data);
// // }

// // getUsername(getAge);

// // Problem statement -> Build a student monitoring system ->
// // getEmail->getAge->getGrade->getPercentage->showData

// // manage a data object and pass it in all the functions



// // function getEmail(getAge) {
// //     const obj = { email: "avi@gmail.com" }
// //     getAge(getGrade, obj)
// // }


// // function getAge(getGrade, obj) {
// //     obj = { ...obj, age: 22 }
// //     getGrade(getPercentage, obj)
// // }

// // function getGrade(getPercentage, obj) {
// //     obj = { ...obj, grade: "A+" };
// //     getPercentage(showData, obj)

// // }

// // function getPercentage(showData, obj) {
// //     obj = { ...obj, percentage: "90%" }
// //     showData(obj)
// // }

// // function showData(obj) {
// //     console.log("Final Data is", obj)

// // }

// // getEmail(getAge);



// function step1(callback) {
//     setTimeout(() => {
//         console.log("step 1");
//         callback();
//     }, 1000);
// }

// function step2(callback) {
//     setTimeout(() => {
//         console.log("step 2");
//         callback()
//     }, 5000);
// }

// function step3(callback) {
//     setTimeout(() => {
//         console.log("step 3");
//         callback()
//     }, 6000);
// }

// function step4(callback) {
//     setTimeout(() => {
//         console.log("step 4");
//         callback()
//     }, 1000);
// }

// step1((flag) => {
//     if (flag) {
//         step2(() => {
//             step3(() => {
//                 step4(() => {
//                     console.log("steps done");
//                 });
//             });
//         });
//     }
// })