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
    this.triviaFact = this.triviaFact.bind(this)
    this.dateFact = this.dateFact.bind(this)
    this.yearFact = this.yearFact.bind(this)
  }

  getFact (num, type) {
    getNumberFact(num, type)
      .then(fact => {
        this.setState(
          { fact }
        )
      })
  }

  randomNumber (num) {
    return Math.floor(Math.random() * num)
  }

  mathFact () {
    this.setState(
      { type: 'math' }
    )
    this.getFact(this.state.number, this.state.type)
  }

  triviaFact () {
    this.setState(
      { type: 'trivia' }
    )
    this.getFact(this.state.number, this.state.type)
  }

  dateFact () {
    this.setState(
      { type: 'date' }
    )
    this.getFact(this.state.number, this.state.type)
  }

  yearFact () {
    this.setState(
      { type: 'year' }
    )
    this.getFact(this.state.number, this.state.type)
  }

  componentDidMount () {
    this.getFact(this.state.number, this.state.type)
  }

  render () {
    return (
      <React.Fragment>
        <h1>Number Facts</h1>
        <div className='Number' > {this.state.number} </div>
        <button onClick={this.mathFact} >Math</button>
        <button onClick={this.triviaFact} >Trivia</button>
        <button onClick={this.dateFact} >Date</button>
        <button onClick={this.yearFact} >Year</button>

        {this.state.type && (<h2>{this.state.type}</h2>)}
        {this.state.fact && (<p>{this.state.fact}</p>)}
      </React.Fragment>
    )
  }
}

export default App
