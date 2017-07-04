import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

document.addEventListener('DOMContentLoaded', () => {
  let node = document.getElementById('app')
  ReactDOM.render(<App />, node)
})
