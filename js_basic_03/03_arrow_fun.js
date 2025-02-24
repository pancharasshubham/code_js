// const user = {
//     username: "saalar",
//     price: 999,

//     welcomeMessage: function (){
//         // console.log(`${this.username}, welcome to website`)
//         console.log(this);
//     }
// }

// user.welcomeMessage()    // saalar welcome to website
// user.username = "rajmannar";
// user.welcomeMessage()    // rajmannar welcome to website

// console.log(this);   // {}

// function rajmaanar(){
//     console.log(this);
// }

// rajmaanar()  

// function rajmaanar(){
//     let username = "saalar";
//     console.log(this.username);                 // code give you undefined value
// }
// rajmaanar()

// another way to declare function is 
// const rajmaanar = function(){
//     let username = "saalar";
//     console.log(this.username);                 // code give you undefined value
// }
// rajmaanar()

// declare arrow function (ES6)
// *********************************************************************
// const rajmaanar = () => {
//     let username = "saalar";
//     // console.log(this.username);                 // undefined
//     console.log(this);                             // {}

// }

// rajmaanar()

// ************************************arrow funct
// const addTwo = (num1, num2) => {
//     return num1 + num2                                     // if you use {} then return is required
// }


// implicit return function  **** most use in react library *********

// const addTwo = (num1, num2) => (num1 + num2)                  // if you use () then return is not required

// use of () is when you give value in object
const addTwo = (num1, num2) => ({username: "saalar"}) // username: saalar 

console.log(addTwo(3 , 4)) // 

