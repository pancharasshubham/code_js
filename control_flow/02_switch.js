// switch syntax
/*
 switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = "march"

switch (month) {
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("Feburary")
        break;
    case "march":
        console.log("March")
        break;    
    case "april":
        console.log("April")
        break;    

    default:
        console.log("Please See Marathi Calander")
        break;
}


// why break is use in switch
// -> if break is not declare then, when case is match with input the next cases will all run expect default, that's why break is requird
// here if we comment break from march case then output will be (march and april), so be careful with break statement 