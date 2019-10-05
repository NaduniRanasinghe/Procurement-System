import React,{Component} from 'react';
import axios from "axios";
import "./site.css";
import constant from '../constant'; 

export default class AddSite extends Component{

    constructor(props){
        super(props);
        this.onChangeSiteName = this.onChangeSiteName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            siteName :'',
            siteLocation:'',
            locations:['Malabe-Hospital','Maharagama-new building','Kaduwela-site1'],
            startDate:'',

        }
    };
    onChangeSiteName(e){
        this.setState({
            siteName  : e.target.value
        });
    }
    onChangeLocation(e){
        this.setState({
            siteLocation:e.target.value
        });
    }
    onChangeStartDate(e){
        this.setState({
            startDate:e.target.value
        });
    }

    validate =() =>{
        let site_name_error="";
        let site_location_error ="";

        if(!(this.state.siteName ='')){

            site_name_error ="Name Cannot be empty";
        }
        if(!(this.state.location ='')){

            site_location_error ="location Cannot be empty";
        }


        if(site_name_error){
            this.setState({site_name_error});
            return false;
        }
        if(site_location_error){
            this.setState({site_location_error});
            return false;
        }

        return true;
    }

    onSubmit(e){
        e.preventDefault();
        const { siteName,siteLocation,startDate} = this.state; 
        let obj = { 
            siteName:siteName, 
            siteLocation:siteLocation,  
            startDate:startDate,
         } 

        axios.post(constant() +'/site/save', obj)
            .then(res => {
                    console.log(res);
                    alert(`Item added successfully...`); 
                    window.location.reload(); 
                    this.props.history.push("/ManagerDashBoard") 
                }
            );
    }


    componentDidMount() {
        document.title="Site";

    }

    render() {
        const { siteLocation } = this.state; 
        return(
            <div style={{background:'',marginTop:'80px'}}>
                <div className="container" style={{width:700,background:'',color:'black'}}>
                    <h3 align="center">ADD NEW SITE</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name : </label>
                            <input
                                type="text"
                                className="form-control"
                                ref ="item_name"
                                placeholder="Site Name"
                                value={this.state.siteName || ''}
                                onChange={this.onChangeSiteName}
                            />
                        </div>
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.site_name_error}
                        </div>
                        <div className="form-group"> 
                        <label>Location :</label> 
                            <select className="form-control" name="siteLocation" onChange={this.onChangeLocation} value={siteLocation}>
                                {
                                    this.state.locations.map(sub => {
                                        return (
                                            <option key={sub.id} value={sub}>{sub}</option>
                                        )
                                    })
                                }
                            </select>
                        </div> 
                        <div style ={{fontSize:12,color:"red"}}>
                            {this.state.site_location_error}
                        </div>
                        <div className="form-group">
                            <label>Initiated Date </label>
                            <input
                                type="date"
                                className="form-control"
                                // placeholder="Date"
                                value={this.state.startDate || ''}
                                onChange={this.onChangeStartDate}
                            />
                        </div>

                        <div className="form-group" style={{marginLeft:'250px',width:'200px'}}>
                            <input type="submit" value="ADD SITE" className="btn btn-primary" style={{width:'200px',height:'40px',float:"left"}}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}