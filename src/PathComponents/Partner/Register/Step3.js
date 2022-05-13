import React, { useState } from "react";
const Step3 = (props) => {
    const [getPasswordConfirm,setPasswordConfirm]=useState("");
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
                                        <input type="password" id="inputPass" class="form-control" placeholder="Password" value={props.getPassword} onChange={(e)=>props.onPassword(e.target.value)} autoFocus />
                                        <label for="inputPass">Password</label>
                                    </div>
                                    <div class="form-label-group">
                                        <input type="password" id="inputPassConfirm" autoFocus class="form-control" placeholder="Confirm Password" value={getPasswordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} />
                                        <label for="inputPassConfirm">Confirm Password</label>
                                    </div>
                                    <hr />
                                    <button class="btn btn-lg btn-primary btn-block text-uppercase" onClick={()=>props.onPage(2)}>Back</button>
                                    <button class="btn btn-lg btn-primary btn-block text-uppercase"  onClick={()=>props.onClick()}>Next</button>
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
export default Step3;