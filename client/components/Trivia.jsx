import React from 'react'

import { getTrivia } from '../api'
// const api = require('../api')

class Trivia extends React.Component {
  state = {
    trivia: null
  }

  componentDidMount () {
    getTrivia()
      .then(trivia => {
        this.setState({
          trivia
        })
      })
  }

  render () {
    return (
    <>
      <h1>Food Trivia of the Day</h1>
  {this.state.trivia && (<p>{this.state.trivia}</p>)}
    </>
    )
  }
}

export default Trivia
