import React, { Component } from 'react' 
import axios from 'axios' 
import constant from '../constant'; 
 
class AddItem extends Component { 
    constructor(props) { 
      super(props) 
     
      this.state = { 
         iName:'', 
         currentStatus:'',
         suppliers:[],
         supplier:'',
         currentPrice:''
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
    } 
 
 
    submitHandler = (e) => {
        e.preventDefault() 
        // const data = new FormData();

        // data.append("iName", this.state.iName);
        // data.append("supplier", this.state.supplier);
        let obj = { 
            iName:this.state.iName, 
            supplier:this.state.supplier,  
            currentPrice: this.state.currentPrice,
         } 
        
        console.log(this.state) 
        axios.post(constant()+'/save/item', obj) 
        .then(response => { 
            console.log(response) 
            if(response.data != ''){ 
              alert(`Item added successfully...`); 
              this.props.history.push("/ProcumentDashBoard") 
            } 
             
        }) .catch(error => { 
            console.log(error) 
        }) 
      } 
     
  render() { 
    const { iName, currentPrice, supplier} = this.state; 
    return ( 
        <div className="container"> 
            <div className="panel panel-default"> 
                <div className="panel-heading"> 
                    <h3 className="panel-title"> 
                         Add Items 
                    </h3> 
                </div> 
                <div className="panel-body"> 
                <form onSubmit={this.submitHandler}> 
                    <div className="form-group"> 
                        <label>Item Name:</label> 
                        <input type='text' id="validationCustom01" className="form-control" name="iName" value={iName} onChange={this.changeHandler} placeholder="Item name" /> 
                    </div> 
                    <div className="form-group"> 
                        <label>Current Price:</label> 
                        <input type='number' id="validationCustom01" className="form-control" name="currentPrice" value={currentPrice} onChange={this.changeHandler} placeholder="Current Price" /> 
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
                    <button type="submit" className="btn btn-outline-secondary loginBtn" >Save</button> 
                </form> 
                </div> 
            </div> 
        </div> 
    ); 
  } 
} 
 
export default AddItem 