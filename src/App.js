import React from 'react'
import './App.css';
import Todo  from './Components/Todo'
import Count from './Components/Count'

function App() {
  return (
    <div className="App">
      <Count />
      <Todo />
    </div>
  );
}

export default App;
