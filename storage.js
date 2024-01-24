// let email = "avi@gmail.com";
// localStorage.setItem("userEmail", email)


// console.log(localStorage.getItem("userEmail"));


let loggedInUser = JSON.parse(localStorage.getItem("user") ?? null);

console.log(loggedInUser);

if (loggedInUser) {
    document.body.innerHTML += `<h1>User is Logged In - ${loggedInUser.name}</h1>`
} else {
    document.body.innerHTML += "<h1>User is NOT Logged In</h1>"
}

document.getElementById("submit").addEventListener("click", () => {
    // let email = document.getElementById("email").value;
    localStorage.setItem("user",
        JSON.stringify({ email: "avi@gmail.com", name: "Avi", createdAt: new Date() })
    );

})

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("user");
})



// let loggedInUser = JSON.parse(sessionStorage.getItem("user") ?? null);

// console.log(loggedInUser);

// if (loggedInUser) {
//     document.body.innerHTML += `<h1>User is Logged In - ${loggedInUser.name}</h1>`
// } else {
//     document.body.innerHTML += "<h1>User is NOT Logged In</h1>"
// }

// document.getElementById("submit").addEventListener("click", () => {
//     // let email = document.getElementById("email").value;
//     sessionStorage.setItem("user",
//         JSON.stringify({ email: "avi@gmail.com", name: "Avi", createdAt: new Date() })
//     );

// })

// document.getElementById("logout").addEventListener("click", () => {
//     sessionStorage.removeItem("user");
// })

