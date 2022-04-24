import React from "react";
import { Link } from "react-router-dom";
import "../PartnerRegisterAndLogin.css"
const PartnerLogin = () => {
  return (
    <div className="bg-register ">
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
                <form class="form-signin">
                  <div><h5>Welcom Back!</h5></div>
                  <div>
                    <p>
                      Login to manage your accommodation from checking
                      reservations to managing room availability!
                    </p>
                  </div>
                  <br />
                  <div>
                    <label>Your Email address:</label>
                  </div>
                  <div class="form-label-group">
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required/>
                    <label for="inputEmail">Email address</label>
                  </div>
                  <div>
                    <label>Password: </label>
                    <div class="form-label-group">
                      <input type="password" id="inputPass" class="form-control" placeholder="Password"/>
                      <label for="inputPass">Password</label>
                    </div>
                  </div>
                  <div>
                    <p><b className="colorlogo">Forgot your password!</b></p>
                  </div>
                  <hr />
                  <button class="btn btn-lg btn-primary btn-block text-uppercase button-size">
                    Login
                  </button>
                  <hr className="my-4" />
                  <div>
                    <p>
                      Not yet a partner?&emsp;
                      <Link to="/Partner/Register"><b className="colorlogo">Register here</b></Link>
                    </p>
                  </div>
                  <hr className="my-2" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PartnerLogin;
