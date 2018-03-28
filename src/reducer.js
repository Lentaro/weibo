//将reducer组合起来
import {combineReducers} from 'redux'
import { user } from 'reduxs/user.redux'

export default combineReducers({user})