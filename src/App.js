import React from 'react'
import './App.css';
import Todo  from './Components/Todo'
import Count from './Components/Count'
import State from './Components/State';

function App() {
  return (
    <div className="App">
      <Count />
      <Todo />
      <State />
      
    </div>
  );
}

export default App;
