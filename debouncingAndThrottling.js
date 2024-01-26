let emailInput = document.getElementById('email');

// emailInput.addEventListener("input", (e) => {
//     // console.log(e.target.value);
//     // getSearchResults(e.target.value);


//     //iphone
//     debounce(() => {
//         console.log("Your debounced Search Result - ", e.target.value)
//     }, 1000)


//     throttle(() => {
//         console.log("Your throttle Search Result - ", e.target.value)
//     }, 1000)
// })


function getSearchResults(value) {
    setTimeout(() => {
        console.log("Your Search Result for value - ", value)
    }, 1000)
}


let timeout;
function debounce(callback, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        callback();
    }, delay);
}



let hasStarted = false;
function throttle(callback, delay) {
    if (hasStarted) {
        return;
    } else {
        hasStarted = true;
        setTimeout(() => {
            callback();
            hasStarted = false;
        }, delay);
    }
}


addEventListener("scroll", (e) => {
    // console.log(e.target.value);
    // getSearchResults(e.target.value);

    console.log(e.target.value);

    //iphone
    debounce(() => {
        console.log("Your debounced Search Result - ", e.target.value)
    }, 1000)


    throttle(() => {
        console.log("Your throttle Search Result - ", e.target.value)
    }, 1000)
})