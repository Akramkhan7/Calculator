const form = document.querySelector('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value); // Correct selector
    const weight = parseFloat(document.querySelector('#weight').value); // Correct selector
    const results = document.querySelector('.result'); // Select the DOM element, not parseInt
    

    if(height <= 0 || isNaN(height)){
        results.innerHTML = `Please give valid Height$`;
    }

    if(weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid Weight`;
    }else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `Your BMI is: ${bmi}`;
    }
});