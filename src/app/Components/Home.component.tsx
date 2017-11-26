import * as React from 'react';
import {connect} from 'react-redux'
import Employees from './Employees.component'
import {store} from '../Store/store'
import { Provider } from 'react-redux'

class Home extends React.Component<any,any>{
    
    render(){
        return (
            <Employees/>
        //     <Provider store={store}>
        //         <Employees/>
        //    </Provider>
        )
    }
}

function mapStateToProps(state){
    return {
        employee:state.employee
    }
}

export default connect(mapStateToProps)(Home)
// export default Home