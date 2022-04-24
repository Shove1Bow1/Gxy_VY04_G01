import React, {Component} from 'react'

class StudentComponents extends Component{

    constructor(props){
        super(props)
        this.state={
            Email:'',
        }
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeBirthDayHandler=this.changeBirthDayHandler.bind(this);
        this.changeGenderHandler=this.changeGenderHandler.bind(this);
        this.saveStudent=this.saveStudent.bind(this);
    }

    changeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }

    changeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }
    
    changeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }

    changeBirthDayHandler=(event)=>{
        this.setState({BirthDay: event.target.value});
    }

    changeGenderHandler=(event)=>{
        this.setState({Gender: event.target.value});
    }

    saveStudent=(e)=>{
        e.preventDefault();
        let student={emailId: this.state.emailId,firstName: this.state.firstName,lastName: this.state.lastName,BirthDay: this.state.BirthDay,Gender: this.state.Gender};
        console.log('student=>'+JSON.stringify(student));
    }
    render(){
        return(
            <div>

                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Đăng ký thành viên</h1>
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="VD:email@example.com" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailIdHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Fist Name:</label>
                                        <input placeholder="Họ của bạn" name="fistName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Tên của bạn" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" onClick={this.saveStudent}>Đăng ký</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentComponents 
