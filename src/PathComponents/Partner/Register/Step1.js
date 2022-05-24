import React from "react";
import { Link } from "react-router-dom";
import logo from "./Img/confirm.png"
const Step1 = (props) => {
    return (
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
                                    <input type="email" id="inputEmail" class="form-control" pattern="[A-Za-z1-9-.@]{5,50}" placeholder="Email address" value={props.getEmail} onChange={e => {props.onEmail(e.target.value) }} required />
                                    <label for="inputEmail">Email address</label>
                                </div>
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight">
                                        <input class="form-check-input" onChange={(e)=>props.onHandle(e)} type="checkbox" value="FLIGHT" id="flexCheckDefault" defaultChecked={props.onAppId.Services.includes("FLIGHT")?true:false} />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Flight
                                        </label>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <input class="form-check-input" onChange={(e)=>props.onHandle(e) } type="checkbox" value="CARRENTAL" id="flexCheckChecked" defaultChecked={props.onAppId.Services.includes("CARRENTAL")?true:false}/>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Car Rentals
                                        </label></div>
                                </div>
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight">
                                        <input class="form-check-input" onChange={(e)=>props.onHandle(e) } type="checkbox" value="AIRPORT" id="flexCheckDefault" defaultChecked={props.onAppId.Services.includes("AIRPORT")?true:false}/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Airport
                                        </label>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <input class="form-check-input" onChange={(e)=>props.onHandle(e) } type="checkbox" value="APART" id="flexCheckChecked" defaultChecked={props.onAppId.Services.includes("APART")?true:false} />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Apart
                                        </label></div>
                                </div>
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight">
                                        <input class="form-check-input" onChange={(e)=>props.onHandle(e) } type="checkbox" value="XPERIENCE" id="flexCheckDefault" defaultChecked={props.onAppId.Services.includes("XPERIENCE")?true:false}/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Xperience
                                        </label>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <input class="form-check-input" onChange={(e)=>props.onHandle(e) } type="checkbox" value="EATS" id="flexCheckChecked" defaultChecked={props.onAppId.Services.includes("EATS")?true:false}/>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Eats
                                        </label></div>
                                </div>
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight">
                                        <input class="form-check-input" onChange={(e)=>props.onHandle(e) } type="checkbox" value="VOUCHER" id="flexCheckDefault" defaultChecked={props.onAppId.Services.includes("VOUCHER")?true:false}/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Voucher
                                        </label>
                                    </div>
                                    <div class="p-2 bd-highlight">
                                        <input class="form-check-input" onChange={(e)=>props.onHandle(e) } type="checkbox" value="COMBO" id="flexCheckChecked" defaultChecked={props.onAppId.Services.includes("COMBO")?true:false}/>
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Combo
                                        </label></div>
                                </div>
                                <div class="d-flex justify-content-around">
                                    <div class="p-2 bd-highlight">
                                        <input class="form-check-input" onChange={(e)=>props.onHandle(e)} type="checkbox" value="HOTEL" id="flexCheckDefault" defaultChecked={props.onAppId.Services.includes("HOTEL")?true:false}/>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Hotel
                                        </label>
                                    </div>
                                </div>
                                <hr />
                                <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={()=>props.functionHandle() ? props.onPage(2):props.onPage(1)}>Next</button>
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