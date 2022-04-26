import React, { Fragment } from "react";
import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import Explore from "./Explore/Explore";
import Partner from "./Partner/Partner";
import Propose from "./Propose/Propose";
import Promotion from "./Promotion/Promotion";
import Advantage from "./Advantage/Advantage";
export default function Homepage(){
    return(
        <Fragment>
             <Banner/>
             <Search/>
             <Promotion/>
             <Partner/>
             <Propose/>
             <Advantage/>
             <Explore/>      
        </Fragment>
    )
}