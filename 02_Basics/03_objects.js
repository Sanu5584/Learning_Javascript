// singleton

// objects literals
const JsUser = {
    name : "Sanidhya",
    "full name" : "Delvadiya Sanidhya",
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

