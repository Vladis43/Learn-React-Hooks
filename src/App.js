import React from 'react'
import './App.css'
import ClassComponent from './ClassComponent'
import FuctionalComponent from './FuctionalComponent'

function App() {
  return (
    <div className="container">
      <div className="class-component-wrapper">
        <ClassComponent/>
      </div>
      <div className="vertical-divider"/>
      <div className="functional-component-wrapper">
        <FuctionalComponent/>
      </div>
    </div>
  )
}

export default App
