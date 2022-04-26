import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <h3>Cài đặt</h3>
            <ul className='nav-link'>
                <li>
                    <Link to="/Components">Thông tin tài khoản</Link>
                </li>
                <li>
                    <Link to="/Password">Mật khẩu và bảo mật</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navigation