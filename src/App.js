import {React} from "react";
import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import './App.css';
import Confirm from "./components/Confirm";
import DangKy from "./components/DangKy";
import DangKyFist from "./components/DangKyFist";
import DangNhapTell from "./components/DangNhapTell";
import EmailOtp from "./components/EmailOtp";
const App = () => {
  return(
    <Router>
     <DangKy/>
     <Routes>
     <Route path='/'element={<DangKyFist/>}/>
     <Route path='/next1'element={<DangNhapTell/>}/>
     <Route path='/next2'element={<EmailOtp/>}/>
     <Route path='/next3'element={<Confirm/>}/>
     </Routes>
    </Router>   
  )
}
export default App;
