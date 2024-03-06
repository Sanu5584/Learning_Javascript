const coding = ["js","py","java","cpp","ruby","go"];

// coding.forEach(function (values) {
//     console.log(values);
// });

// coding.forEach((item) => {
//     console.log(item);
// });

// function printMe(item){
//     console.log(item);
// };

// coding.forEach(printMe);

// coding.forEach((item,index,arr) => {
//     console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName : "C++",
        languageFileName : "cpp"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "ruby",
        languageFileName : "rb"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});