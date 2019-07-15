import React from 'react'
import { getTrumpTweet } from '../api'

class Trump extends React.Component {
state = {
  quote: null,
  name: ''
}

handleChange = (event) => {
  this.setState({ name: event.target.value })
}

handleSubmit = () => {
  getTrumpTweet(this.state.name)
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
      <button onClick={this.handleSubmit}>Load up</button>
    </div>
  {this.state.quote && (
    <div>
      <p>{this.state.quote}</p>
    </div>
  )}
    </>
  )
}
}
export default Trump
