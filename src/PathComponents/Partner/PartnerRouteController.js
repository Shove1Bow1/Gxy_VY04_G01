import React from "react";
import { BrowserRouter as Router,Routes,Route,Navigate,Link  } from "react-router-dom";
import {useCookies} from 'react-cookie';
import axios from 'axios';
// import '../../App.css';
import Register from "./Register/GroupRegister";
import Login from "./Login/Login";
import Homepage from "./Homepage/Homepage"
import GeneralProfile from "./GeneralProfile/GeneralProfile";
import SecondHomePage from "./SecondHomePage/SecondHomePage";
import "./SecondHomePage/ButtonEffect.css";
// import "./PartnerRegisterAndLogin.css";
const PartnerRouteController=()=>{
    const[getCookies,setCookies]=useCookies();
    function checkStatus(){
        var Status=false;
        if(getCookies.Customer){
          axios.post("http://localhost:8020/Partner/getStatus",{
            TOKEN:getCookies.Partner
          }).then(res=>{
            if(res.data.STATUS)
              Status=res.data.STATUS
          })
          if(Status){
            return true;
          }
        }
        return Status;
      }
    const RouteAuth = ({ children }) => {
        if (checkStatus()) {
          return <Navigate to="/" />;
        }
        return children;
      }
      const RouteNonAuthen = ({ children }) => {
        if (checkStatus()) {
          return <Navigate to="/" />;
        }
        return children;
      }
    return(
      <>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/SecondHomepage" element={<SecondHomePage />} />
          <Route path='/Login' element={
            <RouteNonAuthen>
              <Login />
            </RouteNonAuthen>
          } />
          <Route path='/Register' element={
            <RouteNonAuthen>
              <Register />
            </RouteNonAuthen>
          } />
          <Route path="/Profile" element={
            <RouteAuth>
              <GeneralProfile />
            </RouteAuth>
          } />
        </Routes>
      </>
    )
}
export default PartnerRouteController;