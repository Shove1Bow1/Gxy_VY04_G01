import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
const TopNav=()=>{
    return (
        <div className="TopNav container-fluid">
            <div className="row">
                <div className="col-sm">
                    <h5>Admin</h5>
                </div>
                <div className="col-sm" style={{ textAlign: "end", textDecoration:"inherit"}}>
                    <Link to="/Admin/Login" style={{textDecoration:"none"}}>
                        <h5><span><i className="fa fa-power-off" aria-hidden="true"></i> Log out</span></h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default TopNav;