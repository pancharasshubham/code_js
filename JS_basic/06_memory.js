// stack [primitive],   heap[refrence]

let karta = "shivrajmanar";

let karta2 = karta;

karta2 = "rajmanar";

console.log(karta);

console.log(karta2);

let user = {
    email: "deva@gmail.com" ,
    currency: "tatto"
}

let userTwo = user;

userTwo.email = "saalar@gmail.com"

console.log(user.email);    // saalar@gmail.com
console.log(usertwo.email); // saalar@gmail.com