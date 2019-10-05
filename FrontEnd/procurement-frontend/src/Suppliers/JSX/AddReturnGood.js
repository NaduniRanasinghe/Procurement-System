import React,{Component} from 'react';
import axios from "axios";
import "../CSS/Inventory.css";


export default class AddReturnGoods extends Component{


    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuanity = this.onChangeQuanity.bind(this);
        this.onChangeSupplier = this.onChangeSupplier.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state= {
            retItemId: '',
            retDate:'',
            retItemName:'',
            supplier:''
        }
    };
    onChangeName(e){
        this.setState({
            retDate  : e.target.value
        });
    }
    onChangeQuanity(e){
        this.setState({
            retItemName:e.target.value
        });
    }

    onChangeSupplier(e){
        this.setState({
            supplier:e.target.value
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

            const newreturnItem={
                retDate: this.state.retDate,
                retItemName: this.state.retItemName,
                price:this.state.price,
                supplier:this.state.supplier
            };

            axios.post('http://localhost:8090/ReturnItemController/addReturnedItem', newreturnItem)
                .then(res => {
                        console.log(res);
                        alert(`Inventory Item added Succesfully`);
                    }
                );
            this.state= {
                retDate: '',
                retItemName:'',
                price:'',
                supplier:''
            }
    }


    componentDidMount() {
        document.title="Supplier - Return Goods ";

    }

    render() {
        return(
            <div style={{background:'',marginTop:'80px'}}>
                <div className="container" style={{width:700,background:'',color:'black'}}>
                    <h3 align="center">ADD RETURN GOODS</h3>                 
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Return Date : </label>
                            <input
                                type="text"
                                className="form-control"
                                ref ="item_name"
                                placeholder="Return Date"
                                value={this.state.retDate || ''}
                                onChange={this.onChangeName}
                                required
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
                                value={this.state.retItemName || ''}
                                onChange={this.onChangeQuanity}
                                required
                            />
                        </div>
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.item_quanitity_error}
                        </div>
                        <div className="form-group">
                            <label>Supplier : </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Supplier"
                                value={this.state.supplier || ''}
                                onChange={this.onChangeSupplier}
                                required
                            />
                        </div>  
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.price_error}
                        </div>
                        <div className="form-gro" style={{marginTop:'1000px',marginLeft:'120px',width:'100px',display:'inline'}}>
                            <button className="btn btn-primary" style={{width:'200px',height:'40px',marginRight:'10px'}}><a className="nav-link active" href="/ReturnGoodsView"style={{color:'white'}}>VIEW RETURNS</a></button>
                            <input type="submit" value="ADD ITEM" className="btn btn-primary" style={{width:'200px',height:'40px'}}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}