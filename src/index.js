import React from 'react'
import ReactDom from 'react-dom'
import { Hi } from './components/hi'
const App = () => (<div><Hi/></div>)
ReactDom.render(<App/>, document.querySelector('div'))