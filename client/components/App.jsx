import React from 'react'

import { getNumberFact } from '../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      number: this.randomNumber(300),
      fact: null,
      type: null
    }
    this.mathFact = this.mathFact.bind(this)
  }

  randomNumber (num) {
    return Math.floor(Math.random() * num)
  }

  mathFact () {
    console.log('MATHFACT')
    this.setState(
      { type: 'math' }
    )
  }

  componentDidMount () {
    getNumberFact(this.state.number, this.state.fact)
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
        <button onClick = {this.mathFact} >Math</button>
        {this.state.type && (<h2>{this.state.type}</h2>)}
        {this.state.fact && (<p>{this.state.fact}</p>)}
      </React.Fragment>
    )
  }
}

export default App
