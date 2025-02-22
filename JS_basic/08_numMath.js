// const score = 1200;
// console.log(score); // 1200

// how to explicitly define number 

// const balance= new Number(100);
// console.log(balance); // 100

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00


// const otherNumber =23.8966
// const otherNumber1 =123.8966

// console.log(otherNumber.toPrecision(3)); // 23.9
// console.log(otherNumber1.toPrecision(3)); // 124

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

//**************************************Maths************************************

// console.log(Math.abs(-4));                  //4 -> absolute value
// console.log(Math.round(4.6));               //5  -> roundoff value
// console.log(Math.ceil(4.2));                //5  -> top value
// console.log(Math.floor(4.9));               //4  -> base/lower value
// console.log(Math.min(4, 3, 7, 10,234));     //3  -> lowest value in array
// console.log(Math.max(4, 6, 9, 234, 567));   //567   

console.log(Math.random()); // it changes value from 0 - 1


// lets change value for dice game 
console.log((Math.random()*10) + 1); // it chages value from decimal number and 
console.log(Math.floor(Math.random()*10) + 1); // gives you value without 0 form (1 - 9)

const min = 10;
const max = 20;

// imp formula to remember for projects like calculator or dice game.
console.log(Math.floor(Math.random() * (max - min +1)) + min)

