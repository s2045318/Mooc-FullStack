import countryService from './services/REST_Countries'
import weatherService from './services/Weather_API'
import {useState, useEffect} from 'react'

const App = () => {
  const [sv, setSV] = useState('');
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState()

  const handleSVChange = (event) => {
    console.log(event.target.value)
    setSV(event.target.value)
    handleSearch(event.target.value)
  }
  
  const handleWeatherChange = (place) => {
    weatherService
      .get(place)
      .then(newWeather => {
        console.log('new weather: ', newWeather)
        setWeather(newWeather)
      })
      .catch(error => console.log('Error fetching weather data', error));
  }
  const handleSearch = (query) => {
    countryService
      .getAll()
      .then(allCountries => {
        console.log("REST interaction was Succesfull")
        const filtered = allCountries.filter(country => 
          country['name'].slice(0,query.length).toLowerCase() == query.toLowerCase())
        console.log(filtered)
        setCountries(filtered)
        console.log('Succesfully updated countries')

      })
      .catch(console.log('Not able to access the REST API'))
  }

  return (
    <div>
      <Form handleSearch={handleSearch} handleSVChange = {handleSVChange} sv = {sv}/>
      <Results countries={countries}  handleSearch={handleSearch} handleWeatherChange={handleWeatherChange} weather={weather}/>
    </div>
  );
  }

const Form = ({handleSVChange, sv}) => {
  return (
    <form >
      <div>find countries <input value={sv} onChange={handleSVChange}/></div> 
    </form>

  )
}

const Results = ({countries, handleSearch, handleWeatherChange, weather}) => {
  const imgStyle = {
      width : 128
    }
  
  console.log(countries.length)
  if (countries.length == 0) return (<p>No matches found</p>)
  if (countries.length > 5) return (<p>Too many matches, specify another filter</p>)
  if (countries.length == 1) {
    const country = countries[0]
    console.log(country.name)
    handleWeatherChange(country.capital)
    return (
      <div>
        <h1>{country.name}</h1>
        <p>capital: {country.capital}</p>
        <p>area: {country.area}</p>
        <Languages languages={country.languages}/>
        <img src={country.flag} style={imgStyle}></img>
        <p>temperature (celcius){weather.current}</p>
      </div>
    )
  }
  return (
    <div>
      {countries.map(country =>(
        <>
         <p>{country.name} <button onClick={() => handleSearch(country.name)}>show</button> </p>
        </>  
      ) )}
    </div>
  )
}

const Languages = ({languages}) => {
  console.log(languages)
  return (
    <div>
      <h3>Languages</h3>
      <ul>
        {languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
    </div>
  )
}
export default App;
