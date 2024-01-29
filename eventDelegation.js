// ["video1", "video2", "video3"].map((item, id) => {
//     let myDiv = document.createElement("div");
//     myDiv.textContent = item;
//     myDiv.addEventListener("click", (e) => {
//         console.log("reel clicked", id);
//     })
//     myDiv
//     document.body.appendChild(myDiv);
// })



document.getElementById("parent").addEventListener("click", (e) => {
    console.log("A reel was clicked!", e);
    console.log(e.target.id);
    if (e.target.id.includes("like")) {
        //send api call to like this reel? 
        //id
        console.log("send api to like ", e.target.id)
    }
    // else if (e.target.id.includes("save")) {
    //     console.log("send api to save ", e.target.id)
    // }
});