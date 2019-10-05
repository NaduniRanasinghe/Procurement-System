import React, { Component } from 'react' 
import { Link , withRouter,BrowserRouter as Router, Route} from 'react-router-dom'; 
import axios from 'axios' 
import HeaderSiteManager from "./HeaderSiteManager"; 
import NavigationButton from './NavigationButton';
import constant from '../constant';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import UpdateStatus from './UpdateStatus';
import AddDeliveryDetails from './AddDeliveryDetails';
import AddOrder from './AddOrder';

const CreatedOrderNav = props =>(
  
    <tr>
      <td>{props.index+1}</td>
      <td>{props.orderObj.orderName}</td>
      <td>{props.orderObj.totalPrice}</td>
      <td>
        <Link className="btn btn-outline-primary" to={"/SUBMIT/"+props.orderObj.id}>Submit For approve</Link>
        <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
      </td>
    </tr>

);

const SubmitedOrderNav = props =>(

  <tr>
    <td>{props.index+1}</td>
    <td>{props.orderObj.orderName}</td>
    <td>{props.orderObj.totalPrice}</td>
    <td>
        <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
    </td>
  </tr>

);

const SendToSupplierNav = props =>(

  <tr>
    <td>{props.index+1}</td>
    <td>{props.orderObj.orderName}</td>
    <td>{props.orderObj.totalPrice}</td>
    <td>
      <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
    </td>
  </tr>

);

const RejectedOrderNav = props =>(

  <tr>
    <td>{props.index+1}</td>
    <td>{props.orderObj.orderName}</td>
    <td>{props.orderObj.totalPrice}</td>
    <td>
      <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
      <Link className="btn btn-outline-secondary" to={"/EDIT_ORDER/"+props.orderObj.id}>Edit</Link>
    </td>
  </tr>

);


class SiteManagerDashBoard extends Component { 
 
    constructor(props) { 
      super(props);
     
      this.state = { 
        orderList:[],
        orderListNew:[],
        orderListSubmitForApprove:[],
       // orderListApproveFromManager:[],
        orderListSendToSupplier:[]
      } 
    } 
     

    componentWillMount() {
      axios.get(constant()+'/getorders')
          .then(res => {
            this.setState({orderList: res.data});
          }).catch(err => {
              console.log(err);
          });
    }

    //return order List accourding to respective STATUS
    filterOrderByState(orderList, status){
      const newOrderList = [];
      orderList.map(function(order,index){
        if(order.status === status){
          newOrderList.push(order); // Push the object
        }
      })
      console.log(newOrderList);
      return newOrderList;
    }


    orderButtonHandler= () => { 
        this.props.history.push("/AddOrder") 
         
    } 
 
    deliveryDetailsButtonHandler = () => { 
        this.props.history.push("/AddDeliveryDetails") 
         
    } 

    signinButtonHandler = () => {
      this.props.history.push("/Login")
  }

  createdOrderListFunction = () => {
      return this.filterOrderByState(this.state.orderList,"INITIATE").map(function(orders,index){
          return <CreatedOrderNav orderObj={orders} index={index} />;
      })
    }

    submitedOrderListFunction = () => {
      return this.filterOrderByState(this.state.orderList,"SUBMIT").map(function(orders,index){
          return <SubmitedOrderNav orderObj={orders} index={index} />;
        })
    }

    sendToSupplierListFunction = () => {
      return this.filterOrderByState(this.state.orderList,"SEND_TO_SUPPLIER").map(function(orders,index){
          return <SendToSupplierNav orderObj={orders} index={index}/>;
        })
    }
    

    rejectedOrderListFunction = () => {
      return this.filterOrderByState(this.state.orderList,"REJECT_TO_SITE_MANAGER").map(function(orders,index){
          return <RejectedOrderNav orderObj={orders} index={index} />;
        })
    }

    logOutButtonHandler = () => {
      this.props.history.push("/Login")
  }

  render() { 

      let viewCreatedOrder;
      let viewSubmitedOrder;
      let viewSendToSupplier;
     let viewRejectedOrder;


      viewCreatedOrder = 
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order className</th>
              <th scope="col">Total Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.createdOrderListFunction()}
          </tbody>
        </table>

      viewSubmitedOrder = 
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Order className</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.submitedOrderListFunction()}
          </tbody>
        </table> 

      viewSendToSupplier = 
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Order className</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.sendToSupplierListFunction()}
          </tbody>
        </table> 
        

      viewRejectedOrder = 
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Order className</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.rejectedOrderListFunction()}
          </tbody>
        </table> 
    
    return ( 
      
      <Router>
      <HeaderSiteManager/>
      <NavigationButton/>
      <div>
            <button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.logOutButtonHandler}>Log Out</button> 
      </div>
      <div className="raw">
        <div className="col-md-12">
          <br/>
          <div>
            <Tabs defaultActiveKey="Created_Orders" id="uncontrolled-tab-example">
              <Tab eventKey="Created_Orders" title="Created Orders">
                <br/>
                {viewCreatedOrder}
              </Tab>
              <Tab eventKey="Submited_Order" title="Submited Orders">
                <br/>
                {viewSubmitedOrder}
              </Tab>
              <Tab eventKey="Send_To_supplier" title="Approved Orders an Send to Supplier">
                <br/>
                {viewSendToSupplier}
              </Tab>
              <Tab eventKey="Rejected_Order" title="Rejected Order">
                <br/>
                {viewRejectedOrder}
              </Tab>
              <Tab eventKey="Add_Order" title="Make A Order">
                <br/>
               <AddOrder/>
              </Tab>
              <Tab eventKey="Add_Delivery_Details" title="Add Delivery Details">
                <br/>
                <AddDeliveryDetails/>
              </Tab>
            </Tabs>
          </div>
          <br/>
          <div>
            <Route path="/SUBMIT" component={UpdateStatus} />
          </div>
        </div>
      </div>
    </Router>
    ) 
  } 
} 
 
export default SiteManagerDashBoard 