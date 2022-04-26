import React, { Fragment } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css';
import Homepage from './Homepage/Homepage';
import Login from './Login/LoginController'
import Register from './Register/Register';
import Profile from './Profile/ProfileController';
const App = () => {
  return (
    <div>
      <Routes> 
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Login/*' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>} />
        <Route path='/Profile/*' element={<Profile/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
