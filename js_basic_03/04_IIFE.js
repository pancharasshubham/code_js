// immediately invoked function expression (IIFE)

// function saalar (){
//     console.log(`DB CONNECTED`)
// }
// saalar()


// use -> globle scope ke polution se problem hoti hain kai bar to globle scope ke declare variable ke polution ko hatane ke liye.

// way to declare IIFE function
(function saalar (){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // if you don't use this semicolon it will throw error

( (name) => {
    console.log(`DB connected TO ${name}`);
})("khanshar")

// what is named IIFE - google it yourself