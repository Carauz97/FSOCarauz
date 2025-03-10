import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])



  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [newSearch, setSearch] = useState('')
  const [personstoShow, setPersonstoShow] = useState(persons)


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

  const onChangeSearch = e => {

    console.log(e.target.value)
    const searchValue = e.target.value



    setSearch(searchValue)

    const search = searchValue.trim() === '' ? persons : persons.filter(person => person.name.toLowerCase() === searchValue.toLowerCase())
    setPersonstoShow(search)

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

      Search:  <input onChange={onChangeSearch} value={newSearch} />
      <table>


        <tbody>
          <tr>
            <td>Name</td>
            <td>Number</td>
          </tr>
          {personstoShow.map((person) => (
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