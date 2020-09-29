import React, { Component } from 'react';
import TodoApp from './components/todo/todoapp.component';
import './App.css';
import './components/todo/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
