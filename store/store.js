import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from '../reducers/reducersIndex'
import thunkMiddleware from 'redux-thunk'

let finalCreateStore = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)

export default function configureStore(initialState = {formSchema:[]}){
  return finalCreateStore(rootReducer, initialState)
}
