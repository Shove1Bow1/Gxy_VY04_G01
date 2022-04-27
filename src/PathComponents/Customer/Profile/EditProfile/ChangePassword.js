import React, { Component } from "react";
import './Password.css';

class Password extends Component{

    constructor(props){
        super(props)
        this.state={
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
        this.changeoldPasswordHandler=this.changeoldPasswordHandler.bind(this);
        this.changenewPasswordHandler=this.changenewPasswordHandler.bind(this);
        this.changeconfirmPasswordHandler=this.changeconfirmPasswordHandler.bind(this);
    }

    changeoldPasswordHandler=(event)=>{
        this.setState({oldPassword: event.target.value});
    }
    changenewPasswordHandler=(event)=>{
        this.setState({newPassword: event.target.value});
    }
    changeconfirmPasswordHandler=(event)=>{
        this.setState({confirmPassword: event.target.value});
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={emailId: this.state.emailId,firstName: this.state.firstName,lastName: this.state.lastName,BirthDay: this.state.BirthDay,Gender: this.state.Gender};
        console.log('student=>'+JSON.stringify(student));
    }

    cancel=(e)=>{
        e.targer.reset();
    }
    render(){
        return(
            <div>
                <div>
                <div className='row-head'>
                        <div className='card offset-md-4 col-md-6 '>
                            <div className='card-head'>
                                <form className='form-head'>
                                    <div className="pass-head" style={{ fontWeight: "bolder" }}>Đổi mật khẩu</div>
                                    <div className="btn">
                                        <button className="btn btn-save" onClick={this.saveStudent} style={{ backgroundColor: "rgb(242,243,243)" }}>Lưu</button>
                                        <button className="btn btn-cancel" onClick={this.cancel.bind} style={{ marginLeft: "10px", backgroundColor: "rgb(242,243,243)" }}>Hủy</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row-body">
                        <div className="card offset-md-4 col-md-6 ">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <div style={{ fontWeight: "bolder" }}>Mật khẩu cũ:</div>
                                        <input placeholder="Nhập mật khẩu hiện tại của bạn" name="oldPassword" className="form-control"
                                            value={this.state.oldPassword} onChange={this.changeoldPasswordHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <div style={{ fontWeight: "bolder" }}>Mật khẩu mới:</div>
                                        <input placeholder="Nhập mật khẩu mới của bạn" name="newPassword" className="form-control"
                                            value={this.state.newPassword} onChange={this.changenewPasswordHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <div style={{ fontWeight: "bolder" }}>Xác nhận mật khẩu:</div>
                                        <input placeholder="Nhập lại mật khẩu mới của bạn" name="confirmPassword" className="form-control"
                                            value={this.state.confirmPassword} onChange={this.changeconfirmPasswordHandler}></input>
                                    </div>
                                    <div>Hảy đảm bảo rằng nó khớp với mật khẩu của bạn</div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="card offset-md-4 col-md-6">
                        <div className="card-body">
                            <form>
                                <div style={{ fontSize: "20px", fontWeight: "bolder" }}>Xác thực</div>
                                <div style={{ fontWeight: "bold" }}>Gửi mã OTP khi đăng nhập</div>
                                <div>Gửi mã xác thực mới khi tài khoản của tôi đuợc đăng nhập</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Password