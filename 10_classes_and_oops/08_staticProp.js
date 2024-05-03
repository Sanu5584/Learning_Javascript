class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return `123`;
    }
}

const sanu = new User("Sanu");
sanu.logMe();
// console.log(sanu.createID());

class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const Teacher1 = new Teacher("Hitesh sir", "h@gmail.com")
Teacher1.logMe()
console.log(Teacher1.createID());

/* 
The static keyword defines a static method or field for a 
class, or a static initialization block (see the link for more 
information about this usage).Static properties cannot be
directly accessed on instances of the class. 
Instead, they're accessed on the class itself.

Static methods are often utility functions, such as functions to 
create or clone objects, whereas static properties are useful for
caches, fixed-configuration, or any other data you don't need to 
be replicated across instances.
*/