// arrays

const myArr = [1,2,3,4,5];
// console.log(myArr[2]);

const myHeroes = ["shaktiman","nagraj"];
// console.log(myHeroes[1]);

const myArr2 =  new Array(1,2,3,4);    
// console.log(myArr2[2]);
// console.log(myArr2[]);

// console.log(typeof myArr);
// console.log(typeof myHeroes);
// console.log(typeof myArr2);

// Array methods

myArr.push(6);   // it adds the value to the given array
// console.log(myArr);

myArr.pop();   // it automatically deletes the last elements of an array and if array is emmpty then returns undefined
// console.log(myArr);

myArr.unshift(5);   // it adds the value to the array at the 0 index
// console.log(myArr);

myArr.shift(); // it removes the first elements of an array and  and if array is emmpty then returns undefined
// console.log(myArr);

// console.log(myArr.includes(1));  // it specifies that an array contains that given elements or not by returning true or false 
// console.log(myArr.includes(6));

// console.log(myArr.indexOf(4));  // it returns the index no. of the given number
// console.log(myArr.indexOf(6));  // returns "-1" means false 

const newArr = myArr.join();  // it converts arrays to strings
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

// slice and splice mthod (imp)

console.log("A ",myArr);
const myn1 = myArr.slice(3,5); // it prints from start and print all elements of an array between 3 and 5 gives 3,4 without manpulating original array
console.log(myn1);

console.log("B ",myArr);
const myn2  = myArr.splice(3,5); // it prints 3,4,5 but it manipulate original array
console.log("C ",myArr);
console.log(myn2);
