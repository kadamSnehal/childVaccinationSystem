import React ,{ Component } from 'react';
import axios from 'axios';
import {Form,Row,Col} from 'react-bootstrap';


class SaveVaccine extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            dose:"",
            minDays:"",
            maxDays:"",
            route:"",
            site:""
        }
    }
    add =(vaccineObj)=>{
        
          const json = JSON.stringify(vaccineObj);
          const blob = new Blob([json], {
            type: 'application/json'
          });
          const data = new FormData();
          data.append("vaccine", blob);
          const result =axios.post('./vaccine.json', data, blob);
    }
    render(){
        return(
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="vName">
                    <Form.Label column sm={4}>Vaccine Name:</Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" placeholder=" enter vaccine name" 
                        value={this.state.name}
                        onChange={(event)=>this.setState({name:event.target.value})}
                    />
                    </Col>
                </Form.Group> 
                <Form.Group  as={Row} className="mb-3" controlId="dose">
                    <Form.Label column sm={4}>Dose :</Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" placeholder="enter dose" 
                        value={this.state.dose}
                        onChange={(event)=>this.setState({dose:event.target.value})}
                    /></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="minDays">
                    <Form.Label column sm={4}>Minimum start Days :</Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" placeholder="enter start days"
                     value={this.state.minDays}
                        onChange={(event)=>this.setState({minDays:event.target.value})}
                     /></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="maxDays">
                    <Form.Label column sm={4}>Maximum days</Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" placeholder="enter last days"
                     value={this.state.maxDays}
                        onChange={(event)=>this.setState({maxDays:event.target.value})}
                     /></Col>
                </Form.Group>
                <button variant="primary" type="submit" onClick={this.add(this.state)}>
                    Add Vaccine
                </button>
  
         {/*}       <Button variant="primary" type="submit" onClick={this.addorupdate}>
                    Add or Update Product
                </Button>&emsp;
                <Button variant="primary" type="submit" onClick={this.backtomain}>
                    Back
        </Button>        */}

    </Form>
        )
    }
}
export default SaveVaccine;