// Getting the section to append buttons too.
var weatherOptions = $("#weatherOptions");
// Checking to see if any city results are in localStorage
var search;
var savingCities = [];
var cities = JSON.parse(localStorage.getItem("cities")) || [];
// Getting info needed for UV index
var long
var lat
var APICallUV

function loadWeather() {
    console.log(search);
    console.log(search.main.temp)
    console.log(search.main.humidity)
    console.log(search.wind.speed)
    var cityName = $("<h2>").text(search.name)
    $("#currentWeather").append(cityName);
    var currentTemp = $("<h3>").text("Tempature: " + Math.round(search.main.temp) + "F")
    $("#currentWeather").append(currentTemp);
    var currentHumidity = $("<h3>").text("Humidity: " + Math.round(search.main.humidity) + "%")
    $("#currentWeather").append(currentHumidity);
    var currentWindSpeed = $("<h3>").text("Wind speed: " + Math.round(search.wind.speed) + "MPH")
    $("#currentWeather").append(currentWindSpeed);
    long = search.coord.lon
    lat = search.coord.lat
    return long, lat;
}


function addButton() {
    var acorns = $("<Button>").text("Acorns")
    $("#buttonArea").append(acorns)
}

function loadResults() {

}

function saveResults() {

}

    
// Getting input from search field
$("#searchCity").on("click", function (e) {
    e.preventDefault()
    // API CALL for Weather
    var APICall = "http://api.openweathermap.org/data/2.5/weather?q="
    var APIkey = "&APPID=11f39808453d026eda60eff244a8ef1e"
    var city = $("#inputCity").val()

    // Preventing duplicate searches.
    for (var i = 0; i < savingCities.length; i++) {
        if (city.toLowerCase() == savingCities[i].toLowerCase()){
            console.log("That exists!")
            return;
        }
    }
    var queryURL = APICall+city+APIkey+"&units=imperial"
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        search = response;
        savingCities.push(city);
        localStorage.setItem("cities", JSON.stringify(savingCities));
        loadWeather();
        console.log("Longitude: " + long)
        console.log("Latitude: " + lat)
        // API CALL for UV
        APICallUV = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+long+"&exclude=hourly,daily&appid=166a433c57516f51dfab1f7edaed8413"
        
        $.ajax({
            url: APICallUV,
            method: "GET"
        }).then(function(response){
            UVIndex = response.value
            var UV = $("<h3>").text("UV Index: " + UVIndex)
            $("#currentWeather").append(UV);
        })
    })
    // Adding buttons onto page.
    addButton();
    // End of SearchCity on click function.
});
