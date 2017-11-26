const initialState={
    employee:[],
    showModal:true
}

export function employeeApp(state = initialState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    if(action.type==='GET_EMP_DATA'){
        return (<any>Object).assign({}, state, {
            employee:action.payload
          })
    }
    else if(action.type==='DEL_EMP'){
        console.log("DEL_EMP Fired")
        return (<any>Object).assign({}, state,{
            employee:action.payload
        })
    }
    else if(action.type==="EDIT_EMP"){
        console.log("EDIT_EMP Fired")
        return Object.assign({},state,{
            employee:action.payload.tempEmp,
            showModal:action.payload.showModal
        })
    }
    else{
        return state
    }
    
  }