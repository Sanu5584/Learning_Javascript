const user = {
    username : 'Sanidhya',
    loginCount : 6,
    signedIn : true,
    getUserDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    } 
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); 


function User(username, loginCount, isLoggedIn){
    // username = username;        ||
    // loginCount = loginCount;    || throws error
    // isLoggedIn = isLoggedIn     ||

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}
// const userOne = User("sanu", 12, true);
// const userTwo = User("Patel", 11, false);
const userOne = new User("sanu", 12, true);
const userTwo = new User("Patel", 11, false);

console.log(userOne.constructor); // this will overwrie te userOne function by using commmented method, tto avoid this add 'new' keywoed called 'new  constructor function' used to create an instance of an object that has a constructor function
// console.log(userTwo);
