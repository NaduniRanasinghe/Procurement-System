import React, { Component } from 'react' 
import { Link } from 'react-router-dom'; 
import axios from 'axios' 
import constant from '../constant'; 
 
class AddGoods extends Component { 
    constructor(props) { 
      super(props) 
     
      this.state = { 
         sname:'', 
         email:'', 
         password:'', 
         address:'', 
         phone:'' 
      } 
    } 
 
    changeHandler = (e) => { 
        const state = this.state 
        state[e.target.name] = e.target.value; 
        this.setState(state) 
    } 
 
    componentDidMount() { 
        axios.get(constant()+'/getcourse').then( 
            data => { 
                this.setState({ 
                    Courses: data.data 
                }) 
            } 
        ) 
    } 
 
 
    submitHandler = (e) => { 
        e.preventDefault() 
        console.log(this.state) 
        axios.post(constant()+'/save/supplier', this.state) 
        .then(response => { 
            console.log(response) 
            if(response.data != ''){ 
              alert(`User added . now you can log in to the system`); 
              this.props.history.push("/") 
            } 
             
        }) 
        .catch(error => { 
            console.log(error) 
        }) 
      } 
     
 
    loginButtonHandler = () => { 
        this.props.history.push("/") 
    } 
     
  render() { 
    const { sname, email, password, address, phone} = this.state; 
    return ( 
        <div className="container"> 
            <div className="panel panel-default"> 
                <div className="panel-heading"> 
                    <h3 className="panel-title"> 
                         Add Goods 
                    </h3> 
                </div> 
                <div className="panel-body"> 
                <form onSubmit={this.submitHandler}> 
                    <div className="form-group"> 
                        <label>Supplier Name:</label> 
                        <input type='text' id="validationCustom01" className="form-control" name="sname" value={sname} onChange={this.changeHandler} placeholder="User name" pattern="^[a-zA-Z0-9_]+$" title="Enter supplier name is requird"/> 
                    </div> 
                    <div className="form-group"> 
                        <label>Password:</label> 
                        <input type='password' className="form-control" name="password" value={password} onChange={this.changeHandler} placeholder="Password" /> 
                    </div> 
                    <div className="form-group"> 
                        <label>Email:</label> 
                        <input type='email' className="form-control" name="email" value={email} onChange={this.changeHandler} placeholder="Email" /> 
                    </div> 
                    <div className="form-group"> 
                        <label>Address:</label> 
                        <input type='text'  className="form-control" name="address" value={address} onChange={this.changeHandler} placeholder="address" /> 
                    </div> 
                    <div className="form-group"> 
                        <label>Phone No:</label> 
                        <input type='text' className="form-control" name="phone" value={phone} onChange={this.changeHandler} placeholder="contact number" /> 
                    </div> 
                    <button type="submit" className="btn btn btn-outline-success registerBtn">Register</button> 
                    <button type="button" className="btn btn-outline-secondary loginBtn" onClick={this.loginButtonHandler}>Login</button> 
                </form> 
                </div> 
            </div> 
        </div> 
    ); 
  } 
} 
 
export default AddGoods 