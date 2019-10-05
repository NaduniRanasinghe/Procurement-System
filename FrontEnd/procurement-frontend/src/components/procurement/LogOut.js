import React, { Component } from 'react' 
import { Route , withRouter} from 'react-router-dom'; 
 
class LogOut extends Component { 
    constructor(props) { 
        super(props) 
       
        this.state = { 
        } 
      } 
    logOutButtonHandler = () => { 
        this.props.history.push("/Login") 
    } 
 
    render() { 
        return ( 
                <div className="raw">
                    <div className="col-md-8">
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.logOutButtonHandler}>Log Out</button> 
                    </div>
                </div>
        ) 
    } 
} 

export default withRouter(LogOut);