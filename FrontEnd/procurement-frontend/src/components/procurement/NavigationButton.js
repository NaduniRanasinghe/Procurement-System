import React, { Component } from 'react' 
import { Container, Row, Col } from 'reactstrap';
import { Link , withRouter,BrowserRouter as Router, Route} from 'react-router-dom'; 
class NavigationButton extends Component { 
    constructor(props) { 
        super(props) 
       
        this.state = { 
        } 
      } 

    supplierButtonHandler= () => { 
        this.props.history.push("/AddSupplier") 
         
    } 
 
    itemButtonHandler = () => { 
        this.props.history.push("/AddItem") 
         
    } 
 
    render() { 
        return (
            <Container>
            <Row>
              <Col xs="2"><button className="button" onClick={this.supplierButtonHandler}>Supplier</button> </Col>
              <Col xs="2"><button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.itemButtonHandler}>Item</button> </Col>
              <Col xs="8"></Col>
            </Row>
          </Container>
        ) 
    } 
} 


 
export default withRouter(NavigationButton);