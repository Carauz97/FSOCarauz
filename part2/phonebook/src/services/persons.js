
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


const update = (id, updatedPerson) =>{
  return axios.put(`${apiUrl}/${id}`,updatedPerson)
}

const supr = (id) =>{
return axios.delete(`${apiUrl}/${id}`)
}




export default {getAll,create,update,supr}


