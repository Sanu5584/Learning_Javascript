// Learn about all prototypes of numbers and maths from documentations 

const score = 200;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
/* After using 'tostring' prototype on number , all strings prototypes are applied on the number for eg., here we use 'length' prototype after giving 'tostring'.      */ 

const balance1 = new Number(100);
// console.log(balance.toFixed(2));

const otherNumber = 123.4564;
// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString("en-IN"));  // read from mdn docs

// +++++++++++++ Maths ++++++++++++

// console.log(Math);  // Type this in inspect console and see the prototypes of 'maths'

//  console.log(Math.abs(-7));
// console.log(Math.round(4.565));
// console.log(Math.ceil(4.25));
// console.log(Math.floor(4.565));
// console.log(Math.min(4,5,6,7,8));
// console.log(Math.max(4,5,6,7,8));

console.log(Math.random());
console.log((Math.random()*10)+1); // it gives more than zero value  

const min = 10;
const max = 20;
console.log((Math.random()*(max - min + 1)) + min);
