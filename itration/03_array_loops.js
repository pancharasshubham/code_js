// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"

for (const greet of greetings){
    if (greet == " ") {
        continue        
    }
    // console.log(`each is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")                              // it will not print because map gets uniqe values does not store duplicates

// console.log(map);

// loop on map [for-in]

for (const key of map) {
    // console.log(key);                               //  gives value in array
}

for (const [key,value] of map) {
    // console.log(key, ':-', value);                  // gives O/P in simple format
}

// for-of on object                                    // throw error
// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman'
// } 

// for-of does not irerable on object
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

