import React from 'react'
import './App.css';
import Todo  from './Components/Todo'
import Count from './Components/Count'
import State from './Components/State';
import List from './Components/List'

function App() {
  return (
    <div className="App">
      <Count />
      <Todo />
      <State />
      <List />
    </div>
  );
}

export default App;
