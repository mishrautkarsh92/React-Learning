import axios from 'axios';

class TodoDataService {
     retrieveAllTodos(name){
         return axios.get(`http://localhost:8080/todo/${name}/todos`)
     }

     deleteTodo(name, id){
         return axios.delete(`http://localhost:8080/todo/${name}/todos/${id}`)
     }

     retrieveTodo(name, id){
        return axios.get(`http://localhost:8080/todo/${name}/todos/${id}`)
     }

     updateTodo(name, id, todo){
         return axios.put(`http://localhost:8080/todo/${name}/todos/${id}`, todo)
     }

     insertTodo(name, todo){
         return  axios.post(`http://localhost:8080/todo/${name}/todos`, todo)
     }

}

export default new TodoDataService();