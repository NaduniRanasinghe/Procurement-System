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
// import AddOrder from './AddOrder'
import AddDeliveryDetails from './AddDeliveryDetails';

const NewOrderNav = props =>(
  
    <tr>
      <td>{props.index+1}</td>
      <td>{props.orderObj.orderName}</td>
      <td>{props.orderObj.totalPrice}</td>
      <td>
        {/* <Button variant="outline-success" onClick={this.submitFunction}>Send to Supplier</Button> */}
        {/*<Link className="btn btn-outline-success" to={"/SEND_TO_SUPPLIER/"+props.orderObj.id}>Send to Supplier</Link>*/}
        <Link className="btn btn-outline-primary" to={"/SUBMIT_TO_APPROVE/"+props.orderObj.id}>Submit For approve</Link>
        {/*<Link className="btn btn-outline-danger" to={"/INITIATE/"+props.orderObj.id}>Reject</Link>*/}
        <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
        {/* <Link className="btn btn-primary" to={"/trainsModify/"+props.instructor._id}>Modify</Link> */}
      </td>
    </tr>

);

const SubmitForApproveNav = props =>(

  <tr>
    <td>{props.index+1}</td>
    <td>{props.orderObj.orderName}</td>
    <td>{props.orderObj.totalPrice}</td>
    <td>
        <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
    </td>
  </tr>

);

{/*const ApproveFromManagerNav = props =>(

  <tr>
    <td>{props.index+1}</td>
    <td>{props.orderObj.orderName}</td>
    <td>{props.orderObj.totalPrice}</td>
    <td>
      <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
    </td>
  </tr>

);*/}

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


class SiteManagerDashBoard extends Component { 
 
    constructor(props) { 
      super(props);
     
      this.state = { 
        orderList:[],
        orderListNew:[],
        orderListSubmitForApprove:[],
        orderListApproveFromManager:[],
       // orderListSendToSupplier:[]
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

    newOrderListFunction = () => {
      return this.filterOrderByState(this.state.orderList,"SUBMIT").map(function(orders,index){
          return <NewOrderNav orderObj={orders} index={index} />;
          // return this.newOrderListFunctionNav(orders);
      })
    }

    submitForApproveListFunction = () => {
      return this.filterOrderByState(this.state.orderList,"SUBMIT_TO_APPROVE").map(function(orders,index){
          return <SubmitForApproveNav orderObj={orders} index={index} />;
        })
    }

   /* approveFromManagerListFunction = () => {
      return this.filterOrderByState(this.state.orderList,"APPROVED_FROM_MANAGER").map(function(orders,index){
          return <ApproveFromManagerNav orderObj={orders} index={index}/>;
        })
    }
    */

   sendToSupplierListFunction = () => {
      return this.filterOrderByState(this.state.orderList,"SEND_TO_SUPPLIER").map(function(orders,index){
          return <SendToSupplierNav orderObj={orders} index={index} />;
        })
    }

  render() { 

      let viewNewOrder;
      let viewSubmitForApproveOrder;
     let viewAapproveFromManager;
      let viewSendToSupplier;

        viewNewOrder = 
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
            {this.newOrderListFunction()}
          </tbody>
        </table>

        viewSubmitForApproveOrder = 
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
            {this.submitForApproveListFunction()}
          </tbody>
        </table> 

      /*viewAapproveFromManager = 
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
            {this.approveFromManagerListFunction()}
          </tbody>
        </table> 
        */

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
    
    return ( 
      
      <Router>
      <HeaderSiteManager/>
      <NavigationButton/>
      <div className="raw">
      <div className="col-md-12">
          {/* <div className="panel-body"> 
          <form onSubmit={this.submitHandler}> 
                <button  type="button" className="button" onClick={this.supplierButtonHandler}>Supplier</button> 
                <button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.itemButtonHandler}>Item</button> 
            </form> 
          </div>  */}
          <br/>
          <div>
            <Tabs defaultActiveKey="New_Order" id="uncontrolled-tab-example">
              <Tab eventKey="New_Order" title="NewOrder">
                <br/>
                {viewNewOrder}
              </Tab>
              <Tab eventKey="Submit_For_Approve" title="Submit For Approve">
                <br/>
                {viewSubmitForApproveOrder}
              </Tab>
              <Tab eventKey="Approved_From_Manager" title="Approved From Manager">
                <br/>
                {viewAapproveFromManager}
              </Tab>
              {/*
              <Tab eventKey="Send_To_supplier" title="Send To supplier">
                <br/>
                {viewSendToSupplier}
              </Tab>*/}
              <Tab eventKey="Add_Order" title="Make A Order">
                <br/>
                {/* <AddOrder/> */}
              </Tab>
              <Tab eventKey="Add_Delivery_Details" title="Add Delivery Details">
                <br/>
                <AddDeliveryDetails/>
              </Tab>
            </Tabs>
          </div>
          <br/>
          <div>
          
          {/* <Route path="/modify/" render={(routeProps) => (
                    <ModUser {...routeProps} User={this.props}/>
                )}/>
          */}
         {/* <Route path="/SEND_TO_SUPPLIER" component={UpdateStatus} */}
          <Route path="/SUBMIT_TO_APPROVE" component={UpdateStatus} />
          <Route path="/INITIATE" component={UpdateStatus} />
          </div>
      {/* </div>  */}
          {/* // <div class="modal-body">

          // </div> */}
          </div>
          </div>
          </Router>
    ) 
  } 
} 
 
export default SiteManagerDashBoard 