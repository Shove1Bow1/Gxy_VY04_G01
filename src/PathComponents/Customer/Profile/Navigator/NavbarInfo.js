import { FaCog, FaPowerOff, FaTag, FaCoins, FaCreditCard, FaBell, FaClipboardList } from "react-icons/fa";
import { GrNotes, } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import './navbar.css';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Auth/SessionCustomer";
import { useCookies } from "react-cookie";
export default function Navbar(prop) {
    const [getCookies,setCookie,removeCookies]=useCookies();
    function runScript(){
        removeCookies("Customer");
    }
    return (
        <div className='card offset-md-2 col-md-2'>
            <div className="list-group">
                <ul className="navbar-nav">
                    <li className="list-group-item list-group-item-action customize-li">

                    </li>
                    <li><Link to='/Profile/Point' className="list-group-item list-group-item-action">
                        <FaCoins />
                        <span>Điểm thưởng của tôi</span></Link>
                    </li>
                    <li><Link to='/Profile/CreditCard' className="list-group-item list-group-item-action">
                        <FaCreditCard />
                        <span>Thẻ của tôi</span></Link>
                    </li>
                    <hr></hr>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                        <FaClipboardList />
                        <span>Đặt chổ của tôi</span></Link>
                    </li>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                        <GrNotes />
                        <span>Danh sách giao dịch</span></Link>
                    </li>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                        <FaBell />
                        <span>Thông báo giá vé máy bay</span></Link>
                    </li>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                        <BsPeople />
                        <span>Passenger Quick Pick</span></Link>
                    </li>
                    <li><Link to="/" className="list-group-item list-group-item-action">
                        <FaTag />
                        <span>Khuyến mãi</span></Link>
                    </li>
                    <li><Link to='/Profile' className="list-group-item list-group-item-action">
                        <FaCog />
                        <span>Tài Khoản</span></Link>
                    </li>
                    <li onClick={()=>runScript()}><a href="/" className="list-group-item list-group-item-action" >
                        <FaPowerOff />
                            <span >Đăng Xuất</span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
