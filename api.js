console.log("hi")



//GET
fetch("https://dummyjson.com/products/1")
    .then((res) => {
        console.log("response", res);
        return res.json()
    })
    .then((data) => console.log(data))

//GET
fetch("https://dummyjson.com/products/1", { method: "GET" })
    .then((res) => {
        console.log("response", res);
        return res.json()
    })
    .then((data) => console.log(data))



//ADD - POST

// fetch('https://dummyjson.com/products/add',
//     {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             id: 10000,
//             title: "AccioJob Pencil",
//             price: 1000,
//             category: "acciojob",
//             images: ["image1", "image2", "image3"]
//         })
//     }).then(res => res.json())
// .then(console.log);




//DELETE
// fetch("https://dummyjson.com/products/1",
//     { method: "DELETE" }
// )
//     .then((res) => {
//         console.log("response", res);
//         return res.json()
//     })
//     .then((data) => console.log(data))




//UPDATING
/* updating title of product with id 1 */
fetch('https://dummyjson.com/products/1', {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'iPhone Galaxy +1'
    })
})
    .then(res => res.json())
    .then(console.log);
