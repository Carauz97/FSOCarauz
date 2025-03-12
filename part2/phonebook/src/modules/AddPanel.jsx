import { useState } from 'react'

/*this panel can help u to add a new entry to phonebook  */
const AddPanel = (props) => {

    const persons = props.persons
    const setPersonstoShow = props.setPersonstoShow
    const setPersons = props.setPersons

    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')


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
                setPersonstoShow(persons.concat({
                    id: persons.length + 1,
                    name: newName,
                    number: newNum,
                }))
                console.log(`${newName} has been added!`);


                break;
        }


    }

    return (<form>
        <div>
            name: <input onChange={onChangeNewName} value={newName} />

        </div>
        <div>
            number: <input onChange={onChangeNewNumber} value={newNum} /></div>
        <div>
            <button onClick={handleAddPerson} type="submit">add</button>
        </div>
    </form>)

}



export default AddPanel;

