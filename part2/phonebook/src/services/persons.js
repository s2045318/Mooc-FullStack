import axios from 'axios'
const baseurl = '/api/persons'

const getAll = () => {
    console.log('getAll')
    const request =  axios.get(baseurl)
    console.log(request)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseurl, newObject)
    return request.then(response => response.data)
}

const update  = (id,newObject) => {
    const request =  axios.put(`${baseurl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    console.log(`${baseurl}/${id}`)
    axios.delete(`${baseurl}/${id}`)
    .then(() => console.log(`delete of ${id} successfull`))
    .catch((error => console.error(`Error in deletion of ${id}`)))
}
export default {
    getAll,
    create,
    update,
    deletePerson
}
