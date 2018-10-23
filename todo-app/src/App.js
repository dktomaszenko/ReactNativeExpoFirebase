import React, { Component } from 'react';
import './App.css';
import TodoItemHead from "./components/TodoItemHead";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItemHead />
      </div>
    );
  }
}

export default App;
