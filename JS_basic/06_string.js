const name = "saalar"
const killCount = 25;

//console.log("rajmanar ka" + " " +name + " " + killCount); // this is old way of concatination

//string interpolation 

console.log(`Hello my name is ${name} and my kill count is ${killCount}`);     //  pay attention to colon true{backticks => ` `}, false{' '}

// another way to declare string 

const cityName = new String('Khanasr');

// console.log(cityName[0]);
// console.log(cityName.__proto__);

// console.log(cityName.length); // 7
// console.log(cityName.toUpperCase()); //KHANSAR
// console.log(cityName.charAt(2)); // a
// console.log(cityName.indexOf('h')); // 1

const newString = cityName.substring(0, 4)
console.log(newString); // khan

const anotherString = cityName.slice(-6, 4);
console.log(anotherString);// han

//  get rid of whitespace
const saalar = "   Devaratha    ";
console.log(saalar); //   [space] Devaratha [space]
console.log(saalar.trim()); // Devaratha

// replace any value
const url = "https://saalar.khanasar/rajmannar%20saalar";

console.log(url.replace('%20', '-')); //https://saalar.khanasar/rajmannar-saalar

// find in string
console.log(url.includes('khanasar')); // true check if it has value

const playerName = new String("saalar-rajmannar-rudra-bhargva")

console.log(playerName.split('-')) // [ 'saalar', 'rajmannar', 'rudra', 'bhargva' ]
// split on the basis of '-'