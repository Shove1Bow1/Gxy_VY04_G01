import { Router,Routes,Route } from "react-router-dom";
import {React} from "react";
import './App.css';
import Homepage from "./PathComponents/components/Admin/Homepage";
import AdminLogin from "./PathComponents/components/Admin/Login"
import AppLogin from "./PathComponents/components/Login/AppLogin";
import MergePartner from "./PathComponents/components/PartnerRegister/Merge"
import MergeAdmin from "./PathComponents/components/Admin/Merge"
const App = () => {
  return(
    <div>
      <MergeAdmin/>
    </div>
 
  )
}
export default App;
