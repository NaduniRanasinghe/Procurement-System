import React,{Component} from 'react';
import axios from "axios";
import constant from '../constant';
import ProcumentDashBoard from './ProcurementDashBoard'

export default class ViewOrder extends Component{

    constructor(props) { 
        super(props) 
       
        this.state = { 
           url:this.props.location.pathname,
           order:''
        } 
      } 

      componentWillMount() {
        const { url } = this.state; 
        let id = (url.split('/')[2]);
        let status = (url.split('/')[1]);

        console.log("ID =" + id +"  STATUS = "+ status);
        axios.get(constant()+'/getorder/' + id)
            .then(res => {
                this.setState({ order: res.data}) 
                console.log(this.state.order);
                // alert("Order Id : "+ id + " process successfull");
                // this.props.history.push("/ProcumentDashBoard") 
                // window.location.reload(); 
            }).catch(err => {
                console.log(err);
            });
      }

    render(){
        return(
            <div>
                <h1>View Order</h1>
            </div>
        );
    }
}