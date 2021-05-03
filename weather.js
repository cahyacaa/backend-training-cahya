module.exports = function (location) {
    var request = require('request')
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1dcac472faf5a29eed5e2752c5352c55&q=+encodedLocation+&units=imperial`;
    request({
        url: url,
        json: true
    }, (error, res, body) => {
        if (error) {
            console.log('Unable to fetch data')
        } else {
            console.log(JSON.stringify(body, null, 4))
        }
    })
}