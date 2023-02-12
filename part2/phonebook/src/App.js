import {useState, useEffect} from 'react'
import axios from 'axios'
import Contact from './components/Contact'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newContactName, setNewContactName] = useState('')
  const [newContactNumber, setNewContactNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fullfilled')
        setPersons(response.data)})
  },[])
  console.log('render ', persons.length)

  const addContact = (event) => {
    event.preventDefault()
    const contact = {
      name : newContactName,
      number : newContactNumber,
      id : persons.length + 1
    }
    if (persons.some(value => value.name === contact.name)) {
      console.log("already in my records");
      setNewContactName('')
      setNewContactNumber('')
      alert(`${contact.name} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat(contact))
      setNewContactName('')
      setNewContactNumber('')
      console.log(persons)
    }
  }
  const handleNewContactNameChange = (event) => {
    console.log(event.target.value)
    setNewContactName(event.target.value)
  }
  const handleNewContactNumberChange = (event) => {
    console.log(event.target.value)
    setNewContactNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newContactName} onChange={handleNewContactNameChange}/></div>
        <div>number: <input value = {newContactNumber} onChange ={handleNewContactNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(contact => <Contact key={contact.id} name={contact.name} number={contact.number}/>)}
    </div>
  )
}




export default App