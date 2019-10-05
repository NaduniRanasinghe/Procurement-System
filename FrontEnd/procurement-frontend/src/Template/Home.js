import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/Header-Blue.css';

//import Content from './Content';


class Home extends Component{

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
                                <a className="navbar-brand" href="https://www.sliit.lk">Empire Build</a>
                                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                                    <span className="sr-only">  navigation </span>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navcol-1">

                                    <form className="form-inline mr-auto" target="_self">
                                        <div className="form-group">
                                            <label htmlFor="search-field">
                                            <i className="fa fa-search"></i>
                                         </label><input
                                            className="form-control search-field" type="search" id="search-field"
                                            name="search"/></div>
                                    </form>
                                    <span className="navbar-text"> <a className="btn btn-light action-button" role="button" onClick={this.signinButtonHandler}>Log In</a></span>
                                    {/* <a className="btn btn-light action-button" role="button" href="https://www.sliit.lk">Sign Up</a> */}
                                </div>
                            </div>
                        </nav>




                    </div>

            </div>

        )
    }


}

export default withRouter(Home);