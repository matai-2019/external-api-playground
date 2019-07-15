import React from 'react'
import { getInsults } from '../api'

class App extends React.Component {
  state = {
    insult: [],
    printInsult: null
  }

  componentDidMount () {
    getInsults()
      .then(insult => {
        this.setState({
          insult: insult
        })
      })
  }

  handleClick = () => {
    const printInsult = this.state.insult

    this.setState({
      printInsult
    })
  }
  render () {
    // const theInsult = this.state.insult

    return (
      <React.Fragment>
        <h1>works</h1>
        <button onClick={this.handleClick}>Load Insults</button>
      </React.Fragment>
    )
  }
}

export default App
