const descripter =  Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


// how to write your own 

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
