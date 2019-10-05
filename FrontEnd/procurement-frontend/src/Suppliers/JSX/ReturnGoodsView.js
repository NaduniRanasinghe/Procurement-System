import React, { Component } from 'react';
import axios from 'axios';

class ReturnGoodsView extends Component {
    constructor() {
        super()
        this.state = {
            retItemId:'',
            retDate:'',
            retItemName:'',
            supplier:'',
            returngoods: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8090/ReturnItemController/getAllReturnItem').then(
            data => {
                this.setState({
                    returngoods: data.data
                });
            }
        )
    }
    render() {
        return (
            <div className="container" style={{marginTop:'50px'}}>

                <h1>Return Goods View</h1>
                <br>
                </br>
                <table className="table">
                    <thead>
                        <th>RETURN ITEM ID</th>
                        <th>RETURN DATE</th>
                        <th>RETURN ITEM NAME</th>
                        <th>SUPPLIER</th>
                    </thead>
                    <tbody>
                        {
                            this.state.returngoods.map( returngood=> {
                                return (
                                    <tr key={returngood.retItemId}>
                                        <td>{returngood.retItemId}</td>
                                        <td>{returngood.retDate}</td>
                                        <td>{returngood.retItemName}</td>
                                        <td>{returngood.supplier}</td>
                                        {/* <td>{cou.lectureInCharge}</td> */}
                                        {/* <td><button onClick={this.viewSubjects.bind(this,cou.subject)}>View Subject Info</button></td>
                                        <td><button onClick={this.calculate.bind(this,cou.subject)}>Cost</button></td> */}
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

export default ReturnGoodsView