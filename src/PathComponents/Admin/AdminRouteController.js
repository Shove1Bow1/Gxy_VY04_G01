import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./Login/Login.js";
import Manager from "./Manager";
function Render(){
    return(
        <Router>
            <Routes>
                <Route path="/Admin/Login" element={<Login/>}/>
                <Route path="/Admin/*" element={<Manager/>}/>
            </Routes>
        </Router>
    )
}
export default Render;