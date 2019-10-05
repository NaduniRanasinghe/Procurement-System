import React, { Component } from 'react' 
import axios from 'axios' 
import constant from '../constant'; 

const CreateOrderNav = props =>(
  
    <tr>
      <td>{props.index+1}</td>
      <td>{props.itemObj.iName}</td>
      <td>{props.itemObj.currentPrice}</td>
      <td>
        {/* <Link className="btn btn-outline-primary" to={"/DELETE/"+props.orderObj.id}>Submit For approve</Link>
        <Link className="btn btn-outline-secondary" to={"/VIEW/"+props.orderObj.id}>View</Link> */}
      </td>
    </tr>

);
 
class AddOrder extends Component { 
    constructor(props) { 
      super(props) 
      
    // this.createItemListFunction = this.createItemListFunction.bind(this);
      this.state = {
         iName:'',
         currentPrice:'',
         orderName:'', 
         totalPrice:'',
         itemList:[],
         item:'',
         orderItemList:[],
         status:'',
         remark:''
      } 
    } 
 
    changeHandler = (e) => { 
        const state = this.state 
        state[e.target.name] = e.target.value; 
        this.setState(state) 
    } 

    addItemHandler = (e) => { 
        const state = this.state 
        state[e.target.name] = e.target.value; 
        this.setState(state) 
        let obj = this.getItemObjList(state.item);
        this.state.orderItemList.push(obj);
        console.log(obj);
    } 

    componentDidMount() {
        axios.get(constant()+'/getitems').then( 
            data => { 
                this.setState({ 
                    itemList: data.data,
                    // supplier:data.data[0].id //get first object id from supplier list and set status to defult supplier
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
            orderName:this.state.orderName, 
            itemList:this.state.orderItemList,
            status:"INITIATE",  
         } 
        
        console.log(this.state) 
        axios.post(constant()+'/save/order', obj) 
        .then(response => { 
            console.log(response) 
            if(response.data != ''){ 
              alert(`Order added successfully...`); 
              window.location.reload(); 
              this.props.history.push("/SiteManagerDashBoard") 
            } 
             
        }) .catch(error => { 
            console.log(error) 
        }) 
      } 

          //return order List accourding to respective STATUS
    getItemObjList(itemId){
        let itemIdInt  = parseInt(itemId, 10);
        let value = '';
        this.state.itemList.map(function(item,index){

            if(item.id === itemIdInt){
                value = item
                console.log(item + "sdsdgfhdfjdjfgdjfj");
            }
            console.log(item);
        })
        return value;
      }

    //   createItemListFunction = () => {
    //     // return this.getItemObjList(this.state.orderItemList, this.state.itemList).map(function(item,index){
    //     return this.state.itemList.map(function(item,index){
    //         return <CreateOrderNav itemObj={item} index={index} />;
    //       })
    //   }

      renderTableData() {
        return this.state.orderItemList.map((itemM, index) => {

            const { iName , currentPrice} = itemM;

            // let tPrice = this.state.totalPrice;
            // tPrice = tPrice + currentPrice;
            // this.setState({ 
            //     totalPrice : tPrice,
            // }) 
            // let obj = this.getItemObjList(this.state.itemList,itemM);

        //    const { item } = itemM //destructuring
           return (
              <tr>
                <td>{index + 1}</td>
                 <td>{iName}</td>
                 <td>{currentPrice}</td>
              </tr>
           )
        })
     }
     
  render() { 
    const { orderName, item, totalPrice} = this.state; 
    return ( 
        <div className="container"> 
            <div className="panel panel-default"> 
                <div className="panel-heading"> 
                    <h3 className="panel-title"> 
                        Make Order
                    </h3> 
                </div> 
                <div className="panel-body"> 
                    <form onSubmit={this.submitHandler}> 
                        <div className="form-group"> 
                            <label>Order Name:</label> 
                            <input type='text' id="validationCustom01" className="form-control" name="orderName" value={orderName} onChange={this.changeHandler} placeholder="Order name" /> 
                        </div> 
                        <div className="form-group"> 
                            <label>Add Item:</label> 
                                <select className="form-control" name="item" onChange={this.addItemHandler} value={item}>
                                    {
                                        this.state.itemList.map(sub => {
                                            return (
                                                <option key={sub.id} value={sub.id}>{sub.iName + " " + sub.supplierName} </option>
                                            )
                                        })
                                    }
                                </select>
                        </div> 
                        <button type="submit" className="btn btn-outline-secondary loginBtn" >Make Order</button> 
                    </form> 
                </div>
                {/* <div className="form-group">
                    <label>Total price :{totalPrice}</label> 
                </div>  */}
                <div>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Item Price</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
                <div>
                    {/* <Route path="/SUBMIT" component={UpdateStatus} /> */}
                </div>
            </div> 
        </div> 
    ); 
  } 
} 
 
export default AddOrder 