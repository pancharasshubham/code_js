// Javascript Execution Context

// {} -> global EC 

// go to browser and run this code in source and give breakpoint and see how call stack works 

function one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}

one()
two()
three()