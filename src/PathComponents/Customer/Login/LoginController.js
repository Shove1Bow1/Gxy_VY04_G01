import React from "react";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Login from "./Login";
import LoginEmail from "./LoginEmail";
import "./Login.css";
import LoginTell from "./LoginTell";
import LoginOtp from "./LoginOtp";
import '../../../App.css';

const AppLogin=()=>{
    return(
        <Router>
            <Login />
            <Routes>
                <Route path='/' element={<LoginEmail />} />
                <Route path='/loginemail' element={<LoginEmail />} />
                <Route path='/logintell' element={<LoginTell />} />
                <Route path='/otp' element={<LoginOtp />} />
            </Routes>
        </Router>
         
    )
}
export default AppLogin;