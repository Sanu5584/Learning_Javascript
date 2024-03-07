// reduce     

const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(accumulator , currentValue) {
//     console.log(`accumulator :${accumulator} and currentValue :${currentValue}`);
//     return accumulator + currentValue;
// },0);

const myTotal = myNums.reduce((acc,currval) => acc+currval ,0);

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "ios dev course",
        price : 7999
    },
    {
        itemName : "android dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    },
];

const PriceToPay = shoppingCart.reduce((acc ,item) => acc + item.price  ,0);

console.log(PriceToPay);