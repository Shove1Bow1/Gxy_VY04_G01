import React,{useState} from "react";
import SideBar from "./SideBar";
export default function GeneralProfile(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
            <div class="wrapper d-flex align-items-stretch max-height" style={{ height: 100 + "%" }}>
                <nav id="sidebar" className={sidebar?"active":null}>
                    <div class="custom-menu">
                        <button type="button" id="sidebarCollapse" class="btn btn-primary" onClick={showSidebar}>
                            <i class="fa fa-bars"></i>
                            <span class="sr-only">Toggle Menu</span>
                        </button>
                    </div>
                    <h1><a href="index.html" class="logo">Project Name</a></h1>
                    <ul class="list-unstyled components mb-5">
                        <li class="active">
                            <a href="#"><span class="fa fa-home mr-3"></span> Log-out</a>
                        </li>
                    </ul>
                </nav>
                    <iframe id="content" class="p-4 p-md-5 pt-5">
                </iframe>
            </div>
        </>
    )
}