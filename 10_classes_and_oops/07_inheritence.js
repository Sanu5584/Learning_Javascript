class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

/*
extends keyword :- The extends keyword is used in 
class declarations or class expressions to create 
a class that is a child of another class.

super keyword :- The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
*/


const Teacher1 = new Teacher("HiteshChaudhary", "h@gmail.com", "1234")

Teacher1.logMe();
Teacher1.addCourse();

const user1 = new User("Sanidhya");
user1.logMe();
// user1.addCourse();  // throws error

console.log(Teacher1 instanceof Teacher);
console.log(Teacher1 instanceof User);
console.log(user1 instanceof Teacher);
console.log(user1 instanceof User);
