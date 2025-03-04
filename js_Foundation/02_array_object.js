let chaiTypes = ["masala chai", "ginger chai", "green tea","lemon tea"]

console.log(chaiTypes[2]);

console.log(`total chai types : ${chaiTypes.length}`);

chaiTypes.push("herbal tea");

const data = chaiTypes.pop();

console.log(data); // 

let index = chaiTypes.indexOf("green tea");

if (index != -1){
    chaiTypes.splice(index, 1)
}

//console.log(chaiTypes); // 

chaiTypes.forEach((chai, index) => {
    console.log(`${index + 1}: ${chai}`);
})


let moreCahiTypes = ["Oolong tea", "white tea"];

// let allChaiTypes = [""]

let newChaiTypes = [...chaiTypes, "chamoline tea"];
console.log(newChaiTypes);

let chaiRecipe = {
    name: "Masala Chai",
    ingredients:{
        teaLeaves: "Assam Tea",
        milk: "Full Cream Milk",
        sugar: "Brown Sugar",
        spices : ["Daalchini", "ginger"],
    },
    instruction : "boil water, add tea leaves, milk, sugar and spices"
};

// console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
    ...chaiRecipe,
    instruction : "boil water, add tea leaves, milk, sugar, spices with some love"
};


// this another way to declare varibale of object like mapping values 
let {name, ingredients} = chaiRecipe

let [firstChai, secondChai] = chaiTypes

console.log(ingredients);
console.log(secondChai);

