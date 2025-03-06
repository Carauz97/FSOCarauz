import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Pink Panther',
      number: '00187585144961'
    },
    {
      id: 2,
      name: 'camilo',
      number: '00187585146654'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const handleAddPerson = e => {
    e.preventDefault()

    const similar = persons.filter(person => person.name === newName)

    let error = 0;

    if (similar.length > 0) {
      error = 1

    } else if (newName.trim() === '' || newNum.trim() === '') {
      error = 2
    }


    switch (error) {
      case 1: alert(`${newName} already exist, please try another.`)

        break;
      case 2: alert(`The field cannot be empty, please add the complete info.`)
        break;
      default:
        setPersons(persons.concat({
          id: persons.length + 1,
          name: newName,
          number: newNum,
        }))
        console.log(`${newName} has been added!`);


        break;
    }


  }

  const onChangeNewName = e => {
    console.log(e.target.value);

    setNewName(e.target.value)
  }


  const onChangeNewNumber = e => {
    console.log(e.target.value);

    setNewNum(e.target.value)
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
          number: <input onChange={onChangeNewNumber} value={newNum} /></div>
        <div>
          <button onClick={handleAddPerson} type="submit">add</button>
        </div>
      </form>
      <h2>Phonebook</h2>

      <table>


        <tbody>
          <tr>
            <td>Name</td>
            <td>Number</td>
          </tr>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.number}</td>
            </tr>))}


        </tbody>

      </table>

      <ul>

      </ul>
    </div>
  )
}

export default App