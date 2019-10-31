function fetchData() {
    var input = document.getElementById('textInput').value;
    console.log(input);
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input)
        .then(function (data) {
        return data.json();
    })
        .then(function (data) {
        var result = data.drinks[0]; //gets 1st result
        console.log(result); //logs as object
        document.querySelector('#target').innerHTML = '<p>' + result.strDrink + ' is  ' + result.strAlcoholic + '</p>';
        document.querySelector('#targetImg').innerHTML = '<img src=' + result.strDrinkThumb + ' alt="placeholder">';
    });
}
