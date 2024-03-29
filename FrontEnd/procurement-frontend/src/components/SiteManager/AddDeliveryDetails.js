import React, { Component } from 'react' 
import axios from 'axios' 
import constant from '../constant'; 
 
class AddDeliveryDetails extends Component { 
    constructor(props) { 
      super(props) 
     
      this.state = { 
         did:'', 
         orderName:'',
         date:'', 
         suppliers:[],
         supplier:'',
         Orders:[],
         notes:'', //change to note

       
      } 
      this.changeHandler = this.changeHandler.bind();
      this.submitHandler = this.submitHandler.bind();
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
         
        axios.get(constant()+'/getorders').then( 
            data => { 
                this.setState({ 
                    Orders: data.data,
                    orderName:data.data[0].id //get first object id from order list and set status to defult order
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
            orderName: this.state.orderName,   //Oname: this.state.Oname, 
            notes: this.state.notes,
         } 
        console.log(obj);

        console.log(this.state) 
        axios.post(constant()+'/save/DeliveryDetails', obj) 
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
    const { date, orderName, supplier,notes} = this.state; 
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
                 {/*   <div className="form-group"> 
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
                            */}
                    <div className="form-group"> 
                        <label>Order Name:</label> 
                            <select className="form-control" name="orderName" onChange={this.changeHandler} value={orderName}>
                                {
                                    this.state.Orders.map(or => {
                                        return (
                                            <option key={or.id} value={or.id}>{or.orderName}</option>
                                        )
                                    })
                                }
                            </select>
                    </div> 
                    <div className="form-group"> 
                        <label>Notes:</label> 
                        <input type='text' id="validationCustom01" className="form-control" name="notes" value={notes} onChange={this.changeHandler} placeholder="Notes" /> 
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