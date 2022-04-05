import React from "react";
import Nav_man from "./components/Navigator_Management";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
const main_GUI=()=>{
    return(
        <Router>
            <Cotainer>
                <Row>
                    <Col sm={4}>
                        <Nav_man/>
                    </Col>
                    <Col sm={8}>
                        <Routes>
                            <Route/>
                        </Routes>
                    </Col>
                </Row>
            </Cotainer>
        </Router>
     
    )
}
export default main_GUI;