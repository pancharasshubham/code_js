// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("raajmannar ka salar");
    }
    // console.log(element);
    
}


// printing 1 to 10 tables with loop 
for (let i = 1; i <= 10; i++) {
        // console.log(`table of : ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop ${i}`)
        // console.log(i + ' * ' + j + ' = ' + i*j);
    }
    
}

let myArry = ["rajmannar", "deva", "rudra", "shivmannar"]
// console.log(myArry.length)
for (let index = 0; index < myArry.length; index++) {
    const element = myArry[index];
    // console.log(element);
    
}

// ********************** break and continue *******************************

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("5 is detected");
//         break
//     }
//     console.log(`value of i is ${index}`);    
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("5 is detected");
        continue
    }
    console.log(`value of i is ${index}`);    
}

