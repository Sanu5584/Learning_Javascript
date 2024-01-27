// let score = 33;   // it is a number 
// let score = "33bac";   // it is a string 
// let score = undefined;   // it is a NaN(not a number)
// let score = null;   // it gives 0 
// let score = true;   // it gives 1 (because it is a boolean)
// let score = false;   // it gives 0 (because it is a boolean)
let score = "Sanidhya";   // it gives NaN

// console.log(typeof score);
// console.log(typeof (score));

let ValueInNumber = Number(score);
// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);


let IsLoggedIn = 1;
// 1 => true
// 0 => false 
// ""(Empty string) => false 
// "Sanidhya" => true 
 
let booleanIsLoggedIn = Boolean(IsLoggedIn);
// console.log(booleanIsLoggedIn);



let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  // means 2 to the power 3 means output is 8
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion