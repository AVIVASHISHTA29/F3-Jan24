//fetch gives you a promise , this is your response obj, .json() -> returns promise -> which contains data


// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => console.log(data))
//     .catch((err) => { console.log(err) });



// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => {
//         data.map((item, i) => {
//             document.body.innerHTML += `${i}. ${item.title}<br/>`
//         })
//     })


fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        document.getElementById("loader").style.display = "none";
        if (data.products.length > 0) {
            data.products.forEach((product, i) => {
                document.getElementById("products").innerHTML +=
                    `
                    <div class='product'>
                        <img src=${product.thumbnail} />
                        <h4>${product.title} Price: $${product.price}/-</h4>
                    </div>
                
                `

            })
        }

    }).catch((err) => { console.log(err) });





