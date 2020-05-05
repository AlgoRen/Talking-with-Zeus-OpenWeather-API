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
    var cityButton = $("<Button>").text(this.search.name).attr("class", "cityButton")
    $("#buttonArea").append(cityButton)
    
}

function loadResults(e) {
    // e.preventDefault()
    // How can I get the callback from OpenWeather API from button click?
    // Read the button value and put it into city 
    var city = this.innerText
    // Trying to figure out how to load weather results for the city that corresponds to the button clicked.
    loadWeather();
}

function saveResults() {

}

    
// Getting input from search field and getting callback from OpenWeather API.
$("#searchCity").on("click", weatherCall);
$(document).on("click", ".cityButton", loadResults);

function weatherCall(e) {
    // e.preventDefault()
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
        addButton(this)
        savingCities.push(city);
        localStorage.setItem("cities", JSON.stringify(savingCities));
        $("#currentWeather").empty();
        loadWeather();
        
        console.log(savingCities)
        console.log("---------------------")
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
    
    // Above solution is only running the loadResults function when the first button is clicked,
    // im guessing its because the on click listener is only being attached the the first .cityButton
    // item so I'll probably have to put the listener on the button container and filter for clicks on buttons only.
    // Adding buttons onto page.
    // addButton();
    // End of SearchCity on click function.
};
