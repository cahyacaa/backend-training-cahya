var url = 'https://ipinfo.io'
var request = require('request');

function getLocation() {
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

module.exports = getLocation