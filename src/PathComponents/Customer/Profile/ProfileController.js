import React,{useContext,useState,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "./Navigator/NavbarInfo";
import ProfileSetting from "./EditProfile/ProfileSetting";
import CreditCard from "./CreditCard/CreditCardManager";
import Point from "./Point/App_Bouns_Points";
import "./ProfileController.css"
import {AuthContext} from '../../../Auth/SessionCustomer'
import axios from 'axios';
export default function ProfileController(){
   
    return (
        <div className="customer-profile-controller">
            <div className="customer-sidebar">
                <SideBar/>
            </div>
            <div style={{maxWidth:"100%",maxHeight:"800px"}}>
                <Routes>
                    <Route path="/" element={<ProfileSetting/>} />
                    <Route path="/Point" element={<Point />} />
                    <Route path="/Creditcard" element={<CreditCard />} />
                </Routes>
            </div>
        </div>
    )
}