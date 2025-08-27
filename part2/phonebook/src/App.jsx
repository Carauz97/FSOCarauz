import { useState } from 'react'
import AddPanel from './modules/AddPanel'
import Search from './modules/Search'
import Phonebook from './modules/Phonebook'
import personServices from '/src/services/persons'
import { useEffect } from 'react'
import "./index.css"






const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])


  console.log('rendered App ')


  useEffect(() => {

    personServices.getAll().then(persons => {
      setPersons(persons)
      setFilteredPersons(persons)
      console.log('rendered Phonebook', persons)
    }).catch(error => console.error('error:', error.message))

  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPanel {...{ persons, setPersons, setFilteredPersons }}></AddPanel>
      <h2>Filter</h2>
      <Search {...{ persons, setFilteredPersons }}></Search>
      <h2>Persons</h2>
      <div>Saved: {persons.length}</div>
      <Phonebook personstoShow={filteredPersons}></Phonebook>
    </div>
  )
}

export default App