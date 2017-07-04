import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/app_container'
import AppStore from './stores/app_store'

document.addEventListener('DOMContentLoaded', () => {
  let node = document.getElementById('app')
  ReactDOM.render(
    <Provider store={AppStore}>
      <App />
    </Provider>, node)
})
