import React,{Component} from 'react';
import axios from "axios";
import "../CSS/Delivery.css";


export default class DeliveryAdd extends Component{
    
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuanity = this.onChangeQuanity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state= {
            deliveryId:'',
            itemName:'',
            quanitity:'',
            date:'',
            price:'',
            item_name_error:'',
            item_quanitity_error:'',
            price_error:''
        }
    };
    onChangeName(e){
        this.setState({
            itemName : e.target.value
        });
    }
    onChangeQuanity(e){
        this.setState({
            quanitity:e.target.value
        });
    }
    onChangePrice(e){
        this.setState({
            price:e.target.value
        });
    }
    onChangeDate(e){
        this.setState({
            date:e.target.value
        });
    }


    onSubmit(e){
        console.log(this.refs.item_name.value);
        e.preventDefault();

        // const isValid = this.validate();


        // if(isValid){

            const newDeliveryItem={
                itemName: this.state.itemName,
                quanitity: this.state.quanitity,
                date:this.state.date,
                price:this.state.price
            };

            axios.post('http://localhost:8090/save/deliveryitem', newDeliveryItem)
                .then(res => {
                        console.log(res);
                        alert(`Delivery Item added Succesfully`);
                    }
                );

            this.state= {
                itemName:'',
                quanitity:'',
                date:'',
                price:''
            }
        //}
    }


    componentDidMount() {
        document.title="Supplier - Delivery";

    }

    render() {
        return(
            <div style={{background:'',marginTop:'80px'}}>
                <div className="container" style={{width:700,background:'',color:'black'}}>
                    <h3 align="center">ADD NEW DELIVERY ITEM</h3>                 
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                ref ="item_name"
                                placeholder="Item Name"
                                value={this.state.itemName || ''}
                                onChange={this.onChangeName}
                            required/>
                        </div>
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.item_name_error}
                        </div>
                        <div className="form-group">
                            <label>Quantity : </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Quantity Available"
                                value={this.state.quanitity || ''}
                                onChange={this.onChangeQuanity}
                                required
                            />
                        </div>
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.item_quanitity_error}
                        </div>
                        <div className="form-group">
                            <label>Date : </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Price Per Item"
                                value={this.state.date || ''}
                                onChange={this.onChangeDate}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Price Per Item: </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Price Per Item"
                                value={this.state.price || ''}
                                onChange={this.onChangePrice}
                                required
                            />
                        </div>
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.price_error}
                        </div>
                        <div className="form-gro" style={{marginTop:'1000px',marginLeft:'120px',width:'100px',display:'inline'}}>
                            <button className="btn btn-primary" style={{width:'200px',height:'40px',marginRight:'10px'}}><a className="nav-link active" href="/DeliveryView"style={{color:'white'}}>VIEW DELIVERY</a></button>
                            <input type="submit" value="ADD ITEM" className="btn btn-primary" style={{width:'200px',height:'40px'}}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}