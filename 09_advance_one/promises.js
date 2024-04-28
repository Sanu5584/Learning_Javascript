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


const promiseFive = new Promise((resolve,reject) => {
    setTimeout(function(){
        let car_payment = true;
        if(car_payment == true){
            resolve({
                car_name : "Mahindra XUV700",
                car_price : "30,00,000(onroad_Mumbai)",
                car_model : "2024",
                car_buyer: 'Sanidhya Delvadiya',
                car_payment_type: "EMI",
                car_payment: 'done'
            });
        }else{
            reject("car payment not done");
        }
    },5000)
})

// promiseFive.then(function(car_detail){
//     // console.log(car_detail);
//     return car_detail.car_buyer;
// })
// .then(function(car_buyername){
//     console.log(car_buyername);
// })
// .catch(function(err){
//     console.log(err);
// })
// .finally(function(){
//     console.log("Here are details about car payment done or not. Your result is given above");
// })


// using async await and try-catch
// promise is an obj
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
    console.log(response.car_price);
    console.log(response.car_buyer);
    console.log(response.car_model);
    console.log(response.car_payment_type);
    }
    catch (error){
        console.log(error);
    }
}
 
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ',error);
//     }
// } getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

// promise.all
// yes this is also available, kuch reading aap b kro.