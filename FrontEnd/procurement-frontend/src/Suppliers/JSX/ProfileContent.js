import React, { Component } from 'react';
import axios from 'axios';

class ProfileContent extends Component {
    constructor() {
        super()
        this.state = {
            id:'',
            item_name:'',
            quantity:'',
            price:'',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8090/inventoryItems').then(
            data => {
                this.setState({
                    inventories: data.data
                });
            }
        )
    }
    render() {
        return (
            <div className="container" style={{marginTop:'50px'}}>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>ITEM NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
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
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="" style={{}}>
                            <input type="submit" value="GENERATE REPORT" className="btn btn-primary" style={{width:'200px',height:'40px',float:"center",marginBottom:'100px',marginTop:'50px',marginLeft:'400px'}}/>
                </div>

            </div>

        )
    }
}

export default ProfileContent