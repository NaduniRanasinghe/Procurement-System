import React, {Component} from 'react'
import {BrowserRouter as BrowserRouter, Route, Link,Router} from "react-router-dom";
import "../CSS/SupplierHeader.css";

export default class ContentPageAdmin extends Component {
    render() {
        return (
            <BrowserRouter>
                    <div style={{
                        marginLeft: "350px",
                        marginTop: '100px',
                        color: 'black',
                        fontFamily: 'Arial',
                        width: '1400px'
                    }}>
                            <a className="btn btn-outline-danger "
                                style={{
                                    width: '320px',
                                    height: '500px',
                                    background: '',
                                    marginLeft: '20px',
                            }} href="/SupplierViewMain"> <h2 style={{marginTop: '200px'}}>VIEW ORDER</h2></a>

                            <a className="btn btn-outline-danger "
                                style={{
                                    width: '320px',
                                    height: '500px',
                                    background: '',
                                    marginLeft: '10px',
                            }} href="/Delivery"> <h2 style={{marginTop: '200px'}}>DELIVERY</h2></a>

                            <a className="btn btn-outline-danger "
                                style={{
                                    width: '320px',
                                    height: '500px',
                                    background: '',
                                    marginLeft: '10px',
                            }} href="/AddCreditNote"> <h2 style={{marginTop: '200px'}}>CREDIT NOTES</h2></a>

                            <a className="btn btn-outline-danger "
                                style={{
                                    width: '350px',
                                    height: '500px',
                                    background: '',
                                    marginLeft: '10px',
                            }} href="/AddReturnGoodsHome"> <h2 style={{marginTop: '200px'}}>RETURNED GOODS</h2></a>
                    </div>
            </BrowserRouter>
        );
    }
}