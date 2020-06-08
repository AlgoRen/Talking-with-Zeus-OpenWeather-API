        // Version 1.00.1, Current Stage: Pseudocoding.
// Ask user if they would like normal functionality or Skater mode.
// ** Normal functionality ** //
/*
    Users have the ability to enter a city they would like to get the forecast to.
        // A clickable button with that city name is added to a recently searched section.
        // Results are retrieved via localStorage.
    Users are displayed the following weather forecast for today...
    via API call to OpenWeather: *Decide which API's will be used*
    The date, name of city searched, tempature, humidity, wind speed, UV Index, and weather icon.
        // UV Index has to be retrieved from a seperate API call once the coordinates
        from the first API call is made. Use promisify for this.
    Users are displayed the following information for the next five days...
    via API call to OpenWeather: *Decide which API's will be used*
    The date, tempature, humidity, and weather icon.
*/

// ** Skater mode functionality ** //
/*
    Users have the ability to enter the address, or just the city 
    of where they would like to get the forecast to.
        // A clickable button with that 'Spot' name if user does not enter a spot name 
        or if they just enter a city it defaults with just the city name.
        // No localStorage because of possible private data. 
        Version 2.0 will make the use of servers.
    Users are prompted with results of either "All day", meaning that the location 
    they entered has favorable skate conditions for the entire day and shows general
    weather information. Or users are prompted with a "Not today today message" if
    no breaks in the weather are found. Or users are given a list of 
    "Window Opportunities" these are at least an hour block of time where skating is
    possible, meaning if it has rained then enough time has passed for rain to dry in 
    that area, or it is before it is scheduled to rain or snow for the day, 
    or wind speed is within reason.
*/

        // Creating layout and structuring data.
// Homepage will ask user which way they plan on using the site.
    // The view: a 50/50 split showing an example of what will be displayed.
    // A description of what the two modes are for.
    // The data: the decision (true or false) of skater mode.
// If false user is brought to the normal weather html page.
// If true user is brought to the skater mode html page.
// All views are done within three pages.
// The data will be modularized in this form:
        // Getting positional data based on input, will be used for both pages.
        // Making API call for today's general weather conditions.


