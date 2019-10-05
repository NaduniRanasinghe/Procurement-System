import React, { Component } from 'react'
import { Link , withRouter,BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'
import HeaderManager from "./HeaderManager";
import constant from '../constant';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import UpdateStatus from './UpdateStatus'
import AddEmployee from './AddEmployee';
import AddSite from '../Site/AddSite';

const PendingApproveNav = props =>(

    <tr>
        <td>{props.index+1}</td>
        <td>{props.orderObj.orderName}</td>
        <td>{props.orderObj.totalPrice}</td>
        <td>
            <Link className="btn btn-outline-success" to={"/APPROVED_FROM_MANAGER/"+props.orderObj.id}>Approve</Link>
            <Link className="btn btn-outline-danger" to={"/REJECTED_FROM_MANAGER/"+props.orderObj.id}>Reject</Link>
            <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
        </td>
    </tr>

);

const ApproveOrderNav = props =>(

    <tr>
        <td>{props.index+1}</td>
        <td>{props.orderObj.orderName}</td>
        <td>{props.orderObj.totalPrice}</td>
        <td>
            <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
        </td>
    </tr>

);

const RejectOrderNav = props =>(

    <tr>
        <td>{props.index+1}</td>
        <td>{props.orderObj.orderName}</td>
        <td>{props.orderObj.totalPrice}</td>
        <td>
            <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link>
        </td>
    </tr>

);

class ManagerDashBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orderList:[],
            orderListNew:[],
            orderListSubmitForApprove:[],
            orderListApproveFromManager:[],
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


    employeeButtonHandler= () => {
        this.props.history.push("/AddEmployee")

    }

    siteButtonHandler = () => {
        this.props.history.push("/AddSite")

    }

    signinButtonHandler = () => {
        this.props.history.push("/Login")
    }

    pendingApprovalListFunction = () => {
        return this.filterOrderByState(this.state.orderList,"SUBMIT_TO_APPROVE").map(function(orders,index){
            return <PendingApproveNav orderObj={orders} index={index} />;
        })
    }

    approveOrderListFunction = () => {
        return this.filterOrderByState(this.state.orderList,"APPROVED_FROM_MANAGER").map(function(orders,index){
            return <ApproveOrderNav orderObj={orders} index={index} />;
        })
    }

    rejectOrderListFunction = () => {
        return this.filterOrderByState(this.state.orderList,"REJECTED_FROM_MANAGER").map(function(orders,index){
            return <RejectOrderNav orderObj={orders} index={index}/>;
        })
    }

    logOutButtonHandler = () => {
        this.props.history.push("/Login")
    }


    render() {

        let viewPendingApproval;
        let viewApproveOrder;
        let viewRejectOrder;

        viewPendingApproval =
            <table class="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Order Name</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.pendingApprovalListFunction()}
                </tbody>
            </table>

        viewApproveOrder =
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Order Name</th>
                    <th>Total Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.approveOrderListFunction()}
                </tbody>
            </table>

        viewRejectOrder =
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Order Name</th>
                    <th>Total Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.rejectOrderListFunction()}
                </tbody>
            </table>

        return (

            <Router>
                <HeaderManager/>
                <div>
                        <button type="button" className="btn btn-outline-secondary registerBtn" onClick={this.logOutButtonHandler}>Log Out</button> 
                </div>
                {/* <NavigationButton/> */}
                <div className="raw">
                    <div className="col-md-12">

                        <br/>
                        <div>
                            <Tabs defaultActiveKey="Pending_Approval" id="uncontrolled-tab-example">
                                <Tab eventKey="Pending_Approval" title="Pending Approval">
                                    <br/>
                                    {viewPendingApproval}
                                </Tab>
                                <Tab eventKey="Approve_Order" title="Approve Order">
                                    <br/>
                                    {viewApproveOrder}
                                </Tab>
                                <Tab eventKey="Reject_Order" title="Reject Order">
                                    <br/>
                                    {viewRejectOrder}
                                </Tab>
                                <Tab eventKey="Add_Suppler" title="Add Employee">
                                    <br/>
                                    <AddEmployee/>
                                </Tab>
                                <Tab eventKey="Add_Item" title="Add Site">
                                    <br/>
                                    <AddSite/>
                                </Tab>
                            </Tabs>
                        </div>
                        <br/>
                        <div>
                            <Route path="/APPROVED_FROM_MANAGER" component={UpdateStatus} />
                            <Route path="/REJECTED_FROM_MANAGER" component={UpdateStatus} />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default ManagerDashBoard