import React, { Fragment } from "react";
import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import Explore from "./Explore/Explore";
import Partner from "./Partner/Partner";
import Propose from "./Propose/Propose";
import Promotion from "./Promotion/Promotion";
import Advantage from "./Advantage/Advantage";
import Sidebar from "./SideBar/Sidebar";
export default function Homepage(){
    return(
        <div className="container-fluid">  
        <Sidebar />
            <div className="row">
                <div className="col">
                    <Fragment>
                        <Banner/>
                        <Search />
                        <Promotion />
                        <Partner />
                        <Propose />
                        <Advantage />
                        <Explore />
                    </Fragment>
                </div>
            </div>          
        </div> 
    )
}