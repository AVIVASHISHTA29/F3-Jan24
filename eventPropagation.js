//Propogation means spreading - spreading can happen in 2 ways
// 1. Bubbling (Bottom to top)
// 2. Trickling (top to bottom)


// document.body.addEventListener("click", (e) => {
//     console.log("body clicked")
// }, true)

document.getElementById("grand-parent").addEventListener("click", (e) => {
    console.log("Grand Parent clicked");
}, false) //true - Trickling

document.getElementById("parent").addEventListener("click", (e) => {
    console.log("Parent clicked");
    // e.stopPropagation();
}, false) //false - Bubbling

document.getElementById("child").addEventListener("click", (e) => {
    console.log("child clicked");
    e.stopPropagation();
}, false) // true - trickling



// document.addEventListener("click", (e) => {
//     console.log("doc clicked")
// })


