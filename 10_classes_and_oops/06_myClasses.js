// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }  

    encryptpassword(){
        return `${this.password}js`;
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`;
    }
}

const user1 = new User("Sanidhya","S@gmail.com","54321")

console.log(user1);
console.log(user1.encryptpassword());
console.log(user1.changeUserName());


// behind the scene 

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}js`;
// }

// User.prototype.changeUserName = function(){
//     return `${this.username.toUpperCase()}`
// }

// const user2 = new User("Vishwas","V@gmail.com","1233")

// console.log(user2);
// console.log(user2.encryptPassword());
// console.log(user2.changeUserName());