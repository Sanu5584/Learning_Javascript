// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeroes = ["thor","spiderman"];

let heroPower = {
    thor :"hammer",
    spiderman :'sling',

    getSpideyPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
    }
}

Object.prototype.sanidhya = function(){
    console.log(`Sanidhya is present in all objects`);  // making new property
}

// heroPower.sanidhya()
// myHeroes.sanidhya()


Array.prototype.HeySanidhya = function(){
    console.log("Is sanidhya is everywhere ");
}

// heroPower.HeySanidhya()  // throws error
// myHeroes.HeySanidhya()


/*********************Inheritence************************/


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ :TeachingSupport
}

Teacher.__proto__ = User;

// modern syntax

    Object.setPrototypeOf(TeachingSupport, Teacher)


    let anotherUsername = "Sanidhya             ";
    String.prototype.trueLength = function(){
        console.log(`${this}`);
        console.log(`True length is : ${this.trim().length}`);
    }

    anotherUsername.trueLength()
    "hitesh    ".trueLength()
    "Patel    ".trueLength()