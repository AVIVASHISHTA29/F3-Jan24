const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({ data: "Promise 1" });
            reject({ data: "Promise 1 Rejected" });
        }, 2000)
    });
}

const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "Promise 2" });
            // reject({ data: "Promise 2 Rejected..." });
        }, 1000)
    });
}


const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({ data: "Promise 3" });
            reject({ data: "Promise 3 Rejected" });
        }, 3000)
    });
}


console.log("code started at", new Date());

// promise1().then((data) => { console.log(data, new Date()) });

// promise2().then((data) => { console.log(data, new Date()) });

// promise3().then((data) => { console.log(data, new Date()) });


//a lot of promises, the most efficient way of dealing with these promises

//either do all promises, or just give me the error (even if one fails)


// ALL - promise1 && promise2 && promise3

// Promise.all([promise1(), promise2(), promise3()]).then((arr) => {
//     console.log(arr, new Date());
// }).catch((e) => {
//     console.log(e, new Date());
// })



// ANY - promise1 || promise2 || promise3

//even if a single promise works - then good. 
/// if all failed - it will give an aggregrated error 


// Promise.any([promise1(), promise2(), promise3()]).then((arr) => {
//     console.log(arr, new Date());
// }).catch((e) => {
//     console.log(e, new Date());
// })


//RACE - whatever finished first

//race will give the fastest output (be it resolved or recjected)

// Promise.race([promise1(), promise2(), promise3()]).then((arr) => {
//     console.log(arr, new Date());
// }).catch((e) => {
//     console.log(e, new Date());
// })


// ALL SETTLED

// Promise.allSettled([promise1(), promise2(), promise3()]).then((arr) => {
//     console.log(arr, new Date());
// })


// promise1().then((data) => {
//     console.log(data, new Date());
// }).catch((e) => {
//     console.log("error", e, new Date());
// }).finally(() => {
//     console.log("done....");
// })
