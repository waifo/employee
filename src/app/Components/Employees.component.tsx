import * as React from "react";
import {connect} from 'react-redux'
import {getEmployeesData,deleteEmployee,editEmployee,saveDetails,addEmployee,closeModal} from '../Actions/action'
import {bindActionCreators} from 'redux';
import {Button,Modal,InputGroup} from 'react-bootstrap'

class Employees extends React.Component<any,any> {
     selectedEmp={
         id:'',
         first_name:'',
         last_name:'',
         email:'',
         gender:'',
         city:''

     };
    componentWillMount(){
       this.props.getEmployeesData()
    }

    idHandler(e){
        this.selectedEmp.id=e.target.value
    }
    firstNameHandler(e){
        this.selectedEmp.first_name=e.target.value
    }
    lastNameHandler(e){
        this.selectedEmp.last_name=e.target.value
    }
    emailNameHandler(e){
        this.selectedEmp.email=e.target.value
    }
    genderNameHandler(e){
        this.selectedEmp.gender=e.target.value
    }
    cityNameHandler(e){
        this.selectedEmp.city=e.target.value
    }

    flushData(){
        this.selectedEmp.id='';
        this.selectedEmp.first_name='';
        this.selectedEmp.last_name='';
        this.selectedEmp.email='';
        this.selectedEmp.gender='';
        this.selectedEmp.city='';
    }


    render() {
        //onHide={this.state.close}
        {console.log("Employees",this.props.employee)}
        const modalInstance = (
            <Modal show={this.props.showModal} >
                <Modal.Header>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
          
                <Modal.Body>
                    <div>
                        <label htmlFor="empID">ID</label>
                        <input type="text" name="empID" defaultValue={this.selectedEmp.id} disabled={this.props.editing} onChange={(e)=>{
                            this.idHandler(e)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="empFN">First Name</label>
                        <input type="text" name="empFN" defaultValue={this.selectedEmp.first_name} onChange={(e)=>{
                            this.firstNameHandler(e)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="empLN">Last Name</label>
                        <input type="text" name="empLN" defaultValue={this.selectedEmp.last_name} onChange={(e)=>{
                            this.lastNameHandler(e)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="empEM">E-Mail</label>
                        <input type="text" name="empEM" defaultValue={this.selectedEmp.email} onChange={(e)=>{
                            this.emailNameHandler(e)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="empG">Gender</label>
                        <input type="text" name="empG" defaultValue={this.selectedEmp.gender} onChange={(e)=>{
                            this.genderNameHandler(e)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="empC">City</label>
                        <input type="text" name="empC" defaultValue={this.selectedEmp.city} onChange={(e)=>{
                            this.cityNameHandler(e)
                        }}/>
                    </div>
                    
                </Modal.Body>
          
                <Modal.Footer>
                  <Button onClick={()=>{
                      this.props.closeModal();
                      
                  }}>Close</Button>
                  <Button bsStyle="primary" onClick={(e)=>{
                      this.props.saveDetails(this.selectedEmp.id,this.selectedEmp)
                      this.props.closeModal();
                  }}>Save changes</Button>
                </Modal.Footer>
            </Modal>
          );
        return (
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">E-Mail</th>
                            <th scope="col">Gender</th>
                            <th scope="col">City</th>
                            <th scope="col"><Button bsStyle="success" onClick={()=>{
                                this.flushData()
                                this.props.addEmployee(true)
                            }}>Add</Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.employee.map((emp,ind)=>{
                                return (
                                <tr key={ind}>
                                    <th scope="row">{ind+1}</th>
                                    <td>{emp.id}</td>
                                    <td>{emp.first_name}</td>
                                    <td>{emp.last_name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.gender}</td>
                                    <td>{emp.city}</td>
                                    <td><Button bsStyle="primary" onClick={(e)=>{
                                        this.props.employee.map((emp,index)=>{
                                            if(ind===index){
                                                this.selectedEmp.id=emp.id,
                                                this.selectedEmp.first_name=emp.first_name,
                                                this.selectedEmp.last_name=emp.last_name,
                                                this.selectedEmp.email=emp.email,
                                                this.selectedEmp.gender=emp.gender,
                                                this.selectedEmp.city=emp.city
                                            }
                                        })
                                        this.props.editEmployee(true);
                                    }}>Edit</Button></td>
                                    <td><Button bsStyle="danger" onClick={(e)=>{
                                        this.props.deleteEmployee(ind)
                                    }}>Delete</Button></td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {modalInstance}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        employee:state.employee,
        showModal:state.showModal,
        editing:state.editing
    }
}
function matchDispatchToProps(dispatch){
    
    return bindActionCreators({getEmployeesData:getEmployeesData,deleteEmployee:deleteEmployee,editEmployee:editEmployee,saveDetails:saveDetails,addEmployee:addEmployee,closeModal:closeModal},dispatch)
    // return bindActionCreators((Object).assign({},getEmployeesData,deleteEmployee),dispatch)
    
}

export default connect(mapStateToProps,matchDispatchToProps)(Employees)