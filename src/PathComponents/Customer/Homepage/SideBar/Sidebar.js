import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  // useEffect(){

  // }
  const ShowButtonLogin=()=>{
    return (
      <div>
        <Link to="/Login"><button className='btn btn-primary'>Login</button></Link>
        <Link to="/Register"><button className='btn btn-primary'>Register</button></Link>
      </div>
    )
  }
  const ShowUserLogin=()=>{
    return (
      <div>
        <h6>{} </h6>
      </div>
    )
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> 
          <div className='login-customer'>
            <i class="fa-solid fa-user fa-lg" ></i>
            
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
