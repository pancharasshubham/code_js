const mynums = [1, 2, 3]

// const myTotal =  mynums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// arrow function 
const myTotal = mynums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price : 999
    },
    {
        itemName: "python course",
        price : 2999
    }, 
    {
        itemName: "cybersecurity course",
        price : 4999
    },
    {
        itemName: "data_science course",
        price : 12999
    },
]

const priceToPay =  shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);