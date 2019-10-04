import React, { Component } from 'react'
import axios from 'axios'
import constant from '../constant';

class AddEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname:'',
            lname:'',
            nic:'',
            empTypes:[
                {id: 'MGR', name: 'Senior Manager'},
                {id: 'PO', name: 'Procument Officer'},
                {id: 'SM', name: 'Site Manager'}
            ],
            empType:'',
            email:'',
            password:'',
            locations:[],
            location:'',
            phone:''
        }
        this.changeHandler = this.changeHandler.bind();
        this.submitHandler = this.submitHandler.bind();
    }

    changeHandler = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    // componentDidMount() {
    //     axios.get(constant()+'/getsites').then(
    //         data => {
    //             this.setState({
    //                 locations: data.data,
    //                 location:data.data[0].id //get first object id from site list and set status to default site
    //             })
    //         }
    //     ).catch(error => {
    //         console.log(error)
    //     })
    // }


    submitHandler = (e) => {
        e.preventDefault()
        let obj = {
            fname:this.state.fname,
            lname:this.state.lname,
            nic: this.state.nic,
            empType: this.state.empType,
            email: this.state.email,
            location: this.state.location,
            password: this.state.password
        }

            console.log(this.state)
        axios.post(constant()+'/employee/save', obj)
            .then(response => {
                console.log(response)
                if(response.data != ''){
                    alert(`Item added successfully...`);
                    window.location.reload();
                    this.props.history.push("/ProcumentDashBoard")
                }

            }) .catch(error => {
            console.log(error)
        })
    }

    // employeeAddButtonHandler = () => {
    //     window.location.reload();
    // }


    render() {
        const { fname,lname,nic, email, empType, password, location, phone} = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Employee Registration
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label>First Name:</label>
                                <input type='text' className="form-control" name="fname" value={fname} onChange={this.changeHandler} placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                                <label>Last Name:</label>
                                <input type='text' className="form-control" name="lname" value={lname} onChange={this.changeHandler} placeholder="Last Name"/>
                            </div>
                            <div className="form-group">
                                <label>NIC:</label>
                                <input type='text' className="form-control" name="nic" value={nic} onChange={this.changeHandler} placeholder="NIC" />
                            </div>
                            <div className="form-group">
                                <label>Employee Type</label>
                                <select className="form-control" name="location" onChange={this.changeHandler} value={empType}>
                                    {
                                        this.state.empTypes.map(sub => {
                                            return (
                                                <option key={sub.id} value={sub.id}>{sub.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type='email' className="form-control" name="email" value={email} onChange={this.changeHandler} placeholder="Email" />
                            </div>
                            {/*<div className="form-group">*/}
                            {/*    <label>Work Location:</label>*/}
                            {/*    <select className="form-control" name="location" onChange={this.changeHandler} value={location}>*/}
                            {/*        {*/}
                            {/*            this.state.locations.map(sub => {*/}
                            {/*                return (*/}
                            {/*                    <option key={sub.id} value={sub.id}>{sub.siteName}</option>*/}
                            {/*                )*/}
                            {/*            })*/}
                            {/*        }*/}
                            {/*    </select>*/}
                            {/*</div>*/}
                            <div className="form-group">
                                <label>Contact Number:</label>
                                <input type='text' className="form-control" name="phone" value={phone} onChange={this.changeHandler} placeholder="contact number" />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type='password'  className="form-control" name="password" value={password} onChange={this.changeHandler} placeholder="password" />
                            </div>

                            <button type="submit" className="btn btn btn-outline-success registerBtn" >Add Employee</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddEmployee