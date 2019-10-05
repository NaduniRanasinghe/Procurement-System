import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom";
import './index.css';
// import App from './App.js';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Login from './components/Login';
import ProcurementDashBoard from './components/procurement/ProcurementDashBoard'
import AddSupplier from './components/procurement/AddSupplier'
import AddItem from './components/procurement/AddItem'
import AddOrder from './components/SiteManager/AddOrder'
import AddDeliveryDetails from './components/SiteManager/AddDeliveryDetails'
import SiteManagerDashBoard from './components/SiteManager/SiteManagerDashBoard'
import Delivery from './Suppliers/JSX/Delivery'
import DeliveryView from './Suppliers/JSX/DeliveryView'
import Profile from './Suppliers/JSX/Profile'
import SupplierViewMain from './Suppliers/JSX/SupplierViewOrderMain'
import ManagerDashBoard from './components/Employees/ManagerDashboard'

import ReturnGoodsHome from './Suppliers/JSX/AddReturnGood';
import AddReturnGoodsHome from './Suppliers/JSX/AddReturnGoodsHome';
import AddCreditNoteHome from './Suppliers/JSX/AddCreditNoteHome';
import ReturnGoodsView from './Suppliers/JSX/ReturnGoodsHome';
import CreditNoteViewHome from './Suppliers/JSX/CreditNoteViewHome';
import SupplierOrder1Home from './Suppliers/JSX/SupplierOrder1Home';
import SupplierHome from './Suppliers/JSX/SupplierHome';
import LogOut from './components/procurement/LogOut';
ReactDOM.render(

    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route  path='/Login' component={Login} />
            <Route  path='/ProcurementDashBoard' component={ProcurementDashBoard} />
            <Route  path='/AddSupplier' component={AddSupplier} />
            <Route  path='/AddItem' component={AddItem} />
            <Route  path='/AddSupplier' component={AddSupplier} />
            <Route path ='/SuppliersHome' component={SupplierHome}/>
            <Route path ='/Delivery' component={Delivery}/>
            <Route path ='/DeliveryView' component={DeliveryView}/>
            <Route path ='/Profile' component={Profile}/>
            <Route path ='/SupplierViewMain' component ={SupplierViewMain}/>
            <Route  path='/AddItem' component={AddItem}/>
            <Route  path='/SiteManagerDashBoard' component={SiteManagerDashBoard} />
            <Route  path='/AddOrder' component={AddOrder} />
            <Route  path='/AddDeliveryDetails' component={AddDeliveryDetails} />
            <Route  path='/ManagerDashBoard' component={ManagerDashBoard} />
            <Route path ='/AddReturnGoodsHome' component ={AddReturnGoodsHome}/>
            <Route path='/AddCreditNote' component={AddCreditNoteHome}/>
            <Route path='/ReturnGoodsView' component={ReturnGoodsView}/>
            <Route path='/CreditNoteView' component={CreditNoteViewHome}/>
            <Route path ="/SupplierOrderHome" component={SupplierOrder1Home}/>
            <Route path ="/SupplierHome" component={SupplierHome}/>
            <Route path ="/LogOut" component={LogOut}/>
        </div>
  </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();