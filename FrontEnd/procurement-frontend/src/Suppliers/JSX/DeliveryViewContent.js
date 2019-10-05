import React, { Component } from 'react';
import axios from 'axios';

class DeliveryViewContent extends Component {
    constructor() {
        super()
        this.state = {

            deliveries: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8090/deliveryitem').then(
            data => {
                this.setState({
                    deliveries: data.data
                });
            }
        )
    }

    render() {
        return (
            <div className="container" style={{marginTop:'50px'}}>

                <h1>Delivery View</h1>
                <br>
                </br>
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>ITEM NAME</th>
                        <th>QUANTITY</th>
                        <th>DATE</th>
                        <th>PRICE</th>
                    </thead>
                    <tbody>
                        {
                            this.state.deliveries.map( delivery=> {
                                return (
                                    <tr key={delivery.deliveryId}>
                                        <td>{delivery.deliveryId}</td>
                                        <td>{delivery.ItemName}</td>
                                        <td>{delivery.quanitity}</td>
                                        <td>{delivery.date}</td>
                                        <td>{delivery.price}</td>
                                        {/* <td>{cou.lectureInCharge}</td> */}
                                        {/* <td><button onClick={this.viewSubjects.bind(this,cou.subject)}>View Subject Info</button></td>
                                        <td><button onClick={this.calculate.bind(this,cou.subject)}>Cost</button></td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

        )
    }
}

export default DeliveryViewContent