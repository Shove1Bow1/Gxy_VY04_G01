import React from "react";
import { Link } from "react-router-dom";
import logo from "./Img/confirm.png"
const Step1 =(props)=>{
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
                                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" value={props.getEmail} onChange={(e)=>props.onEmail(e.target.value)} required />
                                        <label for="inputEmail">Email address</label>
                                    </div>
                                    <select value={props.getAppID} onChange={(e)=>props.onAppId(e.target.value)} className="service-form-select-register form-select">
                                        <option value="" disabled>Please choose your service</option>
                                        <option value="VY04MB">Flight</option>
                                        <option value="VY04TX">Car Rentals</option>
                                        <option value="VY04KS">Hotel</option>
                                        <option value="VY04DDSB">Airport Transfer</option>
                                        <option value="VY04BTCH">Holiday Stays</option>
                                        <option value="VY04TDL">Xperience</option>
                                        <option value="VY04NH">Restaurants</option>
                                    </select>
                                    <hr />
                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={() => props.onPage(2)}>Next</button>
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
export default Step1;