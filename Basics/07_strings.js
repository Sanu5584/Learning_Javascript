const name = "Sanidhya";
const RepoCount = 50;

//  console.log(name + RepoCount + " Value" ); // is called concatination  , but this method was outdated for concatination.

// console.log(`Hello my name is ${name} and my repo count is ${RepoCount}.`); 
/*  
           Notes for 6th line

so, we use this method to concatinate 
here '`' is called backticks.
${}  --> this is used to inject the variables.
  */

const gameName = new String("Patel-Sanidhya");   // this is another way of declaring string but there is some difference we see them along

 console.log(gameName);    //  Dont know about the reason
//  console.log(gameName[2]);
//  console.log(gameName.__proto__);  // syntax for prototypes not necessary

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(5,10);
// console.log(newString);
// const anotherString = gameName.slice(-13,4);
// console.log(anotherString);


// const newStringOne = "     Sanu    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());  

const url ="https://sanidhya.com?sanidhya%20delvadiya";
 
console.log(url.replace('%20','-'));

console.log(url.includes('sanidhya'));
console.log(url.includes('sanu'));

console.log(gameName.split("-"));
console.log(gameName.split("a"));


 /*  ************************************************    Learn about prototypes from documentation
 ************************************************
 */