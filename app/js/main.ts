

function fetchData() {
    var input = (<HTMLInputElement>document.getElementById('textInput')).value;
    console.log(input);

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            var result = data.drinks[0] //gets 1st result
            console.log(result); //logs as object
            
            //TODO handlebars
            // document.querySelector('#target').innerHTML =  '<p>' + result.strDrink + ' is  '+result.strAlcoholic+'</p>'

            document.querySelector('#drinkName').innerHTML =  '<p>' + result.strDrink + '</p>'
            document.querySelector('#drinkInfo').innerHTML =  '<p>' + result.strAlcoholic + ', ' + result.strCategory + '</p>'
            // document.querySelector('#drinkType').innerHTML =  '<p>Type: ' + result.strAlcoholic + '</p>'
            // document.querySelector('#drinkCategory').innerHTML =  '<p>Category: ' + result.strCategory + '</p>'
            document.querySelector('#drinkInstructions').innerHTML =  '<p>Instructions:<br>' + result.strInstructions + '</p>'
            document.querySelector('#drinkImg').innerHTML = '<img id="image" src='+ result.strDrinkThumb +' alt="placeholder">'
            // document.getElementById("image").style.width = "300px"; 
        })
}

