import React from "react";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import "./Bouns_Points.css";
import MyBounsPoints from "./My_Bouns_Points";

const AppBounsPoints = ()=>{
    return(
            // <Router>
            //     <Login />
            //     <Routes>
            //     <Route path='/' element={<LoginEmail />} />
            //     <Route path='/loginemail' element={<LoginEmail />} />
            //     <Route path='/logintell' element={<LoginTell />} />
            //     <Route path='/otp' element={<LoginOtp />} />
            //     </Routes>
            // </Router>
            <div>
                <MyBounsPoints/>
            </div>
         
    )
}
export default AppBounsPoints;