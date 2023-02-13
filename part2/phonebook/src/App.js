import {useState, useEffect} from 'react'
import axios from 'axios'
import Contact from './components/Contact'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newContact, setNewContact] = useState(['',''])


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
      name : newContact[0],
      number : newContact[1],
      id : persons.length + 1
    }
    if (persons.some(value => value.name === contact.name)) {
      console.log("already in my records");
      setNewContact(['',''])
      alert(`${contact.name} is already added to the phonebook`)
    }
    else {
      axios
        .post('http://localhost:3001/persons', contact)
        .then(response => {
        setPersons(persons.concat(response.data))
        setNewContact(['',''])
        })
      }
    
  }
  const handleNewContactNameChange = (event) => {
    console.log(event.target.value)
    setNewContact([event.target.value,newContact[1]])
  }
  const handleNewContactNumberChange = (event) => {
    console.log(event.target.value)
    setNewContact([newContact[0],event.target.value])
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newContact[0]} onChange={handleNewContactNameChange}/></div>
        <div>number: <input value = {newContact[1]} onChange ={handleNewContactNumberChange}/></div>
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