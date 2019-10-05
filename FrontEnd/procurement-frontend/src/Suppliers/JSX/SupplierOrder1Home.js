import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/SupplierHeader.css";
import SupplierOrder1 from './SupplierOrder1';

// localStorage.setItem("user", null);
export default class SupplierOrder1Home extends Component {

    render() {
        return (
            <div>
                <SupplierHeader/>
                {/* <div id ="content">

                </div> */}
                <SupplierOrder1/>
                <div id ="content">
                </div>
            </div>
        );
    }
}   