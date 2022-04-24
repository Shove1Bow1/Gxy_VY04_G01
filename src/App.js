import { Router,Routes,Route } from "react-router-dom";
import {React} from "react";
import './App.css';
import PartnerPage from "./PathComponents/Partner/PartnerRouteController";
import CustomerPage from "./PathComponents/Customer/CustomerRouteController";
const App = () => {
  return(
    <Router>
      <Routes>
          <Route path="/Partner/*" element={<PartnerPage/>}/>
      </Routes>
    </Router>
  )
}
export default App;
