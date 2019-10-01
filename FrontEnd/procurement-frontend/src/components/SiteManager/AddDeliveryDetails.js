import React, { Component } from 'react' 
import axios from 'axios' 
import constant from '../constant'; 
 
class AddDeliveryDetails extends Component { 
    constructor(props) { 
      super(props) 
     
      this.state = { 
         date:'', 
         suppliers:[],
         supplier:'',
         Orders:[],
         Oname:'',
         note:'',

       
         
      } 
    } 
 
    changeHandler = (e) => { 
        const state = this.state 
        state[e.target.name] = e.target.value; 
        this.setState(state) 
    } 
 
    componentDidMount() {
        axios.get(constant()+'/getsuppliers').then( 
            data => { 
                this.setState({ 
                    suppliers: data.data,
                    supplier:data.data[0].id //get first object id from supplier list and set status to defult supplier
                }) 
            } 
        ).catch(error => { 
            console.log(error) 
        }) 
        axios.get(constant()+'/').then( 
            data => { 
                this.setState({ 
                    Orders: data.data,
                    Oname:data.data[0].id //get first object id from order list and set status to defult order
                }) 
            } 
        ).catch(error => { 
            console.log(error) 
        }) 
        
    } 
 
 
    submitHandler = (e) => {
        e.preventDefault() 
        // const data = new FormData();

        // data.append("iName", this.state.iName);
        // data.append("supplier", this.state.supplier);
        let obj = { 
            date:this.state.date, 
            supplier:this.state.supplier,  
            Oname: this.state.Oname,
            note: this.state.note,
         } 
        
        console.log(this.state) 
        axios.post(constant()+'/save/item', obj) 
        .then(response => { 
            console.log(response) 
            if(response.data != ''){ 
              alert(`Delivery details added successfully...`); 
              window.location.reload(); 
              this.props.history.push("/SiteManagerDashBoard") 
            } 
             
        }) .catch(error => { 
            console.log(error) 
        }) 
      } 
     
  render() { 
    const { date, Oname, supplier,note} = this.state; 
    return ( 
        <div className="container"> 
            <div className="panel panel-default"> 
                <div className="panel-heading"> 
                    <h3 className="panel-title"> 
                         Add Delivery Details 
                    </h3> 
                </div> 
                <div className="panel-body"> 
                <form onSubmit={this.submitHandler}> 
                    <div className="form-group"> 
                        <label>Received Date:</label> 
                        <input type='text' id="validationCustom01" className="form-control" name="date" value={date} onChange={this.changeHandler} placeholder="Received Date" /> 
                    </div> 
                    <div className="form-group"> 
                        <label>Supplier:</label> 
                            <select className="form-control" name="supplier" onChange={this.changeHandler} value={supplier}>
                                {
                                    this.state.suppliers.map(sub => {
                                        return (
                                            <option key={sub.id} value={sub.id}>{sub.sName}</option>
                                        )
                                    })
                                }
                            </select>
                    </div> 
                    <div className="form-group"> 
                        <label>Supplier:</label> 
                            <select className="form-control" name="supplier" onChange={this.changeHandler} value={supplier}>
                                {
                                    this.state.suppliers.map(sub => {
                                        return (
                                            <option key={sub.id} value={sub.id}>{sub.sName}</option>
                                        )
                                    })
                                }
                            </select>
                    </div> 
                    <div className="form-group"> 
                        <label>Order Name:</label> 
                            <select className="form-control" name="Oname" onChange={this.changeHandler} value={Oname}>
                                {
                                    this.state.Orders.map(or => {
                                        return (
                                            <option key={or.id} value={or.id}>{or.order_name}</option>
                                        )
                                    })
                                }
                            </select>
                    </div> 
                    <div className="form-group"> 
                        <label>Notes:</label> 
                        <input type='text' id="validationCustom01" className="form-control" name="note" value={note} onChange={this.changeHandler} placeholder="Notes" /> 
                    </div> 
                    <button type="submit" className="btn btn-outline-secondary loginBtn" >Submit</button> 
                </form> 
                </div> 
            </div> 
        </div> 
    ); 
  } 
} 
 
export default AddDeliveryDetails