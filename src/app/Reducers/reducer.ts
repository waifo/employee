const initialState={
    employee:[],
    showModal:false,
    editing:false
}

export function employeeApp(state = initialState, action) {
    if(action.type==='GET_EMP_DATA'){
        return (<any>Object).assign({}, state, {
            employee:action.payload
          })
    }
    else if(action.type==='DEL_EMP'){
        return (<any>Object).assign({}, state,{
            employee:action.payload,
            editing:false
        })
    }
    else if(action.type==="EDIT_EMP"){
        return Object.assign({},state,{
            showModal:action.payload.showModal,
            editing:true
        })
    }
    else if(action.type==="SAVE_EMP"){
        return Object.assign({},state,{
            employee:action.payload,
            editing:false
        })
    }
    else if(action.type==="ADD_EMP"){
        return Object.assign({},state,{
            showModal:action.payload.showModal,
            editing:false
        })
    }
    else if(action.type==="CLOSE_MODAL"){
        return Object.assign({},state,{
            showModal:action.payload.showModal,
            editing:false
        })
    }
    else{
        return state
    }
    
  }