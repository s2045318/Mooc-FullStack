import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas'}
  ]) 
  const [newContact, setNewContact] = useState('')
  const addContact = (event) => {
    event.preventDefault()
    const contact = {
      name : newContact
    }
    if (persons.some(value => value.name === contact.name)) {
      console.log("already in my records");
      setNewContact('');
      alert(`${contact.name} is already added to the phonebook`)
    }
    else {
      setPersons(persons.concat(contact))
      setNewContact('')
      console.log(persons)
    }
  }
  const handleNewContactChange = (event) => {
    console.log(event.target.value)
    setNewContact(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: 
          <input  
             value={newContact}
             onChange={handleNewContactChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(contact => <Person person={contact} />)}
    </div>
  )
}

const Person = ({person}) => {
  const name = person.name
  return (
    <>
      <p>{name} <br/></p>
    </>
  )
}



export default App