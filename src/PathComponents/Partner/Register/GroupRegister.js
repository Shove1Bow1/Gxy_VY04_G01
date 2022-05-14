import React, { useState } from "react";
import axios from "axios";
import Title from "./Title";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
// import '../PartnerRegisterAndLogin.css'
export default function PartnerRegister(){
    const [getPageId,setPageId]=useState(1);
    const [getEmail,setEmail]=useState("");
    const [getFirstname,setFirstname]=useState("");
    const [getLastname,setLastname]=useState("");
    const [getAppID,setAppID]=useState("");
    const [getPassword,setPassword]=useState("");
    const [getPasswordConfirm,setPasswordConfirm]=useState("");
    const [getValidatePassword,setValidatePassword]=useState("");
    console.log(getEmail);
    console.log(getFirstname);
    console.log(getLastname);
    console.log(getPassword);
    function RegisterToDatabase(){
        axios.post("https://gxyvy04g01backend-production.up.railway.app/Partner/Register",{
            PARTNER_EMAIL: getEmail,
            PARTNER_PASSWORD: getPassword,
            PARTNER_NAME: getLastname,
            APP_ID:getAppID,
        }).then((response)=>{console.log(response)});
    }
    return (
        <div>
            <Title/>
            {getPageId===1?<Step1 onPage={setPageId} getEmail={getEmail} getAppID={getAppID} onEmail={setEmail} onAppId={setAppID}/>:null}
            {getPageId===2?<Step2 onPage={setPageId} getFirstName={getFirstname} getLastName={getLastname} onFirstName={setFirstname} onLastName={setLastname}/>:null}
            {getPageId===3?<Step3 onPage={setPageId} getPassword={getPassword} onPassword={setPassword} onClick={RegisterToDatabase}/>:null}
            {getPageId===4?<Step4 onPage={setPageId} />:null}
        </div>
    )
}