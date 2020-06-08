const General_Weather = require('./General_Weather');
const Skater_Weather = require('./Skater_Weather');


const gw = new General_Weather(11, 'Feb 24th', 8.3, '84 F', '60%', 9.7);
const sw = new Skater_Weather();

console.log(gw);
console.log(sw);