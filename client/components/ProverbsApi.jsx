import React from 'react'
import { getProverb } from '../api'

class TereoProverb extends React.Component {
state = {
  saying: null,
  name: ''
}

handleChange = (event) => {
  this.setState({ name: event.target.value })
}

handleSubmit = () => {
  getProverb(this.state.name)
    .then(saying => {
      this.setState({
        saying
      })
    })
}

render () {
  return (
    <>
    <div>
      <button onClick={this.handleSubmit}>Load up</button>
    </div>
  {this.state.saying && (
    <div>
      <p>{this.state.saying}</p>
    </div>
  )}
    </>
  )
}
}
export default TereoProverb
