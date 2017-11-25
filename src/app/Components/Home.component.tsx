import * as React from 'react';
import {connect} from 'react-redux'

class Home extends React.Component<any,any>{
    
    render(){
        return (
            <div>{this.props.employee.map((emp)=>{
                return <div>{emp.name}</div>
            })}</div>
        )
    }
}

function mapStateToProps(state){
    return {
        employee:state.employee
    }
}

export default connect(mapStateToProps)(Home)