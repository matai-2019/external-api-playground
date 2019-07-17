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
      <button onClick={this.handleSubmit}>Load up</button> {this.state.quote}
    </div>
    </>
  )
}
}
export default Trump
