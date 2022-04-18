import { Router,Routes,Route } from "react-router-dom";
import {React} from "react";
import './App.css';
import PartnerRouteController from "./PathComponents/Partner/PartnerRouteController"
const App = () => {
  return(
    <div>
      <PartnerRouteController/>
    </div>
  )
}
export default App;
