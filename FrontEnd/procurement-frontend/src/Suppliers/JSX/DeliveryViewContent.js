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
        axios.get('http://localhost:8090/showDeliveryItems').then(
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
                        <th>Delivery Date :</th>
                        <th>Delivery Supplier :</th>
                        <th>Delivery Ordername :</th>
                        <th>Delivery Note :</th>
                    </thead>
                    <tbody>
                        {
                            this.state.deliveries.map( delivery=> {
                                return (
                                    <tr key={delivery.did}>
                                        <td>{delivery.did}</td>
                                        <td>{delivery.date}</td>
                                        <td>{delivery.supplier}</td>
                                        <td>{delivery.orderName}</td>
                                        <td>{delivery.notes}</td>
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