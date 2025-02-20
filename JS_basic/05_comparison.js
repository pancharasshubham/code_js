// console.log(2 > 1);
// console.log(2 <= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // true
// console.log("02" > 1); // true

// avoid this type of comparision in code

// console.log(null > 0);      //false
// console.log(null == 0);     //false
// console.log(null >= 0);     //true

// the reason is that an equality check ( == ) and comparisons ( > < >= <= ) works differently.
// comparisons convert null to a number, treating it as 0.

// console.log(undefined == 0);    //false
// console.log(undefined > 0);     //false
// console.log(undefined < 0);     //false

console.log("2" == 2);      //true
console.log("2" === 2);     //false // strict check
