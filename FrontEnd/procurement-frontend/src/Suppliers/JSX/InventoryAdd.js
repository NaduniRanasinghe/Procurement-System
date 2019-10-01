import React,{Component} from 'react';
import axios from "axios";
import "../CSS/Inventory.css";


export default class InventoryAdd extends Component{
       
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuanity = this.onChangeQuanity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state= {
            item_name: '',
            quanitity:'',
            price:'',
            item_name_error:'',
            item_quanitity_error:'',
            price_error:''
        }
    };
    onChangeName(e){
        this.setState({
            item_name  : e.target.value
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

    validate =() =>{
        let item_name_error="";
        let item_quanitity_error ="";
        let price_error ="";

        if(!(this.state.item_name ='')){

            item_name_error ="Item Cannot be empty";
        }
        if(!(this.state.quanitity ='')){

            item_quanitity_error ="Quantity Cannot be empty";
        }
        if(!(this.state.price ='')){

            price_error ="Price Cannot be empty";
        }


        if(item_name_error){
            this.setState({item_name_error});
            return false;
        }
        if(item_name_error){
            this.setState({item_name_error});
            return false;
        }
        if(item_name_error){
            this.setState({item_name_error});
            return false;
        }
        return true;
    }

    onSubmit(e){
        console.log(this.refs.item_name.value);
        e.preventDefault();

        // const isValid = this.validate();


        // if(isValid){

            const newInventoryItem={
                item_name: this.state.item_name,
                quanitity: this.state.quanitity,
                price:this.state.price
            };

            axios.post('http://localhost:8090/save/inventoryitem', newInventoryItem)
                .then(res => {
                        console.log(res);
                        alert(`Inventory Item added Succesfully`);
                    }
                );
            this.state= {
                item_name: '',
                quanitity:'',
                price:''
            }
        //}
    }


    componentDidMount() {
        document.title="Supplier - Inventory";

    }

    render() {
        return(
            <div style={{background:'',marginTop:'80px'}}>
                <div className="container" style={{width:700,background:'',color:'black'}}>
                    <h3 align="center">ADD NEW ITEM</h3>                 
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                ref ="item_name"
                                placeholder="Item Name"
                                value={this.state.item_name || ''}
                                onChange={this.onChangeName}
                            />
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
                            />
                        </div>
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.item_quanitity_error}
                        </div>
                        <div className="form-group">
                            <label>Price Per Item: </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Price Per Item"
                                value={this.state.price || ''}
                                onChange={this.onChangePrice}
                            />
                        </div>
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.price_error}
                        </div>
                        <div className="form-group" style={{marginLeft:'250px',width:'200px'}}>
                            <input type="submit" value="ADD ITEM" className="btn btn-primary" style={{width:'200px',height:'40px',float:"left"}}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}