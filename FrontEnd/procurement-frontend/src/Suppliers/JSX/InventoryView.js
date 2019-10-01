import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/Inventory.css";
import InventoryViewContent from "./InventoryViewContent";

// localStorage.setItem("user", null);
export default class InventoryView extends Component {
    
    render() {
        return (
            <div>
                <SupplierHeader/>
                <InventoryViewContent/>
                <Footer/>
            </div>
        );
    }
}   