import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/Inventory.css";
import InventoryAdd from "./InventoryAdd";

// localStorage.setItem("user", null);
export default class Inventory extends Component {

    render() {
        return (
            <div>
                <SupplierHeader/>
                <InventoryAdd/>
                <div id ="content">
                </div>
                <Footer/>
            </div>
        );
    }
}   