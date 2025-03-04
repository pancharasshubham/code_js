function greet(name) {
    console.log(`hello ${name}`);
}

greet("saalar");
greet("deva");

let globalVar = "I am global"

function modifyGlobal() {
    globalVar = "i am modified"
    let blockScopedVar = "I am blocked-scoped"
    console.log(blockScopedVar);
}

modifyGlobal();

// IIFE
let config = function(){
    let setting = {
        theme: "dark"
    }
    return setting
}()

let person1 = {
    name : "deva",
    greet : function(){
        // this - context (sandharbh)
        console.log(`hello ${this.name}`);
    }
}

let person2 = {
    name : "rajmannar"
}

// how can you get greet function form person1 with name of person2

person1.greet.call(person2); // hello rajmannar

