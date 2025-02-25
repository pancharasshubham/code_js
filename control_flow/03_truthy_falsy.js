// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN, 

// truty values

// "0", 'false', " ", [], {}, function(){}

// how to compare empty array 

// const userEmail = []

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

// how to compare empty object

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0){
//     console.log("object is empty")

// }

// Nullish Coalescing Operator (??) : null undefined
// when two value fetch from backend and value will be null code will fetch another value
// let val1;
// val1 = null ?? 10;               //  10
// val1 = null ?? 100 ?? 4300       //  100
// val1 = undefined ?? 40           // 40
// console.log(val1);

// terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")