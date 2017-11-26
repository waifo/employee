import * as React from "react";
import {connect} from 'react-redux'
import {getEmployeesData,deleteEmployee,editEmployee} from '../Actions/action'
import {bindActionCreators} from 'redux';
import {Button,Modal,InputGroup} from 'react-bootstrap'

class Employees extends React.Component<any,any> {
    componentWillMount(){
       this.props.getEmployeesData()
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
                        <input type="text" name="empID"/>
                    </div>
                    <div>
                        <label htmlFor="empFN">First Name</label>
                        <input type="text" name="empFN"/>
                    </div>
                    <div>
                        <label htmlFor="empLN">Last Name</label>
                        <input type="text" name="empLN"/>
                    </div>
                    <div>
                        <label htmlFor="empEM">E-Mail</label>
                        <input type="text" name="empEM"/>
                    </div>
                    <div>
                        <label htmlFor="empG">Gender</label>
                        <input type="text" name="empG"/>
                    </div>
                    <div>
                        <label htmlFor="empC">City</label>
                        <input type="text" name="empC"/>
                    </div>
                    
                </Modal.Body>
          
                <Modal.Footer>
                  <Button>Close</Button>
                  <Button bsStyle="primary">Save changes</Button>
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
                            <th scope="col"><Button bsStyle="success">Add</Button></th>
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
                                        this.props.editEmployee(e,ind,true);
                                    }}>Edit</Button></td>
                                    <td><Button bsStyle="danger" onClick={(e)=>{
                                        this.props.deleteEmployee(e,ind)
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
        showModal:state.showModal
    }
}
function matchDispatchToProps(dispatch){
    
    return bindActionCreators({getEmployeesData:getEmployeesData,deleteEmployee:deleteEmployee,editEmployee:editEmployee},dispatch)
    // return bindActionCreators((Object).assign({},getEmployeesData,deleteEmployee),dispatch)
    
}

export default connect(mapStateToProps,matchDispatchToProps)(Employees)