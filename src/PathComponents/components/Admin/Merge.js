import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Login";
import Homepage from "./Homepage";
function Render(){
    return(
        <Router>
            <Routes>
                <Route path="/Admin/Login" element={<Login/>}/>
                <Route path="/Admin/*" element={<Homepage/>}/>
            </Routes>
        </Router>
    )
}
export default Render;