import React from "react";
import SideNav from "./SideNav";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Rules from "./Manager/Rules";
import Services from "./Manager/Services";
import Home from "./Manager/Home";
import TopNav from "./TopNav";
const Homepage=()=>{
    return (
        <div className="container-fluid" style={{width:80+"%"}}>  
            <Router>
                <div className="row">
                    <div>
                        <TopNav/>
                    </div>
                    <div className="col-lg-2">
                           <SideNav />
                    </div>
                    <div className="col-lg-8">
                        <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Rules" element={<Rules />} />
                        <Route path="/Services" element={<Services />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
       
        
    )
}
export default Homepage;