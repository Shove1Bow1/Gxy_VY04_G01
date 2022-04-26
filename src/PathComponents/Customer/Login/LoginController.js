import React from "react";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Login from "./Login";
import "./Login.css";
import LoginEmail from "./Email";
import LoginTell from "./Tellephone";
import LoginOtp from "./TellephoneOtp";
import '../App.css';

const AppLogin=()=>{
    return(
        <div>
            <Login />
            <Routes>
                <Route path='/' element={<LoginEmail />} />
                <Route path='/Tellephone' element={<LoginTell />} />
                <Route path='/TellephoneOtp' element={<LoginOtp />} />
            </Routes>
        </div>
           
         
    )
}
export default AppLogin;