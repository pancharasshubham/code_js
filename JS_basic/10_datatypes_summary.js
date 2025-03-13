// primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// reference (non primitive) - what is this ?
// Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities. -> Array and object

// symbol - datatype

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//Array, Objects, Functions

//array
const khansar = ["rajmanar", "deva", "bhargva"]

//object
let myObj = {
    name: "devaratha raisar",
    age: 32,
}

//funciton
const myfunction = function(){
    console.log("khansar ka saalar");
}

// javascript is dynamic type or static type ? // dynamic

