import React, { Component } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm addTodo={(todo) => console.log(todo)} />
      </div>
    );
  }
}

export default App;
