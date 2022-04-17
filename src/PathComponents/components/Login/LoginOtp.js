import React from "react";
import { Link } from "react-router-dom"; 



const LoginOtp = () => {
    return(

<section style={{background:" #508bfc"}}>
  <div class="container-login py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div class="card-body p-5">

            <h3 class="mb-5 text-center">Sign in</h3>

            <div class="form-outline mb-4">
                <label class="form-label text-left-otp" for="typeEmailX-2">Phone Number</label>
                <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
            </div>

            <div class="form-outline mb-4">
                <label class="form-label text-left" for="typePasswordX-2">OTP</label>
                <input type="tel" id="typePasswordX-2" class="form-control form-control-lg size-box" />             
            </div>

            {/* <!-- Checkbox --> */}
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              &ensp; 
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block button-size " type="submit">Login</button>

            <hr class="my-4"/>

            <p class="text-left-2 "><Link to="/logintell"><b class="colorlogo" >Use Phone Number</b></Link>&ensp;or&ensp;<Link to="/loginemail"><b class="colorlogo" >Email</b></Link></p>

            <button class="btn btn-lg btn-block btn-primary button-size mar-button " style={{background:" #dd4b39"}}
              type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <div class="mar-button">
              
            <button class="btn btn-lg btn-block btn-primary mb-2 button-size " style={{background: "#3b5998"}}
              type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
export default LoginOtp