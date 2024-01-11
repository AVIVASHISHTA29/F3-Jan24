let original = {
    name: "avi",
    age: 22,
    languages: {
        language1: "english",
        language2: "hindi"
    },
    createdAt: new Date(),
};

// let copy = original;

// let original = [1, 2, 3];
// let copy = { ...original, languages: { ...original.languages } };
// let copy = [...original];

// let copy = { ...original } //shallow copy

let copy1 = JSON.parse(JSON.stringify(original)); //deep copy
console.log("Copy 1", copy1)


let copy = structuredClone(original);
console.log("Copy 2", copy)

copy.name = "Harshit";
copy.age = 23;
copy.languages.language1 = "spanish";
copy.languages.language2 = "french";

copy.createdAt = new Date(copy.createdAt);


// let copy = Object.assign([], original);
// let copy = Object.assign({}, original);

console.log("Original", original);
console.log("Copy", copy);









// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = [...arr1, ...arr2];

let user = {
    email: "user@email.com",
    phone: "9999999999",
    signedUpDate: new Date(),
    skills: {
        language1: "JAVA",
        language2: "Python"
    }
}


let myString = JSON.stringify(user);

let copyOfUser = JSON.parse(myString);
copyOfUser.email = "user2@email.com";
copyOfUser.skills.language1 = "C++";
copyOfUser.skills.language2 = "JS";

