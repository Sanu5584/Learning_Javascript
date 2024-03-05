const  myObject = {
    js: 'JavaScript',
    rb: 'Ruby',
    cpp: 'C++',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} :- ${myObject[key]}`);
}

const programming = ["js", "py", "cpp", "rb", "java"];

for (const key in programming) {
    // console.log(key);  // key is also in array , see from docs
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {  // map is not iteratable so we cant wrote it in loops
//     console.log(key);
// }

