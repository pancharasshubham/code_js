// declaring variables
let score = 33;
let score1 = "33";
let score2 = "33abc"
let score3 = null;
let score4 = undefined;

//printing variables 
console.log(score3);
console.log(score4);

// printing typeof all variables
console.log(typeof score);
console.log(typeof(score));
console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);

// conversion of string in Number
let valuInNumber = Number(score);

let valuInNumber2 = Number(score2);
let valuInNumber3 = Number(score3);

//printing typeof converted variable
console.log(typeof valuInNumber);
console.log(typeof valuInNumber2);

//print variables
console.log(valuInNumber2);
console.log(valuInNumber3);

// "33" => 33
// "33abc" => NaN


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// true => 1; false => 0
// "" => false
// "saalar" => true

let number = 33;

let stringNumber = String(number);
console.log(stringNumber);
console.log(typeof (stringNumber));
