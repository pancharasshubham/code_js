const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value.trim());
    const weight = parseInt(document.querySelector('#weight').value.trim());
    const result = document.querySelector('#result');

    if( height <= 0  || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`;
    } 
    if(weight <= 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`;
    } 
      
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    
    let message = "";
            if (bmi < 18.6) {
                message = 'you are underweight'
            }
            else if(bmi >= 18.6 && bmi <= 24.9){
                message = 'your weight is normal'
            }
            else if ( bmi >= 24.9){
                message = 'you are over weight'
            }

        //show result
        result.innerHTML = `Your BMI is :<span>${bmi}</span> <br> ${message}`;
        
    }
);