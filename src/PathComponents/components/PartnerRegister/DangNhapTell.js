import React from "react";
import { Link } from "react-router-dom";
const DangNhapTell = () =>{
    return(
        <div className="bg-register">
         {/* ------------------------------------------------- */}
 
         <div class="py-5 h-100">
     <div class="row">
       <div class="col-lg-10 col-xl-9 mx-auto">
         <div class="card card-signin flex-row my-5">
           <div class="card-img-left d-none d-md-flex">
              {/* <!-- Background image for card set in CSS! --> */}
           </div>
           <div class="card-body">
             <h5 class="text-center">Traveloka <b className="colorlogo">TERA</b></h5>
             <br/>
             <br/>
             <form class="form-signin">
               <div>
                 <h6>
                   What should we call you?
                 </h6>
               </div>
               <br/>
               <div>
                 <label>First Name: </label>
               </div>
               <div class="form-label-group">
                 <input type="email" id="inputFname" class="form-control" placeholder="First Name"/>
                 <label for="inputFname">First Name</label>
               </div>

               <div>
                 <label>Last Name: </label>
               </div>
               <div class="form-label-group">
                 <input type="text" id="inputLname" class="form-control" placeholder="Last Name"/>
                 <label for="inputLname">Last Name</label>
               </div>
              
               <hr/>
               <Link to="/next2"><button class="btn btn-lg btn-primary btn-block text-uppercase">Next</button></Link>
               <hr className="my-4" />
               <div className="col-s-4">
               </div>
             </form>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
    )

}
export default DangNhapTell