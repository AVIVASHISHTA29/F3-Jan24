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

    get upperCaseName() {
        return this.name.toUpperCase();
    }

}


let user1 = new User("Avi", "avi@gmail.com", "9999999999");
let user2 = new User("Vipul", "vipul@gmail.com", "8888888888");
let user3 = new User("Kanhaiya", "kanhaiya@gmail.com", "7777777777");


user1.name = "Anusha";
user1.email = "anusha@gmail.com";
user1.abc = "def"
user1.phoneNumber = user1.mobileNumber;

console.log(user1)
console.log(user1.updateCreatedAt(new Date(1)));
console.log(user1.updateName("Aviiii"));
