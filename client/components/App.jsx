import React from 'react'

import { getNumberFact } from '../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: this.randomNumber(300),
      fact: null
    }
  }

  randomNumber (num) {
    return Math.floor(Math.random() * num)
  }

  componentDidMount () {
    getNumberFact(this.state.number)
      .then(fact => {
        this.setState(
          { fact }
        )
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>Number Facts</h1>
        <div className='Number' > {this.state.number} </div>
        {this.state.fact && (<p>{this.state.fact}</p>)}
      </React.Fragment>
    )
  }
}

export default App
