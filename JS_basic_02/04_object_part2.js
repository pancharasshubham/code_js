const tinderUser = new Object();         // singleton
const tinderUser1 = {}                   // non-singleton

tinderUser1.id = "122344abd";
tinderUser1.name = "Saalar";
tinderUser1.isLoggedIn = false;


// console.log(tinderUser);
// console.log(tinderUser1);

// object in object
const regularUser = {
    email : "rajmannar@karta.com",
    fullName: {
        userFullname: {
            firstName : "rajmannar",
            lastName : "kolagada"
        }
    }
}

// console.log(regularUser.fullName.userFullname); // 

// how to merge two object
const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2); // 
// console.log(obj3);

// use spread oprator two combine two object
const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id:1,
        email: "saalar@rajmannar.com"
    },
    {
        id:2,
        email: "rajmannar@karta.com"
    }
]


// console.log(users[0].email); // saalar@rajmannar.com

// console.log(tinderUser1);

// console.log(Object.keys(tinderUser1)); // print just key of object
// console.log(Object.values(tinderUser1)); // print just value
// console.log(Object.entries(tinderUser1)); 

// Method to know object has property 
// console.log(tinderUser1.hasOwnProperty('isLoggedIn')) // check if property is in object 


// when you have multiple value you have to destrucure a property with {} braces

const course = {
    coursename: "friendship",
    price : "999$",
    courseInstructor : "saalar"
}

// course.courseInstructor

const {courseInstructor : instructor} = course; // this is destructuring 

// console.log(courseInstructor); // saalar

// assing your own value 
console.log(instructor); // saalar

//*************************API*************************/

//API = values from backend in object/array format, file are in object or array format

// Json file 

// {
//     "name" :"saalar",
//     "nickname" : "dinosour",
//     "kill" : 25,
// }

// eg. random user me API
// json-formater - to understand json file