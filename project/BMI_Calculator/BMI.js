const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value.trim());
    const weight = parseInt(document.querySelector('#weight').value.trim());
    const result = document.querySelector('#result');

    if( height <= 0  || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`;
    } 
    else if(weight <= 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`;
    } 
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        //show result
        result.innerHTML = `<span>${bmi}</span>`;
    }
});