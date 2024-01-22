function randomlyPickItems(arr) {
    //randomly give you 3 items.
    let randomArr = [];

    while (randomArr.length < 3) {
        let random = Math.floor(Math.random() * arr.length);
        if (!randomArr.includes(random)) {
            randomArr.push(random)
        }
    }

    return randomArr.map((item) => arr[item])
    //1st method - pick 3 random numbers 
}

function orderPrep(order) {
    console.log(order);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ order: order, order_status: true, paid: false });
        }, 1500);
    })
}

function TakeOrder(foodArr) {
    console.log("All Arr", foodArr)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //randomly choose 3 items
            resolve(randomlyPickItems(foodArr));
        }, 2500);
    })
}


function getMenu() {
    fetch("https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json")
        .then((res) => res.json())
        .then((data) => {
            //show the ui
            return TakeOrder(data)
        })
        .then((foodItems) => orderPrep(foodItems))
        .then((orderPrepOutput) => console.log(orderPrepOutput))

}

getMenu();