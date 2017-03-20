import {combineReducers} from 'redux'
import formActionsReducer from './formActionsReducer'

const rootReducer = combineReducers({
  formSchema:formActionsReducer
})

export default rootReducer
