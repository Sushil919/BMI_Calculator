const form = document.querySelector('form');

//this usecase will provide you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const range = document.querySelector('#range');

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please give a valid height ${height}';
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        //shows the result
        results.innerHTML = `<span>${bmi}</span>`;
       
        
        range.if (results.innerHTML < 18.6){
            console.log("Under Weight");
        }
        // else if((results.innerHTML>18.6) && (results.innerHTML<24.9)){
        //     console.log("Normal Range");
        // }
        else{
            console.log("Overweight");
        }
    }
    
   
});