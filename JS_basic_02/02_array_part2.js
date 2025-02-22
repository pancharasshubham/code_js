const sardar =["rajmannar", "rudra","bhargva","narag"]
const capar = ["ranga", "bhanu", "vishnu"]

// sardar.push(capar) // it will give you array in array 

// console.log(sardar); // [ "rajmannar", "rudra","bhargva","narag", [ "ranga", "bhanu", "vishnu" ] ]
// console.log(sardar[4][1]); // ranga

// let sardar_capar = sardar.concat(capar); 
// console.log(sardar_capar); // [ "rajmannar", "rudra","bhargva","narag", "ranga", "bhanu", "vishnu" ]

//easy method using spread oprator
// let sardar_capar2 = [...sardar, ...capar]

// console.log(sardar_capar2); 

// flat - returns new array with all sub-array elements concatenated
const another_sarder_capar = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_sardar_capar = another_sarder_capar.flat(Infinity); 

console.log(real_sardar_capar); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// use for scrapping data

console.log(Array.isArray("saalar"))        //  false
console.log(Array.from("saalar"))           //  [ 's', 'a', 'a', 'l', 'a', 'r' ]
console.log(Array.from({name: "saalar"}))   //  intresting - it gives you empty array [],
// you have to tell from which value array should be created 

let score1 = 1000
let score2 = 2000
let score3 = 5000

// returns new array from set of elements
console.log(Array.of(score1, score2, score3))   //  [ 1000, 2000, 5000 ]
