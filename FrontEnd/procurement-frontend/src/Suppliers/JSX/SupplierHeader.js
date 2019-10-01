import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../CSS/SupplierHeader.css";
import { Link } from 'react-router';

class SupplierHeader extends Component{
    constructor(props) {
        super(props)
      
        this.state = {
        }
      }
    signinButtonHandler = () => {
        this.props.history.push("/Login")
    }

    render() {
        return(
                <div>
                    <div className="header-blue">
                        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                            <div className="container">
                                <a className="navbar-brand" href="#">Welcome to MAGA ENGINEERING </a>
                                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                                    <span className="sr-only">  navigation </span>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navcol-1">
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item" role="presentation"><a className="nav-link active" href="/SuppliersHome">Home</a>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item" role="presentation"><a className="nav-link active" href="/">Purchase Orders</a>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item" role="presentation"><a className="nav-link active" href="/Profile">Profile</a>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item_two" role="presentation"><a className="nav-link active" href="/">Log Out</a>
                                        </li>
                                    </ul>
                                    <form className="form-inline mr-auto" target="_self">
                                        <div className="form-group">
                                            <label htmlFor="search-field">
                                            <i className="fa fa-search"></i>
                                         </label><input
                                            className="form-control search-field" type="search" id="search-field"
                                            name="search"/></div>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
            </div>
        )
    }
}

export default SupplierHeader;