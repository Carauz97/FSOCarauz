import { useState } from 'react'
import personServices from '/src/services/persons.js'



/*this panel can help u to add a new entry to phonebook  */
const AddPanel = (props) => {
    const [screenMessage, setScreenMessage] = useState(null)

    const persons = props.persons
    const setPersonstoShow = props.setFilteredPersons
    const setPersons = props.setPersons


    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')

    const Notification = ({ message }) => {

        if (message === null) return null


        return (

            <div className='sucess'>
                <p >` {message}`</p>
            </div>
        )
    }
    const onChangeNewName = e => {
        console.log(e.target.value);

        setNewName(e.target.value)
    }


    const onChangeNewNumber = e => {
        console.log(e.target.value);
        setNewNum(e.target.value)
    }


    const handleAddPerson = e => {
        e.preventDefault()

        const newPerson = {
            id: persons.length + 1,
            name: newName,
            number: newNum,
        }

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

                personServices.create(newPerson).then(personsObj => {

                    setPersonstoShow(persons.concat(personsObj))
                    setPersons(persons.concat(personsObj))
                    console.log(`${newName} has been added!`);
                }).then(
                    setScreenMessage(`${newName} was added sucessfuly.`),
                    setTimeout(() => {
                        setScreenMessage(null)
                    }, 3000)
                ).catch(error => console.error('Error:', error.message))

                break;
        }


    }

    return (

        <>
            <Notification message={screenMessage} />
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
        </>)
}



export default AddPanel;

