import React, { Component } from 'react';
import axios from 'axios';
import "../CSS/Profile.css";


class ProfileContent extends Component {

    constructor() {
        super()
        this.state = {
            supplierdata:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8090/getsupplier/1').then(
            data => {
                this.setState({
                    supplierdata: data.data
                });
            }
        )
    }

    render() {
        return (
            <div className="container" style={{marginTop:'50px'}}>
                <table className="table">
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADDRESS</th>

                    <tbody>

                        <td>{this.state.supplierdata.sName}</td>
                        <td> {this.state.supplierdata.email}</td>
                        <td>{this.state.supplierdata.address}</td>        

                    </tbody>

                </table>
                <div className="" style={{}}>
                            <input type="submit" value="EDIT PROFILE" className="btn btn-primary" style={{width:'200px',height:'40px',float:"center",marginBottom:'100px',marginTop:'50px',marginLeft:'400px'}}/>
                </div>

            </div>

        )
    }
}
export default ProfileContent