import './App.css';
import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Details from './Components/Details/Details.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path= "/" component={LandingPage}></Route>
      <Route path= "/Home" component={Home}></Route>
      <Route path= "/Details/:id" component={Details}></Route>
    </div>
  )
}

export default App;
