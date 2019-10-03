import React, { Component } from 'react' 
import { Container, Row, Col } from 'reactstrap';
import { Link , withRouter,BrowserRouter as Router, Route} from 'react-router-dom'; 
class NavigationButton extends Component { 
    constructor(props) { 
        super(props) 
       
        this.state = { 
        } 
      } 

    orderButtonHandler= () => { 
        this.props.history.push("/AddOrder") 
         
    } 
 
    deliveryDetailsButtonHandler = () => { 
        this.props.history.push("/AddDeliveryDetails") 
         
    } 
 
    render() { 
        return (
            <Container>
            <Row>
              <Col xs="2"><button type="button" className="btn btn-outline-secondary registerBtn"  onClick={this.orderButtonHandler}> Order Details</button> </Col>
              <Col xs="2"><button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.deliveryDetailsButtonHandler}>Delivery Details</button> </Col>
              <Col xs="2"><button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.deliveryDetailsButtonHandler}>Items /Suppliers Details</button> </Col>
              <Col xs="8"></Col>
            </Row>
          </Container>
        ) 
    } 
} 


 
export default withRouter(NavigationButton);