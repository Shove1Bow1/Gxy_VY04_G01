import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import logo from "./Img/confirm.png"
// import '../PartnerRegisterAndLogin.css'
export default function PartnerRegister(){
    const [getPageId,setPageId]=useState(1);
    const [getEmail,setEmail]=useState("");
    const [getFirstname,setFirstname]=useState("");
    const [getLastname,setLastname]=useState("");
    const [getAppID,setAppID]=useState("");
    const [getPassword,setPassword]=useState("");
    // function Register()
    const Step1 =()=>{
        return(
            <div class="bg-register">
                <div class=" py-5 h-100">
                    <div class="row">
                        <div class="col-lg-10 col-xl-9 mx-auto">
                            <div class="card card-signin flex-row my-5">
                                <div class="card-img-left d-none d-md-flex">
                                    {/* <!-- Background image for card set in CSS! --> */}
                                </div>
                                <div class="card-body">
                                    <h5 class="text-center">Traveloka <b className="colorlogo">TERA</b></h5>
                                    <br /><br />
                                    
                                        <div><h6>Create new Tera Account</h6></div>
                                        <div><p>List your property at Traveloka and let us help you connect with millions of guests!</p></div>
                                        <br />
                                        <div><label>Email address</label></div>
                                        <div class="form-label-group">
                                            <input type="email" id="inputEmail" class="form-control" autoFocus placeholder="Email address" value={getEmail} onChange={(e)=>setEmail(e.target.value)} required />
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                        <select value={getAppID} onChange={(e)=>setAppID(e.target.value)} className="service-form-select-register form-select">
                                            <option value="" disabled>Please choose your service</option>
                                            <option value="VY04MB" onClick={(e)=>{setAppID(e.target.value)}}>Flight</option>
                                            <option value="VY04TX">Car Rentals</option>
                                            <option value="VY04KS">Hotel</option>
                                            <option value="VY04DDSB">Airport Transfer</option>
                                            <option value="VY04BTCH">Holiday Stays</option>
                                            <option value="VY04TDL">Xperience</option>
                                            <option value="VY04NH">Restaurants</option>
                                        </select>
                                        <hr />
                                        <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={() => setPageId(2)}>Next</button>
                                        <hr className="my-4" />
                                        <div className="col-s-4">
                                        </div>
                                        <div>
                                            <p> Already have account?&emsp;<Link to="/Partner/Login"><b className="colorlogo">Log in here</b></Link></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const Step2 =()=>{
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
                            <input type="text" id="inputLname" autoFocus class="form-control" placeholder="Last Name" />
                            <label for="inputLname">Last Name</label>
                          </div> 
                          <div><label>First Name: </label></div>
                          <div class="form-label-group">
                            <input type="text"  id="inputFname" class="form-control" placeholder="First Name" autoFocus value={getFirstname} onChange={(e)=>setFirstname(e.target.value)}/>
                            <label for="inputFname">First Name</label>
                          </div>
                          <hr />
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={()=>setPageId(1)}>Back</button>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={()=>setPageId(3)}>Next</button>
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
    const Step3 = () => {
        return(
            <div className="bg-register">
                {/* ------------------------------------------------- */}
                <div class=" py-5">
                    <div class="row">
                        <div class="col-lg-10 col-xl-9 mx-auto">
                            <div class="card card-signin flex-row my-5">
                                <div class="card-img-left d-none d-md-flex">
                                    {/* <!-- Background image for card set in CSS! --> */}
                                </div>
                                <div class="card-body">
                                    <h5 class="text-center">Traveloka <b className="colorlogo">TERA</b></h5>
                                    <br />
                                    <br />
                                    <form class="form-signin">
                                        <div><h6>Now-let's set up your password!</h6></div>
                                        <div>
                                            <label>Password: </label>
                                        </div>
                                        <div class="form-label-group">
                                            <input type="password" id="inputPass" class="form-control" placeholder="Password" autoFocus />
                                            <label for="inputPass">Password</label>
                                        </div>
                                        <hr />
                                        <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={()=>setPageId(2)}>Back</button>
                                        <button class="btn btn-lg btn-primary btn-block text-uppercase"  onClick={()=>setPageId(4)}>Next</button>
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
    const Step4 = () =>{
        return(
            <div className="bg-register" >
                <div class=" py-5 h-100">
                    <div class="row">
                        <div class="col-lg-10 col-xl-9 mx-auto">
                            <div class="card card-signin flex-row my-5">
                                <div class="card-img-left d-none d-md-flex">
                                    {/* <!-- Background image for card set in CSS! --> */}
                                </div>
                                <div class="card-body">
                                    <h5 class="text-center">Traveloka <b className="colorlogo">TERA</b></h5>
                                    <br />
                                    <br />
                                    <form class="form-signin">
                                        <div>
                                            <h6>
                                                One last step:  confirm your registrantion!
                                            </h6>
                                        </div>
                                        <br />
                                        <img src={logo} />
                                        <div>
                                            <p>Confirm your registration by clicking the link we're sent to your email.</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="col-s-4">
                                        </div>
                                        <div><p>Not receiving any emails?&emsp;<a class="fw-bold text-body"><b className="colorlogo">Resend email</b></a></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      )
    }
    return (
        <div>
            <Title/>
            {getPageId===1?<Step1/>:null}
            {getPageId===2?<Step2/>:null}
            {getPageId===3?<Step3/>:null}
            {getPageId===4?<Step4/>:null}
        </div>
    )
}