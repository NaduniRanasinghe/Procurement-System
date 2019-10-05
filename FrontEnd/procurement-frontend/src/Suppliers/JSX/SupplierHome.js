import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/SupplierHeader.css";
import SupplierContent from "./SupplierContent";

// localStorage.setItem("user", null);
export default class SupplierHome extends Component {

    render() {
        return (
            <div>
                <SupplierHeader/>
                {/* <div id ="content">

                </div> */}
                <SupplierContent/>
                <div id ="content">

                </div>

            </div>
        );
    }
}   