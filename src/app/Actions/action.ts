import AjaxService from '../Services/Ajax.service'
let service=new AjaxService();
export function getEmployeesData(){
    let type="GET_EMP_DATA"
    return function(dispatch){
      return service.getEmployeesData().then((res)=>{
        dispatch({type:type , payload:res.data})
      })
    }
  }

export function deleteEmployee(emp){
  let tempEmp;
  let type='DEL_EMP'
  
  return function(dispatch,getState){
    service.deleteEmployeeData(emp).then((res)=>{
      service.getEmployeesData().then((res)=>{
      dispatch({type:type , payload:res.data})
    })
      
  })
  .catch((error)=>{
    // console.log("errorrr",error)
  })
  }

}

export function editEmployee(showModal){
  let type='EDIT_EMP'
  
  return function(dispatch,getState){
    return dispatch({type:type , payload:{showModal:showModal}})
  }

}

export function saveDetails(id,newData){
  let tempEmp
  let type='SAVE_EMP';
  let found=false;
  let data=newData
  
  return function(dispatch,getState){
    tempEmp=getState().employee.map((emp,index)=>{
        if(id===emp.id){
          emp.first_name=newData.first_name,
          emp.last_name=newData.last_name,
          emp.email=newData.email,
          emp.gender=newData.gender,
          emp.city=newData.city
          found=true;
        }
       
        return emp;
    });
    if(!found){
      service.addEmployeeData(data).then((res)=>{
        service.getEmployeesData().then((res)=>{
        dispatch({type:type , payload:res.data})
      })
        
    })
    .catch((error)=>{
      // console.log("errorrr",error)
    })
     
    }
    else{
      service.updateEmployeeData(data).then((res)=>{
        service.getEmployeesData().then((res)=>{
        dispatch({type:type , payload:res.data})
      })
        
    })
    .catch((error)=>{
      // console.log("errorrr",error)
    })
    }
  }
}

export function addEmployee(showModal){
  return {
    type:'ADD_EMP',
    payload:{showModal:showModal}
  }
}

export function closeModal(){
  return {
    type:'CLOSE_MODAL',
    payload:{showModal:false}
  }
}