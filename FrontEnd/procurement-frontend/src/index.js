import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom";
import './index.css';
// import App from './App.js';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Login from './components/Login';
import ProcumentDashBoard from './components/procurement/ProcurementDashBoard'
import AddSupplier from './components/procurement/AddSupplier'
import AddItem from './components/procurement/AddItem'
import SupplierHome from './Suppliers/JSX/SupplierHome'
import Inventory from './Suppliers/JSX/Inventory'
import InventoryView from './Suppliers/JSX/InventoryView'
import Profile from './Suppliers/JSX/Profile'
import SupplierViewMain from './Suppliers/JSX/SupplierViewOrderMain'
ReactDOM.render(

    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route  path='/Login' component={Login} />
            <Route  path='/ProcumentDashBoard' component={ProcumentDashBoard} />
            <Route  path='/AddSupplier' component={AddSupplier} />
            <Route  path='/AddItem' component={AddItem} />
            <Route  path='/AddSupplier' component={AddSupplier} />
            <Route path ='/SuppliersHome' component={SupplierHome}/>
            <Route path ='/Inventory' component={Inventory}/>
            <Route path ='/InventoryView' component={InventoryView}/>
            <Route path ='/Profile' component={Profile}/>
            <Route path ='/SupplierViewMain' component ={SupplierViewMain}/>
        </div>
  </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();