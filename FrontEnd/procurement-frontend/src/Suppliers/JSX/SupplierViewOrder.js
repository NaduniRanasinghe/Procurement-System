import React, { Component } from 'react';
import axios from 'axios';
import constant from './constant';

class SupplierViewOrder extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id:'',
            item_name:'',
            quantity:'',
            price:'',
            inventories: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8090/Items').then(
            data => {
                this.setState({
                    inventories: data.data
                });
            }
        )
    }
    onSubmit(e){
        e.preventDefault();

            axios.post('http://localhost:8090/printOrderReport')
                .then(res => {
                        console.log(res);
                        alert(`Invoice Generated Succesfully!!`);
                    }
                );
    }

    render() {
        return (
            <div className="container" style={{marginTop:'50px'}}>

            <div style={{display:"inline"}}>
                    <a href="/SupplierViewMain" style={{marginTop:'50px',paddingRight:'20px'}}><h5>Order 1</h5></a><a href="/SupplierOrderHome"><h5>Order 2</h5></a>
            </div>
                <h1>Purchase Orders</h1>
                <br/>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>ITEM NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE E</th>
                    </thead>
                    <tbody>
                        {
                            this.state.inventories.map( inventory=> {
                                return (
                                    <tr key={inventory.id}>
                                        <td>{inventory.id}</td>
                                        <td>{inventory.item_name}</td>
                                        <td>{inventory.quantity}</td>
                                        <td>{inventory.price}</td>
                                        {/* <td>{cou.lectureInCharge}</td> */}
                                        {/* <td><button onClick={this.viewSubjects.bind(this,cou.subject)}>View Subject Info</button></td>
                                        <td><button onClick={this.calculate.bind(this,cou.subject)}>Cost</button></td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                
                <form onSubmit={this.onSubmit}>
                <div className="" style={{}}>
                            <input type="submit" value="GENERATE REPORT" className="btn btn-primary" style={{width:'200px',height:'40px',float:"center",marginBottom:'100px',marginTop:'50px',marginLeft:'400px'}}/>
                </div>
                </form>
            </div>

        )
    }
}

export default SupplierViewOrder