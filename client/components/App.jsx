import React from 'react'
import { getPeople } from '../api'


class App extends React.Component {
  handleClick = () => {
    getPeople()
  }

  render () {
    return (
      <React.Fragment>
        <h1>Who's in Star Wars</h1>
        <button onClick={this.handleClick}>
          A long time ago in a galaxy far far away
        </button>
      </React.Fragment>
    )
  }
}

export default App
