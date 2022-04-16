import React from "react";
import SideNav from "./SideNav";
import { Routes,Route  } from "react-router-dom";
import Rules from "./Manager/Rules";
import Services from "./Manager/Services";
import Home from "./Manager/Home";
import TopNav from "./TopNav";

import "./nav.css"
const Homepage=()=>{
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
                            <Route path="/Services" element={<Services />} />
                        </Routes>
                    </div>
                </div>
        </div>
       
        
    )
}
export default Homepage;