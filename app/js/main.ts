setOutputVisibility(false)
newSearchVisibility(false)

document.getElementById('searchBtn').addEventListener('click', function fetchData() {

    setOutputVisibility(true)
    newSearchVisibility(true)
    var input = (<HTMLInputElement>document.getElementById('textInput')).value;

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            var result = data.drinks[0] //gets 1st result

            document.querySelector('#drinkName').innerHTML = '<p>' + result.strDrink + '</p>'
            document.querySelector('#drinkInfo').innerHTML = '<p>' + result.strAlcoholic + ', ' + result.strCategory + '</p>'
            document.querySelector('#drinkIngredients').innerHTML += '<p> Ingredients:<br></p>'
            document.querySelector('#drinkInstructions').innerHTML = '<p>Instructions:<br><br>' + result.strInstructions + '</p>'
            document.querySelector('#drinkImg').innerHTML = '<img id="image" src=' + result.strDrinkThumb + ' alt="placeholder">'


            var ingredients: string[] = []
            var measurements: string[] = []

            //adds ingredients and their measurements to arrays.
            Object.keys(result).forEach(key => {

                if (String(key).includes('Ingredient')) {
                    ingredients.push(result[key])

                    ingredients.forEach(element => {
                        if (element == null) {
                            ingredients.pop()
                        }
                    });
                }
                if (String(key).includes('Measure')) {
                    measurements.push(result[key])

                    measurements.forEach(element => {
                        if (element == null) {
                            measurements.pop()
                        }
                    });
                }
            });

            var index = 0
            ingredients.forEach(element => {
                if (measurements[index] === undefined) {
                    measurements[index] = ''
                } else {
                    measurements[index] = ' - ' + measurements[index]
                }
                document.querySelector('#drinkIngredients').innerHTML += '<p>' + ingredients[index] + measurements[index] + '</p>'
                index++
            });
        })
})

function setOutputVisibility(value: boolean){
    if (value) {
        document.getElementById('output').style.visibility = 'visible'
    } else{
        document.getElementById('output').style.visibility = 'hidden'
    }
}

function newSearchVisibility(value: boolean){
    if (value) {
        document.getElementById('textInput').style.visibility = 'hidden'
        document.getElementById('searchBtn').style.visibility = 'hidden'
        document.getElementById('searchBtnNew').style.visibility = 'visible'
    } else{
        document.getElementById('textInput').style.visibility = 'visible'
        document.getElementById('searchBtn').style.visibility = 'visible'
        document.getElementById('searchBtnNew').style.visibility = 'hidden'    }
}

document.getElementById('searchBtnNew').addEventListener('click', function reloadPage() {
    location.reload(); 
})