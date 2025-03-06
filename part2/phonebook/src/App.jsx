import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Pink Panther'
    },
    {
      id: 2,
      name: 'camilo'
    }
  ])
  const [newName, setNewName] = useState('')



  const handleAddPerson = e => {
    e.preventDefault()

    const similar = persons.filter(person => person.name === newName)

    let error = 0;

    if (similar.length > 0) {
      error = 1

    } else if (newName.trim() === '') {
      error = 2
    }


    switch (error) {
      case 1: alert(`${newName} already exist, please try another.`)

        break;
      case 2: alert(`The field cannot be empty, please entry a name`)
        break;
      default:
        setPersons(persons.concat({
          id: persons.length + 1,
          name: newName
        }))
        console.log(`${newName} has been added!`);
        
        
        break;
    }


  }

  const onChangeNewName = e => {
    console.log(e.target.value);
    
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
        {persons.map((person) => (<li key={person.id}>{person.name}</li>))}
      </ul>
    </div>
  )
}

export default App