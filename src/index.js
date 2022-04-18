import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Merge from "./PathComponents/components/PartnerRegister/Merge"
import DangNhapPartner from './PathComponents/components/PartnerRegister/DangNhapPartner';
import AppLogin from './PathComponents/components/Login/AppLogin';
import MyBounsPoints from './PathComponents/components/Bouns_Points/My_Bouns_Points';
import AppBounsPoints from './PathComponents/components/Bouns_Points/App_Bouns_Points';

ReactDOM.render(
  <React.StrictMode>
    <AppLogin/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
