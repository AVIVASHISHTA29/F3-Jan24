//fetch gives you a promise , this is your response obj, .json() -> returns promise -> which contains data


fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        return res.json()
    })
    .then((data) => console.log(data))
    .catch((err) => { console.log(err) });



fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => {
        data.map((item, i) => {
            document.body.innerHTML += `${i}. ${item.title}<br/>`
        })
    })

