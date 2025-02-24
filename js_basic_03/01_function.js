function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("a")
    console.log("l")
    console.log("a")
    console.log("r")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
//}

// addTwoNumbers(3, 8);

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 8);

// console.log("result: ", result);


function loginUserMessage(username){
    //more professional way 
    if(!username){
        console.log("please enter a username");
        return
    }

    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }

    return `${username} just logged in`
}

// console.log(loginUserMessage("saalar"))

// console.log(loginUserMessage())


// function with array and object 

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username : "saalar",
    kills : 25
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and kills are ${anyobject.kills}`);
}

// handleobject(user)

//another way to inclued value to object as function
handleobject({
    username : "rajmaanar",
    kills : 20
}) 

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));          // 400
console.log(returnSecondValue([2, 5, 7, 1000]));        // 5

