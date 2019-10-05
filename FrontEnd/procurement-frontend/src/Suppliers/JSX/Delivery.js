import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/Delivery.css";
import DeliveryAdd from "./DeliveryAdd";

// localStorage.setItem("user", null);
export default class Delivery extends Component {

    render() {
        return (
            <div>
                <SupplierHeader/>
                <DeliveryAdd/>
                <div id ="content">
                </div>
            </div>
        );
    }
}   