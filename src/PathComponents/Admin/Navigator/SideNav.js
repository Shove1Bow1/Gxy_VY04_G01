import React from "react";
import {  Link  } from "react-router-dom";
import Rules from "./Manager/Rules";
import Services from "./Manager/Services";
const TopNav=()=>{
    
    return (
        <div className="container-fluid sideNav" style={{height:10+"%"}}>
            <div className="row h-100">
                <div className="col-0" id="green">
                    <div className="listPath">
                        <Link to="/Admin/Rules" style={{ color: "white" }} className="pathName">Rules</Link>
                    </div>
                    <div className="listPath">
                        <Link to="/Admin/Services" style={{ color: "white" }} className="pathName">Services</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopNav;