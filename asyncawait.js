// console.log("Script Started")

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "Resolved!" })
            // reject({ data: "Rejected!" })
        }, 2000);
    })
}


// promise1().then((res) => { console.log(res) })

//Uncaught errors



async function handlePromise() {
    try {
        console.log("1")
        const data = await promise1();
        console.log("2", data);
    } catch (err) {
        console.log("3", err);
    } finally {
        console.log("4");
    }
    console.log("5");
}

handlePromise();

// fetch("").then((res) => res.json()).then((data) => data)

// promise1.then((variable))

// variable = await promise1


// async function getData() {
//     const response = await fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
//     const data = await response.json();
//     console.log(data);
// }

// getData();