import React from 'react'
import {render} from 'react-dom'
import configureStore from '../store/store'
import {Provider} from 'react-redux'
import App from '../components/App'
import Bootstrap from '../client/css/bootstrap.min.css';

let initialState ={
  "formSchema": []
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
     <App/>
  </Provider>,
  document.getElementById('app')
)
