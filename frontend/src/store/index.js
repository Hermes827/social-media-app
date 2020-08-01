import {createStore, applyMiddleware} from 'redux'
import {reducer} from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

function multipleFunctions(){
  composeWithDevTools()
  applyMiddleware(thunk)
}

// export const store = createStore(reducer, multipleFunctions())
export const store = createStore(reducer, applyMiddleware(thunk))
