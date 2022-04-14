import React from "react";
import Login from "./img/yo.png"
const LoginPage=()=>{
    return (
        <div style={{display:"flex",justifyContent:"center",width:100+"%",height:100+"%"}}>
            <form style={{width:40+"%",height:50+"%",border:2+"px solid black", padding: 12+"px",marginTop: 200+"px"}}>
                <img src={Login} alt={"login"} style={{width:30+"%",height:30+"%",marginLeft:35+"%"}}/>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group" style={{marginTop:5+"px"}}>
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div style={{textAlign:"end",marginTop:5+"px"}}>
                    <button type="submit" class="btn btn-primary" style={{background:"blue"}}>Sign In</button>
                </div>
                
            </form>
        </div>
    )
}
export default LoginPage;