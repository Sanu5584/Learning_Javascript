// read the full theory for scopes from documentations

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Sanu"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two();
}

one();

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++   interesting   ++++++++++++++++++++++++++



console.log(addone(5))  // ppossible bcoz it is a function(not know too much about it)

function addone(num){
    return num + 1
}



addTwo(5)  // not possible bcoz it is an expression or variable
const addTwo = function(num){
    return num + 2
}