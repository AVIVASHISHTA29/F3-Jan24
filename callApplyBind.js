let obj1 = {
    name: "Avi",
    email: "avi@gmail.com",
    phone: "9999999999",
    getAllInfo: function (city, country) {
        return `My Name is ${this.name} and my email is ${this.email}. I live in ${city}, and in this country - ${country}`;
    }
}

let obj2 = {
    name: "Abhilash",
    email: "abhilash@gmail.com",
    phone: "9888888888",
    langauges: ["JS", "Python", "C++", "Java"],
    skills: ["teamwork", "business", "managing", "public speaking"],

    showEverything: function (city, country) {
        return obj1.getAllInfo.call(this, city, country) + `. My skills are ${this.skills.join(", ")} `
    }

}

let obj3 = {
    name: "Subhash",
    email: "Subhash@gmail.com",
    phone: "9777777777",
    langauges: ["JS", "Python"],
    skills: ["teamwork", "business"],

}

// console.log(obj1.getAllInfo)
// console.log(obj1.getAllInfo.call(obj3, "London", "UK"));

// console.log(obj1.getAllInfo.apply(obj3, ["London", "UK"]));


// console.log(obj2.showEverything("UK", "London"));

// console.log(obj2.showEverything.call(obj3, "Sydney", "Australia"));

let obj3ShowEverything = obj2.showEverything.bind(obj3, "Sydney", "Australia");

console.log(obj3ShowEverything())
