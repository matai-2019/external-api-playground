import React from 'react'
import _random from 'lodash.random'
import api from '../api'


class App extends React.Component {
  state = {
    character: [],
    randomCharacter: null
  }

  componentDidMount () {
    api.getPeople()
    .then(character => {
      this.setState({
        character: character
      })
    })
  }

  handleClick = () => {
    const randomCharacter = this.state.character[_random(0, this.state.character.length - 1)]

    this.setState({
      randomCharacter
    })
  }

  render () {
    const { randomCharacter } = this.state

    return (
      <React.Fragment>
        <h1>Who's in Star Wars</h1>
        <button onClick={this.handleClick}>A long time ago in a galaxy far far away</button>

        {randomCharacter && (<h2>{randomCharacter.name}</h2>)}
      </React.Fragment>
    )
  }
}

export default App
