const initialState={
    employee:[
        {
            'name':'Mukesh',
        },
        {
            'name':'Aatish',
        }
    ]
}

export function employeeApp(state = initialState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
  }