import axios from 'axios'

const baseURL = 'http://api.weatherapi.com/v1/current.json?key=57b205b061484927a7a135035231602'

const get = (capital) => {
    const url = baseURL.concat(`&q=${capital}&aqi=no`).replace(' ', '')
    console.log(`reaching out to weather api for ${capital} at `, url)
    const request = axios.get(url)
    return request.then(response => response.data)

}

export default {
    get
}