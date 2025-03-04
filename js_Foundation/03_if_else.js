function chaiShop(type){
    // write program to get value from user in lowercase and datatypes, add option for type
    if(type === "Masala Chai"){
        console.log("Adding spices to chai");
    }else{
        console.log("preparing regular chai");
    }
}

chaiShop("Masala chai");

chaiShop("ginger chai")


/* */

function calculateTotal(amount){
    // convert to number 
    if(amount > 1000){
        return amount * 0.9 
    }else {
        return amount
    }
}

let finalBill = calculateTotal(1200)

// console.log(finalBill);

/* ek traffic light system mein, agar light "red" hai, toh "stop" print karo. agar "yellow" hai, toh "slow down" print karo, and agar green hai, toh go print karo.

*/

function trafficLight(color) {
    switch(color){
        case "red":
            console.log("stop");
            break;
        case "yellow":
            console.log("slow down");
            break;
        case "green":
            console.log("go");
            break;
        default:
            console.log("chalan kaat do");
    }
}

trafficLight("yellow");


function checkTruthyValue(value){
    if(value){
        console.log("Truthy");
    }else{
        console.log("Falsy");
    }
}

checkTruthyValue(1)
checkTruthyValue(0)
checkTruthyValue("shubham")
checkTruthyValue("")
checkTruthyValue([])
checkTruthyValue([1, 2, 3])


function login(username, password){
    if(username === 'admin' && password === "123" ){
        console.log("login successfull");
    }else{
        console.log("Invalid Credentials");
    }
}

