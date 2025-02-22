const myArr = [0, 1, 2, 3, 4, 5]
const sardar =["rajmannar", "rudra","bhargva","narag"]

// console.log(myArr[0]);

const myArr2 = new Array(0, 1, 2, 3, 4)

// Array methods // use in to-do project

myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)    // [9, 0, 1, 2, 3, 4, 5, 6, 7]
// myArr.shift()       // [0, 1, 2, 3, 4, 5, 6, 7]

console.log(myArr);

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // -1 meaning does not no position of 9

const newArr = myArr.join()

// console.log(myArr); // [0, 1, 2, 3, 4, 5]

// console.log(newArr); // 0, 1, 2, 3, 4, 5

// consolr.log(typeof(newArr)); // string

// slice, splice -> use in interview question

console.log("A ", myArr); //  A [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3); 

//console.log(myn1); // [1, 2]
//console.log("B ",myArr); // B [0, 1, 2, 3, 4, 5]

// splice remove value from array
const myn2 = myArr.splice(1, 3);
//console.log("C ",myArr); // [0, 4, 5]
//console.log(myn2); // [1, 2, 3]

