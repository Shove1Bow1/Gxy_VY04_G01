import React from 'react'
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import SideBarSearch from './SideBar/SideBarSearch';
import Ticket from './SideBar/SideBarDetail/Ticket';
import Hotel from './SideBar/SideBarDetail/Hotel';
import Combo from './SideBar/SideBarDetail/Combo';
import HireCar from './SideBar/SideBarDetail/HireCar';
import Airfield from './SideBar/SideBarDetail/Airfield';
import Experience from './SideBar/SideBarDetail/Experience';
function CustomSearch() {
  return (
    <> 
        <SideBarSearch/>
    <Routes>
        <Route path='/' element={<Ticket/>} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/combo' element={<Combo/>} />
        <Route path='/airfield' element={<Airfield/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/hireCar' element={<HireCar/>} />
    </Routes>         
    </>
  )
}

export default CustomSearch