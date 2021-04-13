import { combineReducers } from 'redux'
import arrowList from "./arrowGroupReducers"
import alertReducer from './alertReducer';


export default combineReducers({ arrowList, alertReducer });