import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PartnerPage from "./PathComponents/Partner/PartnerRouteController";
import CustomerPage from "./PathComponents/Customer/CustomerRouteController";
// import Card from "./PathComponents/Customer/CreditCard/CreditCardManager"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage  from './PathComponents/Partner/Homepage/Homepage';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<CustomerPage/>}></Route>
        <Route path='/Partner/*' element={<PartnerPage/>}></Route>
      </Routes>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
