import React from 'react'

import { getTrumpQuote } from '../api'
// const api = require('../api')

class Trump extends React.Component {
state = {
  quote: null,
  name: ''
}

handleChange = (event) => {
  this.setState({ name: event.target.value })
}

handleSubmit = () => {
  getTrumpQuote(this.state.name)
    .then(quote => {
      this.setState({
        quote
      })
    })
}

render () {
  return (
    <>
    <div>
          Enter your Name:
      <input type="text" value={this.state.name} onChange={this.handleChange} />
      <button onClick={this.handleSubmit}>Submit</button>
    </div>

  {this.state.quote && (
    <div>
      <h1>The Real Donald Trump says:</h1>
      <p>{this.state.quote}</p>
    </div>
  )}
    </>
  )
}
}

export default Trump
