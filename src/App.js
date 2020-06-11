import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Nav from './Components/Nav'


function App() {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;
