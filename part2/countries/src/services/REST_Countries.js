import axios from 'axios'

const baseURL = 'https://restcountries.com/v2/all'

const getAll = () => {
    console.log('reaching out to REST API')
    const request =  axios.get(baseURL)
    return request.then(response => response.data)
}

export default {
    getAll
}