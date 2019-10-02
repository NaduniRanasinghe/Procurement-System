import React, { Component } from 'react'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/Login-Form-Clean.css';
import './assets/css/Navigation-with-Button.css';
import './assets/css/Footer-Clean.css';
//import EmpReg from'./Employees/Employee_registration';


import Home from "./Template/Home";
import Carousel1 from "./Template/Carousel";
import Cards from "./Template/Cards";
//import Content from "./Template/Content";



class App extends Component {
    render() {
        return (
            <div>
                <Home/>

             <Carousel1/>
             <br/>
            <Cards/>
                {/*<EmpReg/>*/}
{/*<Frame/>*/}
{/*<Content/>*/}
            </div>
        )
    }
}


export default App;