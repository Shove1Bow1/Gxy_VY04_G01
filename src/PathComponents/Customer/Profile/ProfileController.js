import React,{useContext,useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import SideBar from "./Navigator/NavbarInfo";
import ProfileSetting from "./EditProfile/ProfileSetting";
import CreditCard from "./CreditCard/CreditCardManager";
import Point from "./Point/App_Bouns_Points";
import "./ProfileController.css"
import HistoryTransaction from "./HistoryTransaction/HistoryTransaction";
export default function ProfileController(props){
    return (
        <div className="customer-profile-controller" style={{heigh:"1000px"}}>
            <div className="customer-sidebar">
                <SideBar/>
            </div>
            <div style={{Width:"50%",Height:"800px"}}>
                <Routes>
                    <Route path="/" element={<ProfileSetting/>} />
                    <Route path="/Point" element={<Point/>} />
                    <Route path="/Creditcard" element={<CreditCard/>} />
                    <Route path="/HistoryTransaction" element={<HistoryTransaction/>}/>
                </Routes>
            </div>
        </div>
    )
}