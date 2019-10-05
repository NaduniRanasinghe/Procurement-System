import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/Delivery.css";
import DeliveryViewContent from "./DeliveryViewContent";

// localStorage.setItem("user", null);
export default class DeliveryView extends Component {
    render() {
        return (
            <div>
                <SupplierHeader/>
                <DeliveryViewContent/>
            </div>
        );
    }
}   