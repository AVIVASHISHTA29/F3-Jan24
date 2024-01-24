// let email = "avi@gmail.com";
// localStorage.setItem("userEmail", email)


// console.log(localStorage.getItem("userEmail"));


// let loggedInUser = JSON.parse(localStorage.getItem("user") ?? null);

// console.log(loggedInUser);

// if (loggedInUser) {
//     document.body.innerHTML += `<h1>User is Logged In - ${loggedInUser.name}</h1>`
// } else {
//     document.body.innerHTML += "<h1>User is NOT Logged In</h1>"
// }

// document.getElementById("submit").addEventListener("click", () => {
//     // let email = document.getElementById("email").value;
//     localStorage.setItem("user",
//         JSON.stringify({ email: "avi@gmail.com", name: "Avi", createdAt: new Date() })
//     );

// })

// document.getElementById("logout").addEventListener("click", () => {
//     localStorage.removeItem("user");
// })



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



//COOKIES

console.log("My Cookies", document.cookie);


// document.cookie = "name=avi;"

document.getElementById("submit").addEventListener("click", () => {
    const d = new Date();
    d.setTime(d.getTime() + (2 * 1000));
    //set a cookie
    document.cookie = `user=avi; expires=${d.toUTCString()}`
})


let arr = [];
document.cookie.split("; ").map((obj) => {
    //key=value; newCookie = value
    console.log("string pair", obj);
    const [key, value] = obj.split("=");
    arr.push([key, value])
})

let obj = Object.fromEntries(arr);

console.log(obj);


let cookieArr = document.cookie.split("; ").map((obj) => obj.split("="))
console.log(cookieArr);
let obj2 = Object.fromEntries(cookieArr);
console.log(obj2);

//delete a cookie 
// document.cookie = "userObj=abc; expires=Thu, 18 Dec 2013 12:00:00 UTC"
