console.log('hello from js');

setTimeout(() => console.log('A 2 S'), 10 * 1000);  // minimum tho 10s wait maximum is not fixed when call stack is free

console.log('bye bye');

function xyz() {
    const abc = 1;
}

const obj = {
    personName: 'deva'
}