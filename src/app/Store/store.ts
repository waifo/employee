import { createStore } from 'redux'
import {employeeApp} from '../Reducers/reducer'

export let store = createStore(employeeApp)

const unsubscribe = store.subscribe(() =>
console.log(store.getState())
)