import React from "react";
import logo from "./Img/confirm.png"
// function Register()
const Step2 =(props)=>{
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
                    <br /><br />
                    <form class="form-signin">
                      <div><h6> What should we call you?</h6></div>
                      <br />
                     
                      <div><label>Last Name: </label></div>
                      <div class="form-label-group">
                        <input type="text" id="inputLname" class="form-control" placeholder="Last Name" value={props.getLastname} onChange={(e)=>props.onLastName(e.target.value)} />
                        <label for="inputLname">Last Name</label>
                      </div> 
                      <div><label>First Name: </label></div>
                      <div class="form-label-group">
                        <input type="text"  id="inputFname" class="form-control" placeholder="First Name"  value={props.getFirstname} onChange={(e)=>props.onFirstName(e.target.value)}/>
                        <label for="inputFname">First Name</label>
                      </div>
                      <hr />
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={()=>props.onPage(1)}>Back</button>
                        <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={()=>props.onPage(3)}>Next</button>
                      <hr className="my-4" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}
export default Step2;