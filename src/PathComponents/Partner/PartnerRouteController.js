import React from "react";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import '../../App.css';
import Register from "./Register/GroupRegister";
import Login from "./Login/Login";
import Homepage from "./Homepage/Homepage"
import "./PartnerRegisterAndLogin.css";
const PartnerRouteController=()=>{
    return(
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
        </Routes> 
    )
}
export default PartnerRouteController;