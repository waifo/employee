const initialState={
    employee:[],
    showModal:false,
    editing:false
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
            employee:action.payload,
            editing:false
        })
    }
    else if(action.type==="EDIT_EMP"){
        console.log("EDIT_EMP Fired")
        return Object.assign({},state,{
            // employee:state.employee,
            showModal:action.payload.showModal,
            editing:true
        })
    }
    else if(action.type==="SAVE_EMP"){
        console.log("SAVE_EMP Fired")
        return Object.assign({},state,{
            employee:action.payload.tempEmp,
            editing:false
        })
    }
    else if(action.type==="ADD_EMP"){
        console.log("ADD_EMP Fired")
        return Object.assign({},state,{
            showModal:action.payload.showModal,
            editing:false
        })
    }
    else if(action.type==="CLOSE_MODAL"){
        console.log("CLOSE_MODAL Fired")
        return Object.assign({},state,{
            showModal:action.payload.showModal,
            editing:false
        })
    }
    else{
        return state
    }
    
  }