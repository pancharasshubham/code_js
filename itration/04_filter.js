// use of filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums =  myNums.filter( (num) => num > 4 )
// console.log(newNums);

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 =  myNums.filter( (num) => {
    // num > 4                                                    // []
    return num > 4                                          // when you add {}-parenthisis you have to write return keyword
} )
// console.log(newNums1);

// condition with for-each loops
const numbers = []

myNums1.forEach( (num) => {
    if(num > 4){
        numbers.push(num)                                  // [5, 6, 7, 8, 9, 10]
    }
})

console.log(numbers);