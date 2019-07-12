import React from 'react'
import './ComponentsStyle.css'

class ClassComponent extends React.Component {
  state = {
    counter: 0,
  }

  handlePlus = () => this.setState({ counter: this.state.counter + 1 })
  handleMinus = () => this.setState({ counter: this.state.counter - 1 })
  handleClear = () => this.setState({ counter: 0 })

  render() {
    const { counter } = this.state
    return (
      <>
        <h1>Counter Class Component</h1>
        <h3>{ counter }</h3>
        <div>
          <button onClick={this.handleMinus}>Minus</button>
          <button onClick={this.handleClear}>Clear</button>
          <button onClick={this.handlePlus}>Plus</button>
        </div>
      </>
    )
  }
}

export default ClassComponent