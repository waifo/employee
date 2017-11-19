const initialState={
    employee:[
        {
            'name':'Mukesh',
            'company':'Mindtree'
        },
        {
            'name':'Aatish',
            'company':'Mindtree'
        }
    ]
}

export function employeeApp(state = initialState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
  }