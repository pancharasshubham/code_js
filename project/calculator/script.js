const calculator = document.querySelector(".calculator")
const keys = document.querySelector(".calculator_keys")
const display = document.querySelector(".calculator_display")
// console.log(keys);


keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        if (!action) {
            console.log('number key!')
          }
    }
})

// if(!action){
//     if(displayedNum === 0){
//         display.textContent = keyContent
//     }else{
//         display.textContent = displayedNum + keyContent
//     }
// }