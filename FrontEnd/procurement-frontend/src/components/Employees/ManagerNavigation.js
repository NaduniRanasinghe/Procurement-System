import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link , withRouter,BrowserRouter as Router, Route} from 'react-router-dom';
class ManagerNavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    employeeButtonHandler= () => {
        this.props.history.push("/AddEmployee")

    }

    siteButtonHandler = () => {
        this.props.history.push("/AddSite")

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="2"><button className="button" onClick={this.employeeButtonHandler}>Employee</button> </Col>
                    <Col xs="2"><button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.siteButtonHandler}>Site</button> </Col>
                    <Col xs="8"></Col>
                </Row>
            </Container>
        )
    }
}



export default withRouter(ManagerNavigation);