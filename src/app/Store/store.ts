import { createStore,applyMiddleware } from 'redux'
import {employeeApp} from '../Reducers/reducer'
import thunk from 'redux-thunk';

export let store = createStore(employeeApp,applyMiddleware(thunk))

const unsubscribe = store.subscribe(() =>
console.log(store.getState())
)