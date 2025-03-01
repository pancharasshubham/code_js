// let myDate = new Date()
// console.log(myDate);                            //  2024-06-01T13:21:15.308Z
// console.log(myDate.toString());                 //  Sat Jun 01 2024 18:51:15 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());             //  Sat Jun 01 2024
// console.log(myDate.toISOString());              //  2024-06-01T13:21:15.308Z
// console.log(myDate.toLocaleString());           //  6/1/2024, 6:51:15 PM
// console.log(myDate.toJSON());                   //  2024-06-01T13:21:15.308Z
// console.log(myDate.toLocaleDateString());       //  6/1/2024
// console.log(myDate.toTimeString());             //  18:51:15 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleTimeString());       //  6:51:15 PM
// console.log(myDate.toUTCString())               //  Sat, 01 Jun 2024 13:25:36 GMT


let myCreateDate = new Date(2023, 0, 23)
//console.log(myCreatedDate) //
// console.log(myCreateDate.toDateString()); // MON JAN 23 2023

// let myCreateDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM

// let myCreateDate2 = new Date("01-14-2023")
// console.log(myCreateDate2.toLocaleString()); // 1/14/2023, 12:00:00 AM

// use in quizzes, polls 
let myTimeStamp = Date.now()

console.log(myTimeStamp); // 167677672589191
console.log(myCreateDate.getTime()); // 

console.log(Date.now());
console.log(Math.floor(Date.now()/1000)); // changes miliseconds into seconds 

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()); // 02
console.log(newDate.getDay()); // 3

//*****************imp*******************//

newDate.toLocaleString('default',{
    weekday: "long",
    //timezone // search it online how use timezone.
})


