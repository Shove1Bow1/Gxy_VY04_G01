import axios from "axios";
import React,{useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import { Navigate,useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import "./style.css";
export default function GeneralProfile(){
    const navigate=useNavigate();
    const [isShow, setShow] = useState(false);
    const [getCookies,setCookies,removeCookie]=useCookies(["Partner"]);
    const [getServiceLink,setServiceLink]=useState([]);
    const [getPartnerName,setPartnerName]=useState([]);
    useEffect(()=>{
        axios.post("http://localhost:8020/Partner/getServices",{
            TOKEN:getCookies.Partner,
        }).then(res=>{
            setServiceLink(res.data.APP_SERVICE);
        })
        axios.post("http://localhost:8020/Partner/getPartnerInfo",{
            TOKEN:getCookies.Partner,
        }).then(res=>{
            setPartnerName(res.data.PARTNER_NAME);
        })
    },[])
    function SignOut(){
        setCookies("Partner",null,{path:"/"});
        console.log(getCookies);
        navigate("/Partner");
    }
    return(
        <>
            <div id="wrapper" className={isShow ? "toggled" : null}>
                <div class="overlay" style={isShow ? {} : { display: "none" }}></div>
                <nav class="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
                    <ul class="nav sidebar-nav">
                        <div class="sidebar-header">
                            <div class="sidebar-brand">
                                <a href="#">Brand</a></div></div>
                                {
                                    getServiceLink.map((item)=>{
                                        return(
                                            <li><a href={item.LINK} style={{textAlign:"start"}}>{item.APP_NAME}</a></li>
                                        )
                                    })
                                }
                      
                        {/* <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Apart</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Hotel</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Car Rentals</a></li>
                        <li><a href={`https://voucher.votuan.xyz/partner/auth?token=${getCookies.Partner}&appId=vy04`} style={{textAlign:"start"}}>Voucher</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Combo</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Eats</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Xperience</a></li>
                        <li><a href="/Partner/Profile" style={{textAlign:"start"}}>Airport</a></li> */}
                        <button onClick={()=>SignOut()}>Signout</button>
                    </ul> 
                </nav>  
                <div id="page-content-wrapper">
                    <button type="button" class={isShow ? "hamburger animated fadeInLeft is-open" : "hamburger animated fadeInLeft is-closed"} onClick={() => setShow(!isShow)} data-toggle="offcanvas">
                        <span class="hamb-top"></span>
                        <span class="hamb-middle"></span>
                        <span class="hamb-bottom"></span>
                    </button>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-lg-offset-2">
                               <h1>Welcome, Partner {getPartnerName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}