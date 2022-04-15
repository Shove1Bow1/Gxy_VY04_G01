import React from "react";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import '../../../App.css';
import Confirm from "./Confirm";
import DangKy from "./DangKy";
import DangKyFist from "./DangKyFist";
import DangNhapPartner from "./DangNhapPartner";
import DangNhapTell from "./DangNhapTell";
import EmailOtp from "./EmailOtp";
import "./PartnerRegister.css";
const Register=()=>{
    return(
        <Router >
            <div className="RouterPath">
                <DangKy />
                <Routes>
                    <Route path='/' element={<DangKyFist />} />
                    <Route path='/loginpar' element={<DangNhapPartner />} />
                    <Route path='/next1' element={<DangNhapTell />} />
                    <Route path='/next2' element={<EmailOtp />} />
                    <Route path='/next3' element={<Confirm />} />

                </Routes>
            </div>
        </Router>   
    )
}
export default Register;