import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/SupplierHeader.css";
import ReturnGoodsView from "./ReturnGoodsView";
import AddCreditNote from './AddCreditNote';

// localStorage.setItem("user", null);
export default class AddCreditNoteHome extends Component {

    render() {
        return (
            <div>
                <SupplierHeader/>
                {/* <div id ="content">
                </div> */}
                <AddCreditNote/>
                <div id ="content">
                </div>
            </div>
        );
    }
}   