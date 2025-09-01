import personServices from '/src/services/persons.js'

const Person = (props) => {


  const person = props.person
  const filteredPersons = props.filteredPersons
  const setFilteredPersons = props.setFilteredPersons

  const delPersonsBtn = e => {
    e.preventDefault()
    if (window.confirm(`Do you really delete ${person.name} entry?`)) {
      personServices.supr(person.id).then(() => {
        console.log(`${person.name} was deleted`)
        const newList = filteredPersons.filter(personDel => personDel.id !== person.id)
        setFilteredPersons(newList)
        props.setPersons(newList)
      }).catch(error => {
        console.error(`Error deleting ${person.name}`, error)
      })
    }

  }

  return (<tr>
    <td>{person.name}</td>
    <td>{person.number}</td>
    <td><button onClick={delPersonsBtn}>Delete</button></td>
  </tr>)
}

const Phonebook = (props) => {



  const filteredPersons = props.filteredPersons
  const setFilteredPersons = props.setFilteredPersons
  const setPersons = props.setPersons

  return (
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Number</td>
          <td></td>
        </tr>
        {filteredPersons.map((person) => (
          <Person key={person.id} {... { person, setPersons, setFilteredPersons, filteredPersons }}></Person>
        ))}
      </tbody>
    </table>
  )
}


export default Phonebook;
