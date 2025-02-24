// immediately invoked function expression (IIFE)

// function saalar (){
//     console.log(`DB CONNECTED`)
// }
// saalar()

// way to declare IIFE function
(function saalar (){
    // name IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB connected TO ${name}`);
})("khanshar")

