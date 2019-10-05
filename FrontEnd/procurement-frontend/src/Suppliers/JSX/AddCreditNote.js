import React,{Component} from 'react';
import axios from "axios";
import "../CSS/Inventory.css";
import constant from './constant';


export default class AddCreditNote extends Component{
    constructor(props){
        super(props);
        this.onChangeQuanity = this.onChangeQuanity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state= {
            creditNoteId: '',
            returnGoodID:'',
            creditnote:'',
        }
    };

    onChangeQuanity(e){
        this.setState({
            returnGoodID:e.target.value
        });
    }
    onChangePrice(e){
        this.setState({
            creditnote:e.target.value
        });
    }


    onSubmit(e){

        e.preventDefault();

        // const isValid = this.validate();


        // if(isValid){

            const creditNoteItem={
                creditNoteId: this.state.creditNoteId,
                returnGoodID: this.state.returnGoodID,
                creditnote:this.state.creditnote
            };

            axios.post('http://localhost:8090/save/creditNote', creditNoteItem)
                .then(res => {
                        console.log(res);
                        alert(`CreditNote Item added Succesfully`);
                    }
                );
            this.state= {
                creditNoteId: '',
                returnGoodID:'',
                creditnote:''
            }
        //}
    }


    componentDidMount() {
        document.title="CreditNote ";

    }

    render() {
        return(
            <div style={{background:'',marginTop:'80px'}}>
                <div className="container" style={{width:700,background:'',color:'black'}}>
                    <h3 align="center">ADD CREDIT NOTE</h3>                 
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Credit Note: </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Credit Note"
                                value={this.state.returnGoodID || ''}
                                onChange={this.onChangeQuanity}
                                required
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
                                value={this.state.creditnote || ''}
                                onChange={this.onChangePrice}
                                required
                            />
                        </div>
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.price_error}
                        </div>
                        <div className="form-gro" style={{marginTop:'1000px',marginLeft:'120px',width:'100px',display:'inline'}}>
                            <button className="btn btn-primary" style={{width:'200px',height:'40px',marginRight:'10px'}}><a className="nav-link active" href="/CreditNoteView"style={{color:'white'}}>VIEW DELIVERY</a></button>
                            <input type="submit" value="ADD ITEM" className="btn btn-primary" style={{width:'200px',height:'40px'}}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}