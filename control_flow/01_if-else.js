// control flow
// if statement

// if (2 !== "2") {
//     console.log("exexuted");
// }
// else{
//     console.log("You were kill by aliens!")
// }

// checking value with this opreator 
// < - (less than), > , <=, >=, ==, !=, ===, !== 

// const score = 200

// if (score > 100) {
//     const result = "Your score is 100"
//     console.log(`Student Result: ${result}`)
// } else {
//     console.log("please score more than 100")
// }

const balance = 1000

// implicit scope it will write in one line
// if (balance > 500) console.log("balance is more than 500");

// Nested -> if_else

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less than 750");

// }else if(balance < 900){
//     console.log("less than 900");

// }else{
//     console.log("less than 1200");
// }

// real-life example 

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false

if (userLoggedIn && debitCard){                             // && -> both statement has to be true
    console.log("allow to buy course")
}
if(loggedInFromGoogle || loggedInFromEmail){                // || -> one statement has to be true
    console.log("user logged in");
}