import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/Inventory.css";
import ProfileContent from "./ProfileContent";

// localStorage.setItem("user", null);
export default class Profile extends Component {
    
    render() {
        return (
            <div>
                <SupplierHeader/>
                <Footer/>
            </div>
        );
    }
}   