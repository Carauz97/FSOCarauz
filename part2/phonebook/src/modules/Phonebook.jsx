
const Phonebook = (props) => {

  const personstoShow = props.personstoShow

  const Person = (props) => {

    const person = props.person
    return (<tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>)
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Number</td>
        </tr>
        {personstoShow.map((person) => (
          <Person key={person.id} person={person}></Person>
        ))}
      </tbody>
    </table>
  )
}


export default Phonebook;
