import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/app'
import AppStore from './stores/app_store'

document.addEventListener('DOMContentLoaded', () => {
  let node = document.getElementById('app')
  ReactDOM.render(
    <Provider store={AppStore}>
      <App />
    </Provider>, node)
})
