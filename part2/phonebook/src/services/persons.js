
import axios from 'axios'
const apiUrl = 'http://localhost:3001/persons';


const getAll = () =>{

const request = axios.get(apiUrl);


return request.then(response => response.data)

}


const create = newPerson =>{

    const request =axios.post(apiUrl,newPerson)
      return request.then(response =>response.data)
}




export default {getAll,create}


