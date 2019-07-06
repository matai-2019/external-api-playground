import React from 'react'
// import api from '../api'
import { getCharacters, getCharDetails } from '../api'
// import Character from './Character'

class App extends React.Component {

  state = {
    characters: [],
    details: []
  }

  handleClick = () => {
    getCharacters()
      .then(characters => {
        this.setState({
          characters: characters
        })
      })
  }

  displayCharDetails = () => {
    for (let i = 0; i < this.state.characters.length; i++) {
      return getCharDetails(i.id)
        .then(details => {
          this.setState({
            details: details
          })
        })
    }
  }

  render() {
    const hpPeople = this.state.characters
    return (
      <>
        <h1>Harry Potter API Practice</h1>
        <button onClick={this.handleClick}>Load all HP characters!</button>
        <ul>
          {hpPeople.map(e => {
            return <li key={e._id}><button onClick={this.displayCharDetails}>{e.name}</button></li>
          })}
        </ul>
        <ul>
          <li>{this.state.details.name}</li>
          <li>{this.state.details.house}</li>
          <li>{this.state.details.school}</li>
          <li>{this.state.details.species}</li>
          <li>{this.state.details.bloodStatus}</li>
          <li>{this.state.details.role}</li>
        </ul>
      </>
    )
  }
}

export default App
