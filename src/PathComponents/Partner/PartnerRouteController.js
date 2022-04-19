import React from "react";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import '../../App.css';
import Confirm from "./DangKy/confirm.png";
import Title from "./DangKy/TieuDe"
import DangKy1 from "./DangKy/Buoc1";
import DangKy2 from "./DangKy/Buoc2";
import DangNhapPartner from "./DangNhap/DangNhapTK";
import DangKy3 from "./DangKy/Buoc3";
import DangKy4 from "./DangKy/Buoc4";
import "./PartnerRegister.css";
const Register=()=>{
    return(
        <div>     
                <Title />
                <Routes>
                    <Route path='/DangNhap' element={<DangNhapPartner />} />    
                    <Route path='/DangKy/next1' element={<DangKy1 />} />
                    <Route path='/DangKy/next2' element={<DangKy2 />} />
                    <Route path='/DangKy/next3' element={<DangKy3 />} />
                    <Route path='/DangKy/next4' element={<DangKy4 />} />
                </Routes> 
        </div>   
    )
}
export default Register;