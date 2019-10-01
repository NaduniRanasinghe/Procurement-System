import React, {Component} from 'react'
import {BrowserRouter as BrowserRouter, Route, Link,Router} from "react-router-dom";
import Inventory from './Inventory';
import InventoryAdd from './InventoryAdd';
import SupplierViewOrders from './SupplierViewOrderMain'
import "../CSS/SupplierHeader.css";


export default class ContentPageAdmin extends Component {
    render() {
        return (
            <BrowserRouter>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                            </li>
                            <li className="navbar-item">
                            </li>
                        </ul>
                    </nav>
                    <div style={{
                        marginLeft: "350px",
                        marginTop: '100px',
                        color: 'black',
                        fontFamily: 'Arial',
                        width: '1400px'
                    }}>
                            <a className="btn btn-outline-danger "
                                style={{
                                    width: '400px',
                                    height: '500px',
                                    background: '',
                                    marginLeft: '60px',

                            }} href="/SupplierViewMain"> ><h2 style={{marginTop: '200px'}}>VIEW ORDER</h2></a>
                            <a className="btn btn-outline-danger "
                                style={{
                                    width: '400px',
                                    height: '500px',
                                    background: '',
                                    marginLeft: '40px',
                            }} href="/Inventory"> <h2 style={{marginTop: '200px'}}>ADD INVENTORY</h2></a>

                            <a className="btn btn-outline-danger "
                                style={{
                                    width: '400px',
                                    height: '500px',
                                    background: '',
                                    marginLeft: '40px',
                            }} href="/InventoryView"> <h2 style={{marginTop: '200px'}}>VIEW INVENTORY</h2></a>
                    </div>
            </BrowserRouter>
        );
    }
}