import React, { Component } from 'react'
import { Route , withRouter} from 'react-router-dom';

class HeaderManager extends Component {
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
                            Manager Dashboard
                        </h4>
                    </a>
                </nav>
            </div>
        )
    }
}


export default withRouter(HeaderManager);