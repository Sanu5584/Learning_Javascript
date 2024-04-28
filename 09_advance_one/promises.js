// promises 

const promiseOne = new Promise(function(resolve, reject){
    // Do na async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000);
});

promiseOne.then(function(){
    console.log("promise consumed");
})

// PromiseTwo
new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    },2000);
}).then(()=>{
    console.log("Async 2 resolved");
});


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sanidhya" , password:"12345"});
    },3000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
    if(!error) resolve({username:'Sanidhya' , email:"s@outlook.com"})
    else reject("ERROR: Something went wrong");
    },4000);
});

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> {
    console.log("The promise is either resolved or rejected")
});