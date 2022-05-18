import React, { Fragment, useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router,Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom'
import './App.css';
import Homepage from './Homepage/Homepage';
import Login from './Login/LoginController'
import Register from './Register/Register';
import Profile from './Profile/ProfileController';
import FooterCustomer from './Homepage/Footer/FooterCustomer';
import Sidebar from './Homepage/SideBar/Sidebar.js';
import axios from 'axios';
import { AuthContext } from '../../Auth/SessionCustomer';
const App = () => { 
  const { CUSTOMER_TOKEN,CUSTOMER_ID,CUSTOMER_NAME } = useContext(AuthContext);
  const ProtectedRoute=({children})=>{
    if (!CUSTOMER_TOKEN&&!CUSTOMER_ID&&!CUSTOMER_NAME) {
      return <Navigate to="/" />;
    }
    return children;
  }
  const RouteForLogin=({children})=>{
    console.log(CUSTOMER_TOKEN);
    if (CUSTOMER_TOKEN&&CUSTOMER_ID&&CUSTOMER_NAME) {
      return <Navigate to="/" />;
    }
    return children;
  }
  const navigate=useNavigate();
  const setLocation=useLocation();
  const [getToken,setToken]=useState("null");
  const [getUserID,setUserID]=useState("");
  const [getUserName,setUserName]=useState("");
  return (
    <>
      <Sidebar />
      <div style={{ position: "relative" }}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Login/*' element={
            <RouteForLogin>
              <Login />
            </RouteForLogin>
          } />
          <Route path='/Register' element={<Register />} />
          <Route path='/Profile/*' element={
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>} />
        </Routes>
      </div>
      <FooterCustomer />
    </>
  );
}

export default App;
