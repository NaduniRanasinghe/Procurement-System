import React, {Component} from 'react';
// import Register from "./Register";
import SupplierHeader from "./SupplierHeader";
import Footer from "./Footer";
import "../CSS/SupplierHeader.css";
import AddReturnGoods from "./AddReturnGood";

// localStorage.setItem("user", null);
export default class AddReturnGoodsHome extends Component {

    render() {
        return (
            <div>
                <SupplierHeader/>
                {/* <div id ="content">
                </div> */}
                <AddReturnGoods/>
                <div id ="content">
                </div>
            </div>
        );
    }
}   