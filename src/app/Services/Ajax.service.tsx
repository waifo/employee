import axios from 'axios'
import thunk from 'redux-thunk'

class AjaxService {

  getEmployeesData(){
    return axios.get('https://emp-server.herokuapp.com/getEmp')
  }

  addEmployeeData(data){
    return axios.post('https://emp-server.herokuapp.com/addEmp',data)
  }
  updateEmployeeData(data){
    return axios.post('https://emp-server.herokuapp.com/updateEmp',data)
  }
  deleteEmployeeData(data){
    return axios.post('https://emp-server.herokuapp.com/deleteEmp',data)
  }
}


export default AjaxService