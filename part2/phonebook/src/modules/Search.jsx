import { useState } from 'react'


/*a module used to show a specific persons displays in contact list.*/
const Search = (props) => {
    const [newSearch, setSearch] = useState('')
    const setPersonstoShow = props.setPersonstoShow
    const persons = props.persons



    const onChangeSearch = e => {

        console.log(e.target.value)
        const searchValue = e.target.value



        setSearch(searchValue)

        const search = searchValue.trim() === '' ? persons : persons.filter(person => person.name.toLowerCase() === searchValue.toLowerCase())
        setPersonstoShow(search)

    }
    return (
        <>   Search:  <input onChange={onChangeSearch} value={newSearch} /></>
    )
}

export default Search;