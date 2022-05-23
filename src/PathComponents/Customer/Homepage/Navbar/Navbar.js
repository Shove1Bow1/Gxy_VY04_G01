// Module and component
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { slide as Menu } from 'react-burger-menu';
import axios from "axios";
import {useCookies} from 'react-cookie';
// Css
import "./NavDropdown.css";
import "./Navbar.css";


const Navbar = () => {
  const [getCustomerName,setCustomerName]=useState("");
  const [getCookies,setCookies]=useCookies();
  useEffect(() => {
    if (getCookies.Customer&&!getCustomerName) {
      axios.post("http://localhost:8020/Customer/getCustomerName", {
        TOKEN: getCookies.Customer,
      }).then(res => {
        setCustomerName(res.data.CUSTOMER_NAME);
        console.log(getCustomerName);
      })
    }
  })
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu>
          <a className="menu-item" href="#">
            Trang chủ
          </a>
          <a className="menu-item" href="/">
            Đặt chỗ của tôi
          </a>
          <a className="menu-item" href="/">
            Hộp thư của tôi
          </a>
          <a className="menu-item" href="/">
            Hợp tác với chúng tôi
          </a>
          <a className="menu-item" href="/">
            Vé máy bay
          </a>
          <a className="menu-item" href="/">
            Khách sạn
          </a>
          <a className="menu-item" href="/">
            Combo tiết kiệm
          </a>
          <a className="menu-item" href="/">
            Đưa đón sân bay
          </a>
          <a className="menu-item" href="/">
            Xperience
          </a>
          <a className="menu-item" href="/">
            Cho thuê xe
          </a>
          <a className="menu-item" href="/">
            JR Pass
          </a>
      </Menu>
      <div className="Navbar">
        <span><img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"></img></span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/Partner">Hợp tác với chúng tôi</a>
          <a href="/">Đặt chỗ của tôi</a>
          <a href="/">VND</a>
          {!getCustomerName&&!getCookies.Customer?
            <>
              <Link to="/login"><a>Đăng nhập</a></Link>
              <Link to="/Register"><button className="btn">Đăng ký</button></Link>
            </>
            :
            <Link to="/Profile">
                <img src={require("./login.png")} width="40" height="40" />
                <span style={{marginLeft:"10px"}}>Xin chào, {getCustomerName}</span>
            </Link>
          }
         
        </div>
      </div>
      <div className="navbar-small">
        <div className="nav-items-small">
          <select style={{ boxShadow: "none", border: "0", marginRight: "20px" }}>
            <option selected >Vận chuyển</option>
            <option >Vé máy bay</option>
            <option >Combo tiết kiệm</option>
            <option >Cho thuê xe</option>
          </select>
          <select style={{ boxShadow: "none", border: "0", marginRight: "20px" }}>
            <option selected >Chổ ở</option>
            <option >Khách sạn</option>
            <option >Combo tiết kiệm</option>
            <option >Khách sạn các ly</option>
          </select>
          <select style={{ boxShadow: "none", border: "0", marginRight: "20px" }}>
            <option selected >Hoạt động và giải trí</option>
            <option >Xperience</option>
          </select>
          <select style={{ boxShadow: "none", border: "0" }}>
            <option selected >Sản phẩm bổ sung</option>
            <option >Điểm thưởng của tôi</option>
            <option >Phiếu quà tặng</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;
