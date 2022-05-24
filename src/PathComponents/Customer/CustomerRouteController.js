/// Modules and component
import React, { Fragment, useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate,useParams } from 'react-router-dom'
import axios from 'axios';
import { useCookies } from "react-cookie";
/// Component
import Homepage from './Homepage/Homepage';
import Login from './Login/LoginController'
import Register from './Register/Register';
import Profile from './Profile/ProfileController';
import FooterCustomer from './Homepage/Footer/FooterCustomer';
import Navbar from "./Homepage/Navbar/Navbar";
/// Css
import './App.css';
const App = () => {
  const [getCookies, setCookies] = useCookies();
  const token=window.location.href;
  let getParram=token.split("/");
  console.log("Test "+getParram[3]);
  function checkStatus() {
    var Status = false;
    if (getCookies.Customer) {
          axios.post("https://gxyvy04g01backend-production.up.railway.app/Customer/getStatus", {
        TOKEN: getCookies.Customer
      }).then(res => {
        console.log(res.data.STATUS);
        if (res.data.STATUS){
           Status = res.data.STATUS;
           return Status;
        }
      })
    }
      return Status;
    }
  const RouteAuth = ({ children }) => {
    if (checkStatus()) {
      return children;
    }
    return <Navigate to="/" />;
  }
  const RouteNonAuth = ({ children }) => {
    if (!checkStatus()) {
      return children;
    }
    return <Navigate to="/" />;
  }
  return (
    <>
      <Navbar />
      <div style={{ position: "relative" }}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Login/*' element={
            <RouteNonAuth>
              <Login />
            </RouteNonAuth>
          } />
          <Route path='/Register' element={
            <RouteNonAuth>
              <Register />
            </RouteNonAuth>
          } />
          <Route path='/Profile/*' element={
            <RouteAuth>
              <Profile />
            </RouteAuth>
          } />
        </Routes>
      </div>
      <FooterCustomer />
    </>
  );
}
export default App;
