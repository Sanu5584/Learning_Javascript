// singleton
// object.create


// objects literals

const mySym = Symbol("key1");

const JsUser = {
    name : "Sanidhya",
    "full name" : "Delvadiya Sanidhya",
    [mySym] : "mykey",
    age : 18,
    location : "Ahmedabad",
    email : "sanu5584@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday","Saturday"]
}; 

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser.full name); // shows error which is why above square bracket method is imp
console.log(JsUser[mySym]);

JsUser.email = "Sanu5584@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "Sanu5584@icrosoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js Users");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js Users, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());