import React, { Component } from 'react'
// import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom";
import { Route , withRouter} from 'react-router-dom';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/Login-Form-Clean.css';
import '../assets/css/Navigation-with-Button.css';
import '../assets/css/Footer-Clean.css';

class Header extends Component {
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

                <body>
                <div>
                    <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                        <div className="container"><a className="navbar-brand" href="App.js">Company Name</a>
                            <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span
                                className="sr-only">Toggle navigation</span><span
                                className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse"
                                 id="navcol-1">
                                <ul className="nav navbar-nav mr-auto">
                                    <li className="nav-item" role="presentation"><a className="nav-link active"
                                                                                    href="#">First Item</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link" href="#">Second
                                        Item</a></li>
                                    <li className="dropdown nav-item"><a className="dropdown-toggle nav-link"
                                                                         data-toggle="dropdown" aria-expanded="false"
                                                                         href="#">Dropdown </a>
                                        <div className="dropdown-menu" role="menu"><a className="dropdown-item"
                                                                                      role="presentation" href="#">First
                                            Item</a><a className="dropdown-item" role="presentation" href="#">Second
                                            Item</a><a className="dropdown-item" role="presentation" href="#">Third
                                            Item</a></div>
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-light action-button" onClick={this.signinButtonHandler}><span className="navbar-text actions">Sign In</span></button>
                            </div>
                        </div>
                    </nav>
                </div>

                </body>




            </div>

        )
    }
}


export default withRouter(Header);