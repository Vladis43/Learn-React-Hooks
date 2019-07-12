import React, { useState } from 'react'
import './ComponentsStyle.css'

const FunctionalComponent = () => {
  let [counter, setCounter] = useState(0)

  const handlePlus = () => setCounter(counter + 1)
  const handleMinus = () => setCounter(counter - 1)
  const handleClear = () => setCounter(0)

  return (
    <>
      <h1>Counter Functional Component</h1>
      <h3>{ counter }</h3>
      <div>
        <button onClick={ handleMinus }>Minus</button>
        <button onClick={ handleClear }>Clear</button>
        <button onClick={ handlePlus }>Plus</button>
      </div>
    </>
  )
}

export default FunctionalComponent