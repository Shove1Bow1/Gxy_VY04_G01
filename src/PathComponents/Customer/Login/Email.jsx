import axios from "axios";
import {AuthContext} from "../../../Auth/SessionCustomer.js"
import React, { useContext, useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom"; 
const LoginEmail = () => {
    const {dispatch}=useContext(AuthContext);
    const [getEmail,setEmail]=useState("");
    const [getPassword,setPassword]=useState("");
    const [getPackage,setPackage]=useState([]);
    const [getAppId,setAppId]=useState("");
    const [getStatus,setStatus]=useState(false);
    const [getExpiredTime,setExpiredTime]=useState();
    const [getToken,setToken]=useState("");
    const [getCustomerId,setCustomerId]=useState('');
    const Navigate=useNavigate();
    function runScript(e){
      e.preventDefault();
      dispatch({type:"LOGIN_START"});
      try{
        axios.post("http://localhost:8020/Customer/LoginEmail", {
          CUSTOMER_EMAIL: getEmail,
          CUS_PASSWORD: getPassword,
        }).then((res) => res).then((data) => {
              setExpiredTime(data.data[0].EXPIRED_TIME);
              setCustomerId(data.data[0].CUSTOMER_ID);
              setStatus(data.data[0].STATUS);
              setToken(data.data[0].CUSTOMER_TOKEN);
              console.log(getCustomerId);
          axios.post("http://localhost:8020/Customer/getAppId").then(
          res1=>{setAppId(res1.data[0].APP_ID);
          console.log(typeof(data.data[0].CUSTOMER_ID));
          if (data.data[0].STATUS) {
            // dispatch({type:"LOGIN_SUCCESS",id:data.data[0].CUSTOMER_ID,token:data.data[0].CUSTOMER_TOKEN,name:data.data[0].CUSTOMER_NAME});
            // if(data.data[0])
            // Navigate("/");
            if(res1.data[0].APP_ID==="Profile"){
              // Navigate("/");
              
              axios.post("http://localhost:8020/Customer/getUserInfo",{
                APP_ID:res1.data[0].APP_ID,
                STATUS: data.data[0].STATUS,
                CUSTOMER_ID: data.data[0].CUSTOMER_ID,
                CUSTOMER_TOKEN: data.data[0].CUSTOMER_TOKEN,
                EXPIRED_TIME: data.data[0].EXPIRED_TIME,
              }).then(res=>res)
              window.close();
            }
            else{
              setExpiredTime(data.data[0].EXPIRED_TIME);
              setCustomerId(data.data[0].CUSTOMER_ID);
              setStatus(data.data[0].STATUS);
              setToken(data.data[0].CUSTOMER_TOKEN)
              axios.post("http://localhost:8020/Customer/getUserInfo",{
                APP_ID:getAppId,
                STATUS: getStatus,
                CUSTOMER_ID: getCustomerId,
                CUSTOMER_TOKEN: getToken,
                EXPIRED_TIME: getExpiredTime,
              }).then(res=>res)
              window.close();
            }
          }
        })});
      }
      catch(err){
        dispatch({ type: "LOGIN_FAILURE"});
      }
    }
    return(
      <section class="vh-100 " style={{ background: " #508bfc" }}>
        <div class="container-login py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div class="card-body p-5">
                  <h3 class="mb-5 text-center">Sign in</h3>
                  <div class="form-outline mb-4">
                    <label class="form-label text-left" for="typeEmailX-2">Email</label>
                    <input type="email" id="typeEmailX-2" value={getEmail} onChange={(e)=>setEmail(e.target.value)} class="form-control form-control-lg" />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label text-left" for="typePasswordX-2">Password</label>
                    <input type="password" id="typePasswordX-2" value={getPassword} onChange={(e)=>setPassword(e.target.value)} class="form-control form-control-lg" />
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div class="form-check d-flex justify-content-start mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                    &ensp;
                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                  </div>

                  <button class="btn btn-primary btn-lg btn-block button-size " onClick={runScript} type="submit">Login</button>

                  <hr class="my-4" />

                  <p class="text-left-2 "><Link to="/Login/Tellephone"><b class="colorlogo" >Use Phone Number</b></Link>&ensp;or&ensp;<Link to="/Login/TellephoneOtp"><b class="colorlogo" >OTP</b></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default LoginEmail;