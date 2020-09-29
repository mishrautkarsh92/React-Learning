import React, { Component } from 'react';
import moment from 'moment';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationUtils from '../todo/authentication.utils';
class TodosComponent extends Component {
    constructor() {
        super()

        this.state = {
            todos: [],
            message: null
        }
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount called')
        this.refreshTodo()
    }

    refreshTodo() {
        let username = AuthenticationUtils.getLoggedInUser();
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    this.setState({ todos: response.data })
                }
            )
    }

    handleRemoveTodo(id) {
        let username = AuthenticationUtils.getLoggedInUser();
        TodoDataService.deleteTodo(username, id)
            .then(
                response =>{
                    this.setState({ message: `Item with ${id} deleted successfully` })
                    this.refreshTodo()
                }
            )
    }

    handleUpdateTodo(id) {
        console.log('update todo called');
        this.props.history.push(`/todos/${id}`)
    }

    handleAddTodo() {
        console.log('Add todo called');
        this.props.history.push(`/todos/-1`)
    }

    render() {
        return (
            <div>
                <h1>Todo Items</h1>
                {this.state.message &&  <div className='alert alert-success'>{this.state.message}</div>}
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>IsCompleted?</th>
                                <th>Target date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.completed.toString()}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td><button className='btn btn-success' onClick={() => this.handleUpdateTodo(todo.id)}>Update</button></td>
                                        <td><button className='btn btn-warning' onClick={() => this.handleRemoveTodo(todo.id)}>Delete</button></td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                    <div className='row'>
                        <button className = 'btn btn-success' onClick={this.handleAddTodo}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default TodosComponent;