class General_Weather {
    constructor(id, date, uvIndex, tempature, humidity, windspeed) {
        this.id = id;
        this.date = date;
        this.uvIndex = uvIndex;
        this.tempature = tempature;
        this.humidity = humidity;
        this.windspeed = windspeed;
    }
    getDate() {
        // Get today's date from API search or moment.js.
            // Takes in data to reformat it.
            // Can be called to display date.
            // Can be used to determine what day was yesteray and what day is tomorrow.
            // Is used to store what day it is relative to other dates.
            // Is used to display what the date is to page.
        return this.date;
    }
    getCityName() {
        // Get name of city.
            // Takes in id number and returns a string name.
            // Can be used to load city name into button.
            // Is used to display name information to page.
        return this.id;
    }
    getUVIndex() {
        // Get UV index via seperate API call if needed.
        // Is used to display what the UV Index is to page.
        return this.uvIndex;
    }
}

// const e = new General_Weather();

module.exports = General_Weather;