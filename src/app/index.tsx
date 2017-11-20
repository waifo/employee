import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {Home} from './Components/Home.component'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import {employeeApp} from './Reducers/reducer'

// let store = createStore(employeeApp)
class App extends React.Component<any,any>{
    render(){
        // console.log("props",this.props.store)
        return(
            <Home value="abc" />
        )
    }
}
ReactDOM.render( <App />, window.document.getElementById("app"))
// ReactDOM.render( <Provider store={store}>
//     <App />
//   </Provider>, window.document.getElementById("app"))

export default App;