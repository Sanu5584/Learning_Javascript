 const user = {
    username : "Sanidhya",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to this website.`);
        // console.log(this);
    }
 }

//  user.welcomeMessage();
//  user.username = "Sanu";
//  user.welcomeMessage();

// console.log(this);

// function one(){
//     let username = "Sanu";
//     console.log(this.username); // this function isnt work in  the function
// }

// one();

// const one = function () {
//     let username = "Sanu";
//     console.log(this.username);
// }

// one();

// const one = () => {
//     let username = "Sanu";
//     // console.log(this.username);
//     console.log(this);     // "this" is also not work in arrow function also

// }

// one();


// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }; // explicit return


// const addTwo = (num1,num2) => num1 + num2; // implicit return

// const addTwo = (num1,num2) =>(num1 + num2);

const addTwo = (num1,num2) =>({username : "Sanu"});

console.log(addTwo(3,4));