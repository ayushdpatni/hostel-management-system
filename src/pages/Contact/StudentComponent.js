import React, { Component } from "react";
// import './StudentComponent.css';
class StudentComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName:"",
            lastName:"",
            mobileNo:"",
            emailId:"",
            address:"",
            complaintText:"",
            topic:"",
            image:""

        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changeMobileNoHandler=this.changeMobileNoHandler.bind(this);
        this.changeComplaintTextHandler=this.changeComplaintTextHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.saveComplaint=this.saveComplaint.bind(this);
    }
changeFirstNameHandler=(event)=>{
    this.setState({firstName: event.target.value});
}
changeLastNameHandler=(event)=>{
    this.setState({lastName: event.target.value});
}
changeEmailIdHandler=(event)=>{
    this.setState({emailId: event.target.value});
}
changeMobileNoHandler=(event)=>{
    this.setState({mobileNo: event.target.value});
}
changeAddressHandler=(event)=>{
    this.setState({address: event.target.value});
}
changeComplaintTextHandler=(event)=>{
    this.setState({complaintText: event.target.value});
} 

cancel=(e)=>{
    e.target.reset();
}
saveComplaint=(e)=>{
    e.preventDefault();
    let complaint={
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailId: this.state.emailId,
        mobileNo: this.state.mobileNo,
        address: this.state.address,
        topic: this.state.topic,
        complaintText: this.state.complaintText,
        image: this.state.image
    }
    console.log('Student=>'+JSON.stringify(complaint));
}

handleTopicChange=(e)=>{
    this.setState({
        topic: e.target.value
    })
}

changeImgHandler=(e)=>{
    this.setState({image: e.target.value});
}

render(){
    return (
        <div>
                <div className="container">
                    <div className="row">
                        <br></br>
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler}>
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler}>
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile No.</label>
                                        <input placeholder="Mobile Number" name="mobileNo" className="form-control" value={this.state.mobileNo} onChange={this.changeMobileNoHandler}>
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id</label>
                                        <input placeholder="Email Id" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler}>
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label>Topic: </label>
                                        <br></br>
                                        <select defaultValue={"default"} onChange={this.handleTopicChange} style={{ width: '200px' , alignContent:'center', alignSelf:'center', textAlign:'center'}}>
                                            <option value={"default"} disabled selected>Choose an option</option>
                                            <option value="Cleaning">Cleaning</option>
                                            <option value="maintainence">Maintainence</option>
                                            <option value="rent-issue">Rent Issue</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Complaint Text</label>
                                        <textarea placeholder="Complaint Text" name="complaintText" className="form-control" value={this.state.complaintText} onChange={this.changeComplaintTextHandler}>
                                        </textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.changeAddressHandler}>
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label>Images</label>
                                        <input placeholder="file" name="file" type="file" accept="image/*" className="form-control" value={this.state.file} onChange={this.changeImgHandler}>
                                        </input>
                                    </div>
                                    <br></br>
                                    <button className="btn btn-success" type="submit" onClick={this.saveComplaint} style={{marginRight: "10px",width:"125px"}}>Submit</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind} style={{ marginLeft: "10px",width:"145px"}}>Reset</button>
                                    <br />
                                </form>
                            </div>
                            <script src="https://smtpjs.com/v3/smtp.js"></script>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}


export default StudentComponent;