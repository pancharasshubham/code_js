// for-each is higher order array loops

// const coding = ["js","ruby","python","go","swift"]

// coding.forEach( function (item) {            // it's just forEach wants callback function
//     console.log(item);
// });

// for-each with arrow function

// coding.forEach( (val) => {
    // console.log(val);
// })

// for-each with function name 
// function printme(item){
    // console.log(item);
// }

// coding.forEach(printme)  // give reference not to call function like this (printme())

// forEach has other parameters

// coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
// })


// for each on array of object
const position = [
    {
        name : "rudra",
        designation : "sardar"
    },
    {
        name : "raajmannar",
        designation : "kapar"
    },
    {
        name : "devaratha",
        designation : "unknown"
    }
]

position.forEach( (key) => {
    // console.log(key.name, ' :- ', key.designation);
    // console.log(key);
});


// const coding = ["js","ruby","python","go","swift"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item                                             // for each does not return value
// })

// console.log(values)                                         // undefined


