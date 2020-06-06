class General_Weather {
    constructor(tempature, humidity, windspeed) {
        this.tempature = tempature;
        this.humidity = humidity;
        this.windspeed = windspeed;
    }
    getDate() {
        // Get today's date from API search or moment.js.
    }
    getCityName() {
        // Get name of city.
    }
    getUVIndex() {
        // Get UV index via seperate API call if needed.
    }
}

// const e = new General_Weather();

module.exports = General_Weather;