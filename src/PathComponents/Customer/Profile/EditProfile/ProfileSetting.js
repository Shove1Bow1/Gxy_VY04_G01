import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./navi.css";
import CustomerProfile from "./CustomerProfile";
import ChangePassword from "./ChangePassword";
import { Container } from 'react-bootstrap';

const ProfileSetting= () => {
    const [getPage,setPage]=useState(1);
    return (
        
            <div>
                <nav className='nav'>
                    <ul className='nav-link'>
                        <li>
                            <div className='navi.profile' onClick={()=>setPage(1)}>Thông tin tài khoản</div>
                        </li>
                        <li>
                            <div className='navi.pass' onClick={()=>setPage(2)}>Mật khẩu và bảo mật</div>
                        </li>
                    </ul>
                </nav>
                <div>
                    {getPage===1? <CustomerProfile />:null}
                    {getPage===2? <ChangePassword/>:null}
                </div>
            </div>
        
      
    )
}

export default ProfileSetting