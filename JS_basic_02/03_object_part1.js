// sigleton

// object literals
const mySym = Symbol("key1");             // interview imp- how to declare symbol
// console.log(typeof(mySym));

const JsUser ={
    name : "saalar",
    "full name" : "devaratha raisar",
    age : 34,
    location : "khanasar",
    [mySym] : "mykey1" , 
    email : "saalar@rajmannar.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "saturday"]
}

// console.log(JsUser.email)
// //another way to access object value
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

// check symbol datatype 
// console.log(typeof JsUser.mySym)        // string

// console.log(typeof JsUser[mySym])  // 

JsUser.email = "deva@rajmannar.com"
// Object.freeze(JsUser)                      // stop values from manupulating furthur
JsUser.email = "devaratha@raisaar.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Rajmaanar ka saalar");
}

JsUser.greetingtwo = function(){
    console.log(`good morning ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo())