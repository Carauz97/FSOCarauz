import { useEffect, useState } from 'react'
import AddPanel from './modules/AddPanel'
import Search from './modules/Search'
import Phonebook from './modules/Phonebook'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [personstoShow, setPersonstoShow] = useState(persons)



  const hook = () => {
console.log('data');

    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
        console.log('data',response.data);
      }).catch((error) => {
        console.error('Error fetching data:', error);
      });
   
  }
  console.log('rendered');
  useEffect(hook, [])

  useEffect(() => {
    setPersonstoShow(persons);
  }, [persons]);

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