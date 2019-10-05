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
                    <div className="header-blue" style={{background:'#563d7c'}}>
                        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                            <div className="container">
                                <h4 className="navBarTitle_procument_dashboard " style={{marginLeft:'-400px',marginTop:'10px'}}>SUPPLIER DASHBOARD</h4>
                                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                                    <span className="sr-only">  navigation </span>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navcol-1">

                                <ul className="nav navbar-nav" style={{marginTop:'10px'}}>
                                        <li className="nav-item" role="presentation"><a className="nav-link active" href="/SuppliersHome" ><h5>Home</h5></a>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav" style={{marginTop:'10px'}}>
                                        <li className="nav-item" role="presentation"><a className="nav-link active" href="/SupplierViewMain" ><h5>Orders</h5></a>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav" style={{marginTop:'10px'}}>
                                        <li className="nav-item" role="presentation"><a className="nav-link active" href="/Profile"><h5>Profile</h5></a>
                                        </li>
                                    </ul>
                                    <ul className="nav navbar-nav" style={{marginTop:'10px'}}>
                                        <li className="nav-item_two" role="presentation"><a className="nav-link active" href="/"><h5>Log Out</h5></a>
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