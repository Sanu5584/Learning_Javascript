// for of loop

// ["","",""]
// [{},{},{}]

const arr = [ 1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
};

const greeting = "Hello dunia!";
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);
};

// maps


const map = new Map();
map.set("IN", "India"); 
map.set("Fr", "France");
map.set("USA", "United States of America");
map.set("IN", "India"); // not printed bcoz map prints only unique values

// console.log(map);

for(const [key , value] of map){
    // console.log(key, ":-", value);
}

const myObj  = {
    movie1: 'PUBG',
    movie2: 'Minecraft'
}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);
// }