// dates

let myDate =  new Date();
console.log(myDate);

console.log(myDate.toString());

 console.log(myDate.toDateString());

console.log(myDate.toLocaleDateString());

console.log(typeof myDate);  // object

// let myCreatedDate = new Date( 2023, 0, 25);  // (year,month,date,hour,minute,seconds)  ////// here, month is start from zero like `0` means jan, `1` means feb ,...etc. 

let myCreatedDate = new Date( 2023, 0, 25, 10, 55, 55);
console.log(myCreatedDate.toLocaleString());

// let mynewCreatedDate = new Date ("01-30-2023"); // in MM-DD-YYYY format
let mynewCreatedDate = new Date ("2023-01-14"); // in YYYY-MM-DD format
console.log(mynewCreatedDate.toLocaleString());

let myTimeStamp = Date.now(); // it gives date in millisec
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());  // It gives time in millisec

console.log(Math.floor(Date.now()/1000));  // to print the sec of myCreatedDate from millisec and to remove decimal digits we use math.floor

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1); 
 console.log(newDate.getDay());

 /*         for line 33
.getmonth method gives indexed month means
 it means it starts from 0 as jan and 1 as ffeb etc so it gives 
 output 1 on feb month to overcome this we add 1 in this 
*/

let newerdate = new Date("02-21-2024");
console.log(newerdate.getDay());  // 0 represents sunday , it i further goes to 1 as mon , 2 as tue , ..... 

// console.log(`${newDate.getDay()} and the day is ${console.log(newDate.getDay())}`); // why day and date is undefined no idea 

console.log(newDate.toLocaleString("default",{
    weekday: "long",
    month: "2-digit"
}));  // knowing it in indepth is remaining   
