import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './todoListScreen/reducers'
import App from './todoListScreen/components/App'
import configureStore from './store/rootStore';

let store = configureStore({});

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)