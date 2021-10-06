const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=418dede9e720a1521f57905320a4278e&query='+ latitude + ',' + longitude 
    //const url = 'http://api.weatherstack.com/current?access_key=418dede9e720a1521f57905320a4278e&query=6.616865,3.508072&units=f'

    request ( {url, json: true}, (error,{ body } = {} ) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to locate the point', undefined)
        } else {
            callback(undefined, 
                body.current.weather_descriptions[0] + '. It is ' + body.current.temperature
                    + ' degrees inside but feels like ' + body.current.feelslike + ' degrees out.'
                    )

        }
    })
}

module.exports = forecast