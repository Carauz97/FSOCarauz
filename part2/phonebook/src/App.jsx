import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id:1,
      name: 'Pink Panther' }
  ]) 
  const [newName, setNewName] = useState('')



  const handleAddPerson = e =>{
    e.preventDefault()
    setPersons(persons.concat({
      id:persons.length+1,
      name:newName}))
  }

  const onChangeNewName = e =>{
    setNewName(e.target.value)
  }

  return (
    <div>
      <div>debug: {persons.length}</div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={onChangeNewName} value={newName} />
        </div>
        <div>
          <button onClick={handleAddPerson} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person)=>(<li key={person.id}>{person.name}</li>))}
      </ul>
    </div>
  )
}

export default App