const userEmail = "S@gmail.com";
// const userEmail = "";


if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
};

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0"/'0', 'false'/"false" , " " , [] , {} , function(){}

const user2Email = [];

if(user2Email.length === 0){
    console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Ternary operator

// Syntax 
// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");