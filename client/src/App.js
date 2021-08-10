import './App.css';
import React from 'react';
import Nav from './Components/NavBar/Nav.jsx'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav>     
        <Route path= "/dogs" />
        <Route path= "/dog"/>
        <Route path= "/temperament"/>
      </Nav>
      <h1>Henry Dogs</h1>
    </div>
  );
}

export default App;
