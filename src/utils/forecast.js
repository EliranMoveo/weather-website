const request = require('request')
const forecast = (lat, lang, callback) => {
    const url = `https://api.darksky.net/forecast/b2d005dd2eb0237b1b4fd80f169e2b28/${lat},${lang}?units=si`
  
  
    request({
        url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Error!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const {
                temperature,
                precipProbability
            } = response.body.currently
            callback(undefined, {
                temperature,
                precipProbability
            })
        }
    })

}

module.exports = forecast