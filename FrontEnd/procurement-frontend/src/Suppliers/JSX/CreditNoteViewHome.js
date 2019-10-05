import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/SupplierHeader.css";
import ReturnGoodsView from "./ReturnGoodsView";
import CreditNoteView from './CreditNoteView';

// localStorage.setItem("user", null);
export default class CreditNoteViewHome extends Component {

    render() {
        return (
            <div>
                <SupplierHeader/>
                {/* <div id ="content">
                </div> */}
                <CreditNoteView/>
                <div id ="content">
                </div>
            </div>
        );
    }
}   