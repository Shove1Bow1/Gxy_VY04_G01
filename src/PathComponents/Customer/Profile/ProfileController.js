import React,{useContext,useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./Navigator/NavbarInfo";
import ProfileSetting from "./EditProfile/ProfileSetting";
import CreditCard from "./CreditCard/CreditCardManager";
import Point from "./Point/App_Bouns_Points";
import "./ProfileController.css"
export default function ProfileController(props){
    // console.log("controller "+props.value);
    var test=props.value;
    return (
        <div className="customer-profile-controller">
            <div className="customer-sidebar">
                <SideBar value={props.value}/>
            </div>
            <div style={{maxWidth:"100%",maxHeight:"800px"}}>
                <Routes>
                    <Route path="/" element={<ProfileSetting value={test}/>} />
                    <Route path="/Point" element={<Point value={props.value}/>} />
                    <Route path="/Creditcard" element={<CreditCard value={props.value}/>} />
                </Routes>
            </div>
        </div>
    )
}