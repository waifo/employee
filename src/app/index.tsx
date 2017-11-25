import * as React from 'react'
import * as ReactDOM from 'react-dom';
import Home from './Components/Home.component'
import {store} from './Store/store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {employeeApp} from './Reducers/reducer'


class App extends React.Component<any,any>{
    render(){
        return(
            <Home />
        )
    }
}
// ReactDOM.render( <App />, window.document.getElementById("app"))
ReactDOM.render( <Provider store={store}>
    <App />
  </Provider>, window.document.getElementById("app"))

export default App;