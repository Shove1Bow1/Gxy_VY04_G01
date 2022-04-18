import React, { Fragment } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import CustomerComponents from './Components'
import Password from './Password'
import Navbar from './NavbarInfo';


import './App.css';



const App = () => {


  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/Components' element={<CustomerComponents />} />
          <Route path='/Password' element={<Password />} />
        </Routes>
      </Router>
      <Navbar />
    </div>
    
  );
}

export default App;
