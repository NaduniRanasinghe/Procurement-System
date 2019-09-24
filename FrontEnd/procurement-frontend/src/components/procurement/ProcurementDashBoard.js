import React, { Component } from 'react' 
import { Link , withRouter} from 'react-router-dom'; 
import axios from 'axios' 
import HeaderProcument from "./HeaderProcument"; 
 
class ProcumentDashBoard extends Component { 
 
    constructor(props) { 
      super(props) 
     
      this.state = { 
        username: '', 
         password:'' 
      } 
    } 
     
    supplierButtonHandler= () => { 
        this.props.history.push("/AddSupplier") 
         
    } 
 
    itemButtonHandler = () => { 
        this.props.history.push("/AddItem") 
         
    } 
 
 
  render() { 
    const { username, password } = this.state; 
    return ( 
 
        <div className="container"> 
        <div className="panel panel-default"> 
          <div className="panel-heading"> 
            <h3 className="panel-title"> 
             Procumnet DashBoard 
             <div> 
        <HeaderProcument/> 
    </div> 
            </h3> 
          </div> 
          <div className="panel-body"> 
          <form onSubmit={this.submitHandler}> 
                <button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.supplierButtonHandler}>Supplier</button> 
                <button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.itemButtonHandler}>Item</button> 
            </form> 
          </div> 
        </div> 
      </div> 
    ) 
  } 
} 
 
export default ProcumentDashBoard 