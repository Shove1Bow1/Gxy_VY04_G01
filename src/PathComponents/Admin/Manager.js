import React from "react";
import SideNav from "./Navigator/SideNav";
import { Routes,Route, useLocation  } from "react-router-dom";
import Rules from "./Manager/Rules";
import Services from "./Manager/Services";
import Home from "./Manager/Home";
import TopNav from "./Navigator/TopNav";

import "./nav.css"
import EditService from "./Manager/EditService";
const Homepage=()=>{
    var EditLink;
    const location=useLocation();
    async function StayLogin(){
        const res=await fetch("http://localhost:8020/Admin/Login");
        const data=res.json();                      
        return data;
    }
    if(location.state===null){
        EditLink="/Services/EditService";
    }
    else{  
        const id = location.state;
        EditLink = "/Services/" + id + "/EditService";
        console.log(EditLink)
    }
    
    return (
        <div className="container-fluid HomePage" style={{width:80+"%"}}>  
                <div>
                    <TopNav/>
                </div>
                <div className="row" >
                    <div className="col-lg-2">
                           <SideNav />
                    </div>
                    <div className="col-lg-8"style={{marginTop:20 +"px"}}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/Rules" element={<Rules />} />
                            <Route path="/Services/" element={<Services />} />
                            <Route path={EditLink} element={<EditService/>}/>
                        </Routes>
                    </div>
                </div>
        </div>
       
        
    )
}
export default Homepage;