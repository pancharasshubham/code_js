// block scope - code inside the {} braces

//global scope - code outside the {} braces

let kills = 400

if(true){
    let kills = 25
    // console.log("real kills are: ", kills);
}

// console.log(kills);

function one(){
    const username = "rajmaanar"

    function two(){
        const city = "khanasar"
        console.log(username);
    }
    // console.log(city);

    two()
}

// one()

if (true) {
    const username = "saalar"
    if(username === "saalar"){
        const kills2 = 25
        // console.log(`rajmaanar ka ${username} kills are ${kills2}`);
    }
    
    // console.log(kills2);
}

// console.log(username);

// +++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++

console.log(addone(5))              //  6
// javascript is lang. which can access variable before it's declaration 
function addone(num){
    return num + 1
}



// another way to declare function

// hoisting : you can not access variable before declaring it

// console.log(addtwo(5))               // error : Cannot access 'addtwo' before initialization

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5))