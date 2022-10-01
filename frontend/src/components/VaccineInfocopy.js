import { useEffect, useState } from "react";
import axios from "axios";
import React,{ Component } from 'react'
import '../allcss/HeaderCss.css'
import jsPDF from 'jspdf'
import logo from '../images/a.jpg';
import {Button} from 'react-bootstrap'
import "jspdf-autotable";

class VaccineInfocopy extends Component{
  constructor(props) {
    super(props);
    this.state={
     vaccines : []
    }
  }
  componentDidMount(){
    axios
      .get("./vaccines.json")
      .then((res) => {
        this.setState({vaccines:res.data})
      })
      .catch((err) => console.log(err));
      
  }
  

  exportPDF = () => {
   

    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(30);

    const title = "Vaccine Details ";
    const headers = [["Vaccine", "Due Age","Max Age"]];
    const data =[];

   // data = this.state.vaccines.map(elt=> [elt.name, elt.dueAge,elt.maxAge]);

    this.state.vaccines.map(elt => {
      const vaccine = [elt.name, elt.dueAge, elt.maxAge];
      data.push(vaccine);
    } );


    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);

    // doc.autoTable(headers,data,{startY:50})
    doc.save("report.pdf")
  }
  render(){
    return (
      <div>
          <h4 style={{textAlign:'center'}}>Details Of Vaccines</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button style={{textAlign:'left'}} onClick= {this.exportPDF}>Download</Button>
          <hr/>
        <table class="table table-bordered">
            <thead>
              <tr>
              <th scope="col">Vaccine</th>
              <th scope="col">Due Age</th>
              <th scope="col">Max age</th>
              <th scope="col">Dose</th>
              <th scope="col">Route</th>
              <th scope="col">Site</th>
            </tr>
            
            </thead>
            <tbody>
            {this.state.vaccines.map((vaccine,index) => (
            <tr key={index}>
               <td>{vaccine.name}</td>
              <td>{vaccine.dueAge}</td>
              <td>{vaccine.maxAge}</td>
              <td>{vaccine.dose}</td>
              <td>{vaccine.site}</td>
              <td>{vaccine.route}</td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>
        );
  
  }
}

export default VaccineInfocopy;