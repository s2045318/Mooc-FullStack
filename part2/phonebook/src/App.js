import {useState, useEffect} from 'react'
import axios from 'axios'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newContact, setNewContact] = useState(['',''])

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(intialPersons => {
        console.log('promise fullfilled')
        setPersons(intialPersons)})
  },[])

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
      return 
    }
    personService
      .create(contact)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewContact(['',''])
        console.log('boo!! Note added')
      })

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
      <Form newContact={newContact} handleNewContactNameChange={handleNewContactNameChange}
            handleNewContactNumberChange={handleNewContactNumberChange } addContact={addContact}/>
      <h2>Numbers</h2>
      {persons.map(contact => <Contact id={contact.id} name={contact.name} deletePerson = {personService.deletePerson()} number={contact.number} />)}
    </div>
  )
}

const Form = ({ newContact, handleNewContactNameChange, handleNewContactNumberChange, addContact }) => (
  <form onSubmit={addContact}>
    <div>name: <input value={newContact[0]} onChange={handleNewContactNameChange}/></div>
    <div>number: <input value={newContact[1]} onChange={handleNewContactNumberChange}/></div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const Contact = (props) => {
  const name = props.name
  const number = props.number
  const handleDelete = () => {
      personService.deletePerson(props.id)
  }
  return (
      <p>{name} 
          {number} 
          <button onClick={handleDelete}>delete</button>
          <br/>
      </p>
  )
} 



export default App