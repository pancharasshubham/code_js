const color = document.querySelectorAll('.button');
console.log(color);

const body = document.querySelector('body')

color.forEach(function (btw){
    console.log(btw);
    btw.addEventListener('click', function(deva){
    console.log(deva.target);

    if (deva.target.id === 'yellow') {
        body.style.backgroundColor = deva.target.id;        
    }
    if (deva.target.id === 'gray') {
        body.style.backgroundColor = deva.target.id;        
    }
    if (deva.target.id === 'pink') {
        body.style.backgroundColor = deva.target.id;        
    }
    if (deva.target.id === 'blue') {
        body.style.backgroundColor = deva.target.id;        
    }
    })
})
