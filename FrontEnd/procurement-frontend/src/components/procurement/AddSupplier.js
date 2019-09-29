import React, { Component } from 'react' 
import { Link } from 'react-router-dom'; 
import axios from 'axios' 
import constant from '../constant'; 
 
class AddSupplier extends Component { 
    constructor(props) { 
      super(props) 
     
      this.state = { 
         sName:'', 
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
 
    submitHandler = (e) => { 
        e.preventDefault() 
        console.log(this.state) 
        axios.post(constant()+'/supplier/save', this.state) 
        .then(response => { 
            console.log(response) 
            if(response.data != ''){ 
              alert(`Supplier added successfully...`); 
              window.location.reload(); 
              this.props.history.push("/ProcumentDashBoard") 
            //   window.location.reload(); 
            this.setState({sName: '', email: '', password: '', address: '', phone: ''});
            } 
             
        }) 
        .catch(error => { 
            console.log(error) 
        }) 
      } 
    
    supplierAddButtonHandler = () => { 
        window.location.reload(); 
    } 
   
     
  render() { 
    const { sName, email, password, address, phone} = this.state; 
    return ( 
        <div className="container"> 
            <div className="panel panel-default"> 
                <div className="panel-heading"> 
                    <h3 className="panel-title"> 
                         Supplier Registration
                    </h3> 
                </div> 
                <div className="panel-body"> 
                <form onSubmit={this.submitHandler}> 
                    <div className="form-group"> 
                        <label>Supplier Name:</label> 
                        <input type='text' className="form-control" name="sName" value={sName} onChange={this.changeHandler} placeholder="User name"/> 
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
                    <button type="submit" className="btn btn btn-outline-success registerBtn" >Add Supplier</button> 
                </form> 
                </div> 
            </div> 
        </div> 
    ); 
  } 
} 
 
export default AddSupplier 