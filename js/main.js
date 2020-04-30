// Getting the section to append buttons too.
var weatherOptions = $("#weatherOptions");
// Checking to see if any city results are in localStorage
var weatherData =  [];

function addButton() {
        var locationBtn = $("<button>")
        .text(weatherData[weatherData.length-1])
        .attr("class", "btn btn-primary ml-2 mt-2");
        weatherOptions.append(locationBtn);
        // if ( == weatherData[weatherData.length-1]){
        //     alert("Already there")
        // } 
    }

// Getting input from search field
$("#searchCity").on("click", function (e) {
    e.preventDefault()
    // API CALL
    var APICall = "http://api.openweathermap.org/data/2.5/weather?q="
    var APIkey = "&APPID=11f39808453d026eda60eff244a8ef1e"
    var city = $("#inputCity").val()
    var queryURL = APICall+city+APIkey
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        weatherData.push(response.name)
        localStorage.setItem("city", weatherData)
        addButton();

        console.log(weatherData);
    })


})





var search;