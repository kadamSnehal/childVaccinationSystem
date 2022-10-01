import axios from 'axios';


let base_url='http://localhost:8080/cvs/child/';
class ChildService{
    
    //this get method will send get request to the url 
    //http://localhost:8080/cvs/child
    
    getChildren(){
       return axios.get(base_url+"getall")
    }
    //new modification 12---15
    getSchedule(id){
        return axios.get(base_url+"calender/"+id,{header:{
            'Content-Type':'text',
            'Access-Control-Allow-Origin': 'http://localhost:8080'
        }});
     }

    getById(childid){
        return axios.get(base_url+"get/"+childid);
    }
    addChild(child){
        return axios.post(base_url+"add",child,{headers:{
           'Content-Type':'application/json'
        }})
    }
    deleteChild(id){
        return axios.delete(base_url+"delete/"+id);
    }
    updateChild(child){
        return axios.put(base_url+"update/"+child.id,child,{headers:{
            'Content-Type':'application/json'
         }})}

}
    /* updateChild(child){
        return axios.put(base_url+"update/"+child.id,child,{headers:{
            'Content-Type':'application/json'
         }})}
     */
         
    /* deleteEmployee(empid){
        return axios.delete(base_url+"employee/"+empid);
     */

//since it is a normal javascript class we need to create object and export it

export default new ChildService();