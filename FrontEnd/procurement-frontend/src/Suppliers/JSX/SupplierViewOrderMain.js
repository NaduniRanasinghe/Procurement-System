import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/SupplierHeader.css";
import SupplierViewOrder from './SupplierViewOrder';

// localStorage.setItem("user", null);
export default class SupplierViewOrderMain extends Component {

    render() {
        return (
            <div>
                <SupplierHeader/>
                {/* <div id ="content">

                </div> */}
                <SupplierViewOrder/>
                <div id ="content">

                </div>
            </div>
        );
    }
}   