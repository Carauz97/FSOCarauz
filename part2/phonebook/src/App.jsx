import { useState } from 'react'
import AddPanel from './modules/AddPanel'
import Search from './modules/Search'
import Phonebook from './modules/Phonebook'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [personstoShow, setPersonstoShow] = useState(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPanel {...{ persons, setPersons, setPersonstoShow }}></AddPanel>
      <h2>Filter</h2>
      <Search {...{ persons, setPersonstoShow }}></Search>
      <h2>Persons</h2>
      <div>Saved: {persons.length}</div>
      <Phonebook personstoShow={personstoShow}></Phonebook>
    </div>
  )
}

export default App