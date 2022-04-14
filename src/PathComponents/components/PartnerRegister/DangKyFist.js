import React from "react";

import { Link } from "react-router-dom";
const DangKyFist = () =>{
    return(
      <div className="col-sm-10">
        <div class="container py-5 h-100">
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
                        Create new Tera Account
                      </h6>
                    </div>
                    <div>
                      <p>
                        List your property at Traveloka and let us help you connect with millions of guests!
                      </p>
                    </div>
                    <br />
                    <div>
                      <label>Email address</label>
                    </div>
                    <div class="form-label-group">
                      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required />
                      <label for="inputEmail">Email address</label>
                    </div>

                    <div class="dropdown show">
                      <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Type...........
                      </a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                    <hr />
                    <Link to="/next1"><button class="btn btn-lg btn-primary btn-block text-uppercase">Next</button></Link>
                    <hr className="my-4" />
                    <div className="col-s-4">
                    </div>
                    <div>
                      <p> Already have account?&emsp;<a class="fw-bold text-body"><b className="colorlogo">Log in here</b></a></p>
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
export default DangKyFist