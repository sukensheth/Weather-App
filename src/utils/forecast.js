const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6f9211cc9d80d33c16b66c90b1453daf&query='+ encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
    request({url:url, json:true},(error, response) => {
        if(error){
            callback('Error connecting to weatherstack', undefined)
        }   //else if(response.body.location.name === null){
            //callback('Coordinate error', undefined)
           else{
            callback(undefined, response.body.current.weather_descriptions[0]+':'+'It is currently '+response.body.current.temperature+' degrees. There is '+response.body.current.humidity+'% chances of rain')
        }
    })
// request({ url:url, json:true},(error,response)=>{
//     console.log("It is currently "+response.body.current.temperature+' degrees outside') 
// })
}

module.exports = forecast