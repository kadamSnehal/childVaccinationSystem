import axios from "axios";
import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class ChildLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            cName:"",
            fName:"",
            mName:""
        }
    }
    validate=()=>{
        axios({
            method: 'get',
            url: 'http://localhost:8080/child/login/',
            data: {
                cName : this.state.cName,
                fName : this.state.fName,
                mName : this.state.mName
            },
            headers: {'Authorization': 'Bearer ...',
            'Content-Type':'application/json'
            
                   }
          });
       /*  axios.post("http://localhost:8080/child/login/",{params:{
            cName : this.state.cName,
        fName : this.state.fName,
        mName : this.state.mName
        }},
        headers: {'Authorization': 'Bearer ...'}).then((response)=>{
        console.warn(response);
    }).catch((error)=>{
        console.warn(error);
    }) */
    }

    render(){
        return(
            <>
            <div>
                Child Name : <input type="text" name="nm" id="nm"
                    value={this.state.name}
                    placeholder="Enter First Name"
                    onChange={(event)=>this.setState({cName:event.target.value})}>
                    </input><br/>
                    Father Name : <input type="text" name="fname" id="fname"
                    value={this.state.fname}
                    placeholder="Enter Father Name"
                    onChange={(event)=>this.setState({fName:event.target.value})}>
                    </input><br/>
                   Mother Name : <input type="text" name="nname" id="mname"
                    value={this.state.mname}
                    placeholder="Enter Mother Name"
                    onChange={(event)=>this.setState({mName:event.target.value})}>
                    </input><br/>
                    <Button variant="primary" type="submit" onClick={this.validate}>
                   Log In
                </Button>&emsp;
    
            </div>
            </>
        )
    
    }
   }
export default ChildLogin;