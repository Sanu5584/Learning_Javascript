function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("D");
    console.log("H");
    console.log("Y");
    console.log("A");
};

// sayMyName     //  Thi is the refrence of the function
// sayMyName();  // here brackets'()' are used to execute the fuction

// function addTwoNNumbers(number1 ,number2){ // here ,number1 & number2 are called as parameters
//     console.log(number1 + number2);
// }

function addTwoNNumbers(number1 ,number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

addTwoNNumbers(33 ,7);  // the numbers will be passed to functions are called arguments
addTwoNNumbers(33 ,null);
addTwoNNumbers(33 ,undefined);
addTwoNNumbers(33 ,"7");

const result = addTwoNNumbers(2,4);
// console.log("Result:", result);


function loginUserMMessage(username = "Sanu") {
    if(username === undefined){  // or (!username)
        console.log("Plese enter a username");
        return;
    };
    return `${username} is just logged in`;
}

// console.log(loginUserMMessage("Sanidhya"));
console.log(loginUserMMessage());

// function calculateCartPrice(...num1){
//         return num1;
// };

// console.log(calculateCartPrice(200 ,300, 400, 2000));

function calculateCartPrice( val1, val2, ...num1){
    return num1;
};

// console.log(calculateCartPrice(200 ,300, 400, 2000));

const user = {
    username:"Sanidhya",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}.`);
}

// handleObject(user);

handleObject({
    username : "Sanu",
    price : 399
});

const myNewArray = [200, 300, 400, 2000];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400,  2000]));