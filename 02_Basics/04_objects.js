// const discordUser = new Object(); // Singleton object

const discordUser = {};
discordUser.name = "Sanidhya";
discordUser.id = "123abc";
discordUser.isLoggedIn = false;

// console.log(discordUser);

const RegularUser = {
    email : "someone@gmail.com",
    fullname: {
        username : {
        firstname : "Sanidhya",
        lastname : "Delvadiya"
    }
}
}

// console.log(RegularUser.fullname.username.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = (obj1,obj2);
// const obj3 = Object.assign(obj1,obj2,obj4);
//  const obj3 = Object.assign({},obj1,obj2,obj4);



const obj3 = {...obj1,...obj2};
// console.log(obj3);

const user = [
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    },
    {
        id : 1,
        email : "s@gmail.com"
    }
]

// user[1].email
// console.log(discordUser);

// console.log(Object.keys(discordUser));
// console.log(Object.values(discordUser));
// console.log(Object.entries(discordUser));

// console.log(discordUser.hasOwnProperty("isLoggedIn"));


const Course ={
    coursename : "Javascript",
    price : "999",
    courseInstructor : "Hitesh"
}

// console.log(Course.courseInstructor);

const {courseInstructor} = Course;
const {courseInstructor : Instructor} = Course;

// console.log(courseInstructor);
// console.log(Instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]