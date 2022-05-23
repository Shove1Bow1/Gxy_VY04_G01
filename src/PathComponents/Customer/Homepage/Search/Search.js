
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import "./Search.css";
import SideBarSearch from './SideBar/SideBarSearch';
import Ticket from './SideBar/SideBarDetail/Ticket';
import Hotel from './SideBar/SideBarDetail/Hotel';
import Combo from './SideBar/SideBarDetail/Combo';
import HireCar from './SideBar/SideBarDetail/HireCar';
import Airfield from './SideBar/SideBarDetail/Airfield';
import Experience from './SideBar/SideBarDetail/Experience';
import CustomSearch from './CustomSearch';


class Search extends Component {
    render() {
        return (
            // <div className="container-search">
            //     <div className="row">
            //         <div className="col-2">
            //         </div>
            //         <div className="col-10">
            //             <div className="row">
            //                 <label class='text-name'>Thành phố, địa điểm hoặc tên khách sạn:</label>
            //                 <div class="input-group mb-3">
            //                     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Thành phố, khách sạn, điểm đến" />
            //                 </div>
            //                 <div className="row">
            //                     <div className="col-4">
            //                         <label class='text-name'>Nhận phòng:</label>
            //                         <div class="input-group mb-3">
            //                             <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='00/00/00'/>
            //                         </div>
            //                     </div>
            //                     <div className="col-4">
            //                         <label class='text-name'>Số đêm:</label>
            //                         <div class="input-group mb-3">
            //                             <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='0 đêm' />
            //                         </div>
            //                     </div>
            //                     <div className="col-4">
            //                         <label class='text-name'>Trả phòng:</label>
            //                         <div class="input-group mb-3">
            //                             <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='00/00/00'/>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //             <label class='text-name'>Khách và phòng:</label>
            //             <div className="row">
            //                 <div className="col-8">
            //                     <div class="input-group mb-3">
            //                         <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='0 người lớn, 0 trẻ em, 0 phòng'/>
            //                     </div>
            //                 </div>
            //                 <div className="col-4">
            //                     <button class="btn-search ">Tìm khách sạn</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <>
            <div className='container-search'>              
               <CustomSearch/>
            </div>
            </>
        );
    }
}

export default Search;