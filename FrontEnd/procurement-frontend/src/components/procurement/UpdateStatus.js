import React,{Component} from 'react';
import axios from "axios";
import constant from '../constant';
import ProcumentDashBoard from './ProcurementDashBoard'

export default class UpdateStatus extends Component{

    constructor(props) { 
        super(props) 
       
        this.state = { 
           url:this.props.location.pathname,
        } 
      } 

      componentWillMount() {
        const { url } = this.state; 
        let id = (url.split('/')[2]);
        let status = (url.split('/')[1]);

        console.log("ID =" + id +"  STATUS = "+ status);
        axios.post(constant()+'/update/status/'+ status + '/' + id)
            .then(res => {
                alert("Order Id : "+ id + " process successfull");
                this.props.history.push("/ProcumentDashBoard") 
                window.location.reload(); 
            }).catch(err => {
                console.log(err);
            });
      }
    // static deleteUsers(id){
    //     axios.delete('http://localhost:4000/users/'+id)
    //         .then(response => {
    //             alert("Data successfully deleted for :"+response.data.Name+" ID : "+response.data._id);
    //         });
    // }

    render(){
        return(
            <div>
            </div>
        );
    }
}