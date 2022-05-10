import { FaCog, FaPowerOff, FaTag, FaCoins, FaCreditCard, FaBell, FaClipboardList } from "react-icons/fa";
import { GrNotes, } from "react-icons/gr";
import { BsPeople } from "react-icons/bs";
import './navbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
function Navbar(prop) {
    return(
        <div className='card offset-md-2 col-md-2'>
            <form>
                <div className="list-group">
                    <ul className="navbar-nav">
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
                        <li><Link to='/' className="list-group-item list-group-item-action">
                            <FaPowerOff />
                            <span>Đang Đăng Xuất</span></Link>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}
export default Navbar;