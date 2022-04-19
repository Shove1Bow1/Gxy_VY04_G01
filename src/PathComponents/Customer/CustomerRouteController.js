import React, { Fragment } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css';
import LoginController from './Login/LoginController'
import DangKyKH from './Register/DangKyKH';

const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path='/DangNhap/*' element={<LoginController />}></Route>
        <Route path='/DangKy' element={<DangKyKH />} />
      </Routes>
    </div>
    
  );
}

export default App;
