// use of for-in loop
const myObject = {
    js: 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// is for-in works on array                  // refer array_loops.js file for understanding                      

const progLang = ["js","ruby","python","go","swift"]

for (const key in progLang) {
    console.log(progLang[key]);
}