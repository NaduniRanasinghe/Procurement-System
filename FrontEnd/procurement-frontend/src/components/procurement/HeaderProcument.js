import React, { Component } from 'react' 
// import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom"; 
import { Route , withRouter} from 'react-router-dom'; 
 
class HeaderProcument extends Component { 
    constructor(props) { 
        super(props) 
       
        this.state = { 
        } 
      } 
    signinButtonHandler = () => { 
        this.props.history.push("/Login") 
    } 
 
    render() { 
        return ( 
                <div>
                    <nav className="navbar navbar-light navBar_procument_dashboard " >
                        <a className="navbar-brand " href="#">
                            <h4 className="navBarTitle_procument_dashboard ">
                                Procument Dashboard
                            </h4>
                        </a>
                    </nav>
                </div>
        ) 
    } 
} 
 
 
export default withRouter(HeaderProcument);