import AjaxService from '../Services/Ajax.service'
let service=new AjaxService();
export function getEmployeesData(){
    let type="GET_EMP_DATA"
    return function(dispatch){
      return service.getEmployeesData().then((res)=>{
          console.log("Res",res)
        dispatch({type:type , payload:res.data})
      })
    }
  }

export function deleteEmployee(e,ind){
  console.log("Del Index",e)
  let tempEmp;
  let type='DEL_EMP'
  
  return function(dispatch,getState){

    tempEmp=getState().employee.filter((emp,index)=>{
        return ind!==index
    })
    console.log("State",tempEmp)
    return dispatch({type:type , payload:tempEmp})
  }

}

export function editEmployee(e,ind,showModal){
  console.log("Employee to be edited",e)
  let tempEmp;
  let type='EDIT_EMP'
  
  return function(dispatch,getState){

    // tempEmp=getState().employee.map((emp,index)=>{
    //     if(ind===index){
    //       emp.id=newData.id,
    //       emp.first_name=newData.first_name,
    //       emp.last_name=newData.last_name,
    //       emp.email=newData.email,
    //       emp.gender=newData.gender,
    //       emp.city=newData.city

    //     }
    // })
    console.log("State",tempEmp)
    return dispatch({type:type , payload:{tempEmp:getState().employee,showModal:showModal}})
  }

}