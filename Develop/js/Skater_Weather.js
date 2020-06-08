const General_Weather = require('./General_Weather');


class Skater_Weather extends General_Weather {
    constructor(id, date, uvIndex, tempature, humidity, windspeed, precipitation, clouds) {
        super(id, date, uvIndex, tempature, humidity, windspeed);
        this.precipitation = precipitation;
        this.clouds = clouds;
    }
    // Getter functions.
    getPrecipitation() {
        // Get the day's precipitation level
            // Can be used on isItDry module.
        this.precipitation = precipitation;
    }
    getClouds() {
        // Get the day's cloud level percentage.
            // Can be used on isItDry module.
        this.clouds = clouds;
    }
    skatePercentage() {
        // Get the percentage chance of being able to skate.
            // Is used to display 'All Day Skate', 'Windows to skate', and 'No Skate'.
            // Can be used to display the skate percentage to page.
        return true;
    }
}
// var tuesday = new General_Weather(80, "90%", 9.3)
// console.log(tuesday);

module.exports = Skater_Weather;