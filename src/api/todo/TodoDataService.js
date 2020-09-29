import axios from 'axios';

import {JPA_API_URL} from './constants';

class TodoDataService {
     retrieveAllTodos(name){
         return axios.get(`${JPA_API_URL}/todo/${name}/todos`)
     }

     deleteTodo(name, id){
         return axios.delete(`${JPA_API_URL}/todo/${name}/todos/${id}`)
     }

     retrieveTodo(name, id){
        return axios.get(`${JPA_API_URL}/todo/${name}/todos/${id}`)
     }

     updateTodo(name, id, todo){
         return axios.put(`${JPA_API_URL}/todo/${name}/todos/${id}`, todo)
     }

     insertTodo(name, todo){
         return  axios.post(`${JPA_API_URL}/todo/${name}/todos`, todo)
     }

}

export default new TodoDataService();