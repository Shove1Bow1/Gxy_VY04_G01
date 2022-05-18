import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./navi.css";
import CustomerProfile from "./CustomerProfile";
import ChangePassword from "./ChangePassword";
import { Container } from 'react-bootstrap';
import {AuthContext} from '../../../../Auth/SessionCustomer'
const ProfileSetting= (props) => {
    const [getPage,setPage]=useState(1);
    const {CUSTOMER_TOKEN,CUSTOMER_ID,CUSTOMER_NAME}=useContext(AuthContext);
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
                    {getPage===1? <CustomerProfile tokenValue={CUSTOMER_TOKEN} idValue={CUSTOMER_ID}/>:null}
                    {getPage===2? <ChangePassword tokenValue={CUSTOMER_TOKEN} idValue={CUSTOMER_ID}/>:null}
                </div>
            </div>
        
      
    )
}

export default ProfileSetting