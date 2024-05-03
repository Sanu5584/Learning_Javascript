const descripter = Object.getOwnPropertyDescriptor(Math , "PI");

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI);

const item = {
    name : "clothes",
    price : 500 ,
    isAvailable : true,

    orderItem : function(){
        console.log("Item is out of stock");
    }

}

console.log(Object.getOwnPropertyDescriptor(item, "name"));

Object.defineProperty(item,"name",{
    writable: false,
    enumerable : false
})

/*
writable – if true , the value can be changed, otherwise it's read-only. 
enumerable – if true , then listed in loops, otherwise not listed.
 configurable – if true , the property can be deleted and these attributes can be modified, otherwise not.
*/

console.log(Object.getOwnPropertyDescriptor(item, "name"));
 


for (let [key ,value] of Object.entries(item)) {
    if (typeof value !== 'function') {
    console.log(`${key} : ${value}`);
    }
}

console.log(item.name = "T-shirts");  // why this is still possible after defining the writable property false ,    
// reason was in the given link

// link : https://medium.com/@shrijan00003/javascript-object-properties-writable-enumerable-configurable-eced27378256