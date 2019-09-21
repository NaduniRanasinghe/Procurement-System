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
import AddGoods from './components/procurement/AddGoods'
ReactDOM.render(
    
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route  path='/Login' component={Login} />
            <Route  path='/ProcumentDashBoard' component={ProcumentDashBoard} />
            <Route  path='/AddSupplier' component={AddSupplier} />
            <Route  path='/AddGoods' component={AddGoods} />
        </div>
  </Router>
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();