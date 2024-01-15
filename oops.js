// let user1 = {
//     name: "Avi",
//     email: "avi@gmail.com",
//     mobileNumber: "9999999999",
//     myName: function() {
//     }
// __proto__ = functionsObj
// }

// let user2 = {
//     name: "Prem",
//     email: "prem@gmail.com",
//     phoneNumber: "8888888888",
// }

// let user3 = {
//     name: "Prakash",
//     email: "Prakash@gmail.com",
//     phoneNumber: "7777777777",
//     skills: ["JS", "Java"]
// }



// user1000000000



// Class -> Structure/BluePrint/Skeleton


class User {

    constructor(myName, myEmail, myMobile) {
        this.name = myName;
        this.firstName, this.lastName
        this.email = myEmail;
        this.mobileNumber = myMobile;
        this.createdAt = new Date();
        this.language = "en";
    }

    get lowerCaseName() {
        return this.name.toLowerCase();
    }

    getName() {
        return `This is my name - ${this.name}`
    }

    showAllInfo() {
        return `name is - ${this.name}, email is ${this.email} , mobile is ${this.mobile}`
    }

    updateCreatedAt(newDate) {
        this.createdAt = newDate;
        return `The Updated Date is ${newDate}`;
    }

    updateName(newName) {
        this.name = newName;
        // return `Name has been updated successfully!`;
    }

    myNameFnc() {
        return `my name is ${this.name}`;
    }

    get formattedDate() {
        return this.createdAt.getDate() + "/" + (this.createdAt.getMonth() + 1) + "/" + this.createdAt.getFullYear();
    }

    set setName(newName) {
        //manipulation of new Name.
        let upperCaseName = newName.toUpperCase();
        this.name = upperCaseName;
    }

}


let user1 = new User("Avi", "avi@gmail.com", "9999999999");
let user2 = new User("Vipul", "vipul@gmail.com", "8888888888");
let user3 = new User("Kanhaiya", "kanhaiya@gmail.com", "7777777777");


user1.setName = "anushka";
// user1.email = "anusha@gmail.com";
// user1.abc = "def"
// user1.phoneNumber = user1.mobileNumber;

console.log(user1)
console.log(user1.getName());
console.log(user1.lowerCaseName);
// console.log(user1.updateCreatedAt(new Date(1)));
// console.log(user1.updateName("Aviiii"));
